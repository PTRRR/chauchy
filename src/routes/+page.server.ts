import { readFileSync } from 'fs';
import { join } from 'path';
import sizeOf from 'image-size';
import type { ImageRowsItem } from '$lib/components/ImagesRow.svelte';

const imageGroups = [
	[
		'/images/resized/003.jpg',
		'/images/resized/008.jpg',
		'/images/resized/007.jpg',
		'/images/resized/009.jpg'
	],
	['/images/resized/004.jpg', '/images/resized/005.jpg', '/images/resized/006.jpg'],
	['/images/resized/002c_COUPE PERSPECTIVE_NB.jpg', '/images/resized/003b.jpg'],
	['/images/resized/004b_PLAN_R+2.jpg', '/images/resized/004c_PLAN_R+1.jpg'],
	['/images/resized/011_CARTES_WEB_A42.jpg', '/images/resized/012_CARTES_WEB_A4.jpg']
];

function getImageDimensions(imagePath: string) {
	try {
		const fullPath = join(process.cwd(), 'static', imagePath);
		const buffer = readFileSync(fullPath);
		const dimensions = sizeOf(buffer);
		if (dimensions.width && dimensions.height) {
			return { width: dimensions.width, height: dimensions.height };
		}
	} catch (error) {
		console.error(`Error reading image ${imagePath}:`, error);
	}
	return null;
}

export async function load({ setHeaders }) {
	const imageGroupDimensions: ImageRowsItem[][] = imageGroups.map((group) => {
		const imageData = group.map((imagePath) => {
			const dimensions = getImageDimensions(imagePath);
			return {
				src: imagePath,
				width: dimensions?.width ?? 0,
				height: dimensions?.height ?? 0,
				aspectRatio: dimensions ? dimensions.width / dimensions.height : 1
			};
		});

		const maxHeight = imageData.reduce((acc, it) => {
			if (acc < it.height) acc = it.height;
			return acc;
		}, -Infinity);

		const totalWidth = imageData.reduce((acc, it) => {
			acc += maxHeight * it.aspectRatio;
			return acc;
		}, 0);

		return imageData.map((img) => ({
			url: img.src,
			width: `${((maxHeight * img.aspectRatio) / totalWidth) * 100}%`
		}));
	});

	setHeaders({
		'Cache-Control': 'max-age=60, stale-while-revalidate=86400'
	});

	return {
		imageGroupDimensions
	};
}
