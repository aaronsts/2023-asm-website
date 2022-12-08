<script>
	import ProjectCard from '../atoms/ProjectCard.svelte';
</script>

<section id="portfolio" class="flex h-fit ">
	<div class="sticky top-0 -left-8 -z-10 h-screen w-[50vw] overflow-visible object-center">
		<img loading="lazy" class="h-full object-cover object-bottom" src="./images/landing-page.webp" alt="forest" />
	</div>
	<div class=" flex w-1/2 flex-col items-start pl-4 pt-20 ">
		<div class="w-[calc(50vw-16px)] border-b border-slate-900 pb-4">
			<h2 class="relative">
				portfolio.
				<span class="relative top-4 right-24 text-8xl font-bold text-cyan-400/20">MY</span>
			</h2>
		</div>
		<div class="wrapper-right py-4 pl-2">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</section>
