<script>
	import { onMount } from "svelte"
	import createGlobe from "cobe"

	let canvas
	let phi = 0

	onMount(() => {
		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: 300 * 2,
			height: 300 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [37.7595, -122.4367], size: 0.03 },
				{ location: [40.7128, -74.006], size: 0.1 }
			],
			onRender: (state) => {
				state.phi = phi
				phi += 0.01
			}
		})
	})
</script>

<div class="w-full text-center">
	<canvas bind:this={canvas} style="height: 300px;" class="w-full"></canvas>
</div>

<style>
	canvas {
		text-align: center;
		place-items: center;
		place-content: center;
	}
</style>
