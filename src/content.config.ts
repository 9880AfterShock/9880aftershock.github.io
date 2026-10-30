import { defineImageCollection } from '@xsynaptic/astro-image-loader';
import { dimensionsPlugin } from '@xsynaptic/astro-image-loader/dimensions';
import { exifPlugin } from '@xsynaptic/astro-image-loader/exif';
import { defineCollection } from 'astro:content';

import { imageLoader, ImageLoaderBaseSchema } from '@xsynaptic/astro-image-loader';

import path from "node:path";


export const collections = {
  home_carousel: defineCollection(
    defineImageCollection({
      base: "src/assets/home_carousel",
      plugins: [dimensionsPlugin(), exifPlugin({gps: true})]
    })
  ),
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
  })
}