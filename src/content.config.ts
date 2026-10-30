import { defineImageCollection } from '@xsynaptic/astro-image-loader';
import { dimensionsPlugin } from '@xsynaptic/astro-image-loader/dimensions';
import { exifPlugin } from '@xsynaptic/astro-image-loader/exif';
import { defineCollection } from 'astro:content';

export const collections = {
  home_carousel: defineCollection(
    defineImageCollection({
      base: "src/assets/home_carousel",
      plugins: [dimensionsPlugin(), exifPlugin({gps: true})]
    })
  )
}

import { imageLoader, ImageLoaderBaseSchema } from '@xsynaptic/astro-image-loader';

const home_carousel_images = defineCollection({
  loader: imageLoader({
    base: 'src/images',
    dataHandler: ({ filePath }) => ({ image: `./${filePath.split("/").at(filePath.split("/").length)}` }),
	}),
	schema: ({ image }) => ImageLoaderBaseSchema.extend({ image: image() }),
});