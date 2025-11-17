import { join } from 'path';
import type { ImageRowsItem } from '$lib/components/ImagesRow.svelte';

const imageGroups = [
	[
		{ src: '003.jpg', width: 2667, height: 2000 },
		{ src: '008.jpg', width: 2667, height: 2000 },
		{ src: '007.jpg', width: 2000, height: 2667 },
		{ src: '009.jpg', width: 2000, height: 2667 }
	],
	[
		{ src: '004.jpg', width: 2667, height: 2000 },
		{ src: '005.jpg', width: 2667, height: 2000 },
		{ src: '006.jpg', width: 2667, height: 2000 }
	],
	[
		{ src: '002c_COUPE PERSPECTIVE_NB.jpg', width: 2262, height: 2000 },
		{ src: '003b.jpg', width: 1501, height: 2000 }
	],
	[
		{ src: '004b_PLAN_R+2.jpg', width: 2244, height: 2000 },
		{ src: '004c_PLAN_R+1.jpg', width: 2159, height: 2000 }
	],
	[
		{ src: '011_CARTES_WEB_A42.jpg', width: 2829, height: 2000 },
		{ src: '012_CARTES_WEB_A4.jpg', width: 2829, height: 2000 }
	]
];

export async function load({ setHeaders }) {
	const imageGroupDimensions: ImageRowsItem[][] = imageGroups.map((group) => {
		const imageData = group.map((image) => {
			return {
				src: join('images', 'resized', image.src),
				width: image.width,
				height: image.height,
				aspectRatio: image.width / image.height
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
