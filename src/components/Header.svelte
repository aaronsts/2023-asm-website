<script>
	import Icon from './Logo.svelte';
</script>

<nav class="fixed left-0 right-0 z-10 bg-slate-50/80 shadow backdrop-blur-sm ">
	<div class="wrapper flex justify-between py-2">
		<Icon />
		<ul class="flex items-center gap-2">
			<li class="px-1 text-lg"><a href="/">home</a></li>
			<li class="px-1 text-lg"><a href="#portfolio">portfolio</a></li>
			<li class="px-1 text-lg"><a href="#about">about</a></li>
			<li class="px-1 text-lg"><a href="#contact">contact</a></li>
		</ul>
	</div>
</nav>
