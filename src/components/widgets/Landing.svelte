<script>
	import Icon from '../atoms/Icon.svelte';
</script>

<section class="wrapper  flex h-screen ">
	<div class=" flex w-full flex-col justify-center">
		<h1 class="w-1/2 justify-self-center">Delivering your projects on time.</h1>
		<div
			class="group absolute bottom-8 left-[calc(50%-32px)] flex h-16 w-16 origin-center items-center justify-center justify-self-end rounded-full border-slate-300 bg-slate-50 transition-all duration-300 hover:left-[calc(50%-128px)] hover:-bottom-36 hover:h-64 hover:w-64 hover:border"
		>
			<a href="#portfolio" class="transition-all duration-300 group-hover:-translate-y-12 ">
				<Icon name="chevron-down" width="4rem" height="4rem" />
			</a>
		</div>
	</div>
	<div class="absolute right-0 -z-10 h-screen w-1/2 object-center">
		<img loading="lazy" class="h-full object-cover object-bottom" src="./images/landing-page.webp" alt="forest" />
	</div>
</section>
