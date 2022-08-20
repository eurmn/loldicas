import { sveltekit } from '@sveltejs/kit/vite';
import unoCSS from 'unocss/vite';
import { presetWind, presetIcons, transformerVariantGroup } from 'unocss';
import { defineConfig, loadEnv } from 'vite';

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	return defineConfig({
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
		],
	});
};