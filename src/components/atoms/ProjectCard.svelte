<script>
	import Icon from './Icon.svelte';
</script>

<div class="flex flex-row gap-4 border-b border-slate-800 py-4 ">
	<div class="flex w-1/2 flex-col justify-between">
		<div>
			<h3 class="mb-2">project 1</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint.</p>
		</div>
		<button
			class=" flex w-fit flex-row items-center justify-center gap-2 bg-cyan-600 px-4 py-2 text-slate-50 transition-all hover:gap-4 "
			>View more
			<Icon name="arrow-left" direction="s" width="1.5rem" height="1.5rem" />
		</button>
	</div>
	<div class="w-1/2">
		<img src="/images/placeholder.webp" alt="placeholder (3D render)" />
	</div>
</div>
