
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { generate3dAvatar } from '@/ai/flows/generate-3d-avatar-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';

interface ProfileAvatarProps {
  baseImageSrcPath: string; // e.g., "/profile-base.png"
  altText: string;
  width: number;
  height: number;
}

export function ProfileAvatar({ baseImageSrcPath, altText, width, height }: ProfileAvatarProps) {
  const [finalAvatarSrc, setFinalAvatarSrc] = useState<string | null>(null);
  const [baseImageDataUri, setBaseImageDataUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchAndConvertBaseImage() {
      setIsLoading(true);
      setErrorState(null);
      setBaseImageDataUri(null); // Reset before fetching

      try {
        const response = await fetch(baseImageSrcPath);
        if (!response.ok) {
          const errorTitle = response.status === 404 ? 'Base Image Not Found' : 'Base Image Load Error';
          const statusText = `Status: ${response.status}${response.statusText ? ` ${response.statusText}` : ''}`;
          
          console.warn(`ProfileAvatar: ${errorTitle} for ${baseImageSrcPath}. ${statusText}. Falling back to placeholder.`);
          const description = `Could not load profile base image from ${baseImageSrcPath}. Please ensure the image exists in the /public directory. ${statusText}`;
          
          setErrorState(description);
          toast({ variant: 'destructive', title: errorTitle, description });
          setFinalAvatarSrc(`https://placehold.co/${width}x${height}.png`);
          setIsLoading(false);
          return; 
        }

        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUri = reader.result as string;
          setBaseImageDataUri(dataUri);
          setFinalAvatarSrc(dataUri); 
        };
        reader.onerror = () => {
          console.error('ProfileAvatar: FileReader error while converting base image.');
          throw new Error('FileReader error while converting base image.');
        };
        reader.readAsDataURL(blob);
      } catch (err: any) { 
        console.error('ProfileAvatar: Unexpected error fetching or processing base image:', err);
        const description = `An unexpected error occurred: ${err.message || 'Unknown error'}. Displaying placeholder.`;
        setErrorState(description);
        toast({ variant: 'destructive', title: 'Image Processing Error', description });
        setFinalAvatarSrc(`https://placehold.co/${width}x${height}.png`);
        setIsLoading(false);
      }
    }
    if (baseImageSrcPath) { // Only fetch if a path is provided
        fetchAndConvertBaseImage();
    } else {
        // Handle case where no baseImageSrcPath is provided (e.g. set to placeholder directly)
        console.warn('ProfileAvatar: No baseImageSrcPath provided. Using placeholder.');
        setFinalAvatarSrc(`https://placehold.co/${width}x${height}.png`);
        setIsLoading(false);
    }
  }, [baseImageSrcPath, width, height, toast]);

  useEffect(() => {
    if (!baseImageDataUri) {
      // If base image failed to load, AI generation won't proceed.
      // isLoading should have been set to false by the first useEffect's error handling.
      return;
    }

    let isActive = true; 

    async function get3DAvatar() {
      setErrorState(null); 
      try {
        const result = await generate3dAvatar({ characterImageUri: baseImageDataUri });
        if (isActive) {
          if (result.generatedAvatarUri) {
            setFinalAvatarSrc(result.generatedAvatarUri);
          } else {
            throw new Error('AI generation did not return an image URI.');
          }
        }
      } catch (err: any) {
        if (isActive) {
          console.error('ProfileAvatar: Error generating 3D avatar:', err);
          const description = 'Failed to generate 3D avatar. Showing the original 2D image instead.';
          setErrorState(description); 
          toast({ variant: 'destructive', title: '3D Avatar Generation Failed', description });
          if(baseImageDataUri) setFinalAvatarSrc(baseImageDataUri); 
        }
      } finally {
        if (isActive) {
          setIsLoading(false); 
        }
      }
    }

    get3DAvatar();

    return () => {
      isActive = false; 
    };
  }, [baseImageDataUri, toast]);

  if (isLoading && !finalAvatarSrc) {
    return <Skeleton className="rounded-full shadow-2xl border-4 border-primary/20 object-cover" style={{ width: `${width}px`, height: `${height}px` }} />;
  }
  
  const displaySrc = finalAvatarSrc || `https://placehold.co/${width}x${height}.png`;

  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={displaySrc}
        alt={altText}
        width={width}
        height={height}
        className="rounded-full shadow-2xl border-4 border-primary/20 object-cover"
        priority={!finalAvatarSrc || finalAvatarSrc === baseImageDataUri} 
        onError={() => {
            if (isActive) { // Check if component is still mounted
                console.error('ProfileAvatar: Failed to load final avatar image resource:', displaySrc);
                const description = 'Displaying a default placeholder image.';
                setErrorState(`Failed to load avatar image. ${description}`);
                setFinalAvatarSrc(`https://placehold.co/${width}x${height}.png`);
                toast({ variant: 'destructive', title: 'Image Load Error', description });
                setIsLoading(false); // Ensure loading is stopped on image error
            }
        }}
      />
      {/* Show error badge specifically if 3D gen failed and we fell back to 2D */}
      {errorState && finalAvatarSrc === baseImageDataUri && baseImageDataUri !== null && ( 
        <div 
          className="absolute bottom-2 right-2 bg-destructive text-destructive-foreground p-1.5 rounded-full shadow-md cursor-help" 
          title={errorState}
        >
          <AlertCircle size={18} />
        </div>
      )}
    </div>
  );
}
