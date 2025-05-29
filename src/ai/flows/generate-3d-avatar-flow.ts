
'use server';
/**
 * @fileOverview A Genkit flow to generate a 3D avatar from a 2D character image.
 *
 * - generate3dAvatar - A function that takes a 2D character image URI and returns a 3D avatar image URI.
 * - Generate3dAvatarInput - The input type for the generate3dAvatar function.
 * - Generate3dAvatarOutput - The return type for the generate3dAvatar function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Generate3dAvatarInputSchema = z.object({
  characterImageUri: z.string().describe("The 2D character image as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type Generate3dAvatarInput = z.infer<typeof Generate3dAvatarInputSchema>;

const Generate3dAvatarOutputSchema = z.object({
  generatedAvatarUri: z.string().describe("The generated 3D avatar image as a data URI."),
});
export type Generate3dAvatarOutput = z.infer<typeof Generate3dAvatarOutputSchema>;

export async function generate3dAvatar(input: Generate3dAvatarInput): Promise<Generate3dAvatarOutput> {
  return generate3dAvatarFlow(input);
}

const generate3dAvatarFlow = ai.defineFlow(
  {
    name: 'generate3dAvatarFlow',
    inputSchema: Generate3dAvatarInputSchema,
    outputSchema: Generate3dAvatarOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: [
        { media: { url: input.characterImageUri } },
        {
          text: `denoise`,
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // TEXT is often required even if only IMAGE is primary
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed or did not return a media URL.');
    }
    return { generatedAvatarUri: media.url };
  }
);
