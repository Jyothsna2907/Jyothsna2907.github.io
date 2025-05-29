
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
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
  
  return (
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={baseImageSrcPath}
        alt={altText}
        width={width}
        height={height}
        className="rounded-full shadow-2xl border-4 border-primary/20 object-cover"
      />
      {/* Show error badge specifically if 3D gen failed and we fell back to 2D */}
      {/* {errorState && finalAvatarSrc === baseImageDataUri && baseImageDataUri !== null && ( 
        <div 
          className="absolute bottom-2 right-2 bg-destructive text-destructive-foreground p-1.5 rounded-full shadow-md cursor-help" 
          title={errorState}
        >
          <AlertCircle size={18} />
        </div>
      )} */}
    </div>
  );
}
