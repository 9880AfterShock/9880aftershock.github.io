import { defineImageCollection } from '@xsynaptic/astro-image-loader';
import { dimensionsPlugin } from '@xsynaptic/astro-image-loader/dimensions';
import { exifPlugin } from '@xsynaptic/astro-image-loader/exif';
import { defineCollection, reference } from 'astro:content';

import { imageLoader, ImageLoaderBaseSchema } from '@xsynaptic/astro-image-loader';

import path from "node:path";

import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/events" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    time: z.string(),
    alt: z.string(),
    button: z.object({
      url: z.url(),
      text: z.string()
    }).optional(),
    image: reference("event_images")
  }),
});

export const collections = {
  home_carousel_images: defineCollection({
    loader: imageLoader({
      base: "src/assets/home_carousel",
      dataHandler: ({ filePath }) => ({
        image: `./${path.basename(filePath)}`,
      }),
    }),
    schema: ({ image }) =>
      ImageLoaderBaseSchema.extend({
        image: image(),
      }),
  }),
  event_photos: defineCollection({
    loader: imageLoader({
      base: "src/assets/event_photos",
      dataHandler: ({ filePath }) => ({
        image: `./${path.basename(filePath)}`,
      }),
    }),
    schema: ({ image }) =>
      ImageLoaderBaseSchema.extend({
        image: image(),
      }),
  }),
  events: events
}