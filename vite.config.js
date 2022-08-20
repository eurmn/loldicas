import { sveltekit } from '@sveltejs/kit/vite';
import unoCSS from 'unocss/vite';
import { presetWind, presetIcons, transformerVariantGroup } from 'unocss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		unoCSS({
			presets: [
				presetWind(),
				presetIcons(),
			],
			transformers: [
				transformerVariantGroup(),
			],
			theme: {
				fontFamily: {
					'poppins': ['Poppins', 'sans-serif'],
				}
			}
		})
	]
};

export default config;
