<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.picture-left', {
			scrollTrigger: {
				trigger: '.picture-left',
				start: 'top 95%',
				end: 'bottom 90%',
				scrub: true,
			},
			x: '-50%',
		});
		gsap.to('.picture-right', {
			scrollTrigger: {
				trigger: '.picture-right',
				start: 'top 95%',
				end: 'bottom 90%',
				scrub: true,
			},
			x: '50%',
		});

		gsap.to('.about-me-text', {
			scrollTrigger: {
				trigger: '.about-me-text',
				start: 'top center',
				end: 'top 20%',
				scrub: true,
			},
			scale: 1,
			opacity: '100%',
		});
	});
</script>

<section id="about" class="relative flex h-screen w-full justify-center overflow-hidden">
	<div class="picture-left absolute left-0 h-full w-1/2">
		<img src="/images/landing-page.webp" alt="placeholder" class="h-full w-full object-cover object-left" />
	</div>

	<div class="about-me-text  flex w-[calc(50vw-16px)] flex-col  items-center border-b border-slate-900 pb-4 pt-20">
		<h2 class="ml-24 mb-8 w-fit">
			about.
			<span class="relative top-4 right-24 text-8xl font-bold text-cyan-400/20">ME</span>
		</h2>
		<div class="mb-8 w-4/5 text-center">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eius optio hic debitis eaque porro commodi
				eligendi accusantium cumque numquam cum adipisci maiores laudantium at ipsam accusamus laboriosam, sequi qui.
			</p>
			<hr class="my-4 mx-auto w-2/3 border-slate-300" />
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur iste molestiae amet ab aspernatur
				similique officiis eum nulla impedit tempore natus quas, velit numquam fugiat exercitationem omnis enim dolore
				non ut? Exercitationem amet rem natus eum! Soluta, laborum incidunt maxime voluptates eius labore rem a corporis
				iure aliquam. Eligendi!
			</p>
		</div>
		<div class="w-4/5 text-center">
			<h3>Ready to accelerate your online business presence?</h3>
			<button class="my-8 bg-cyan-500 py-4 px-8 text-xl text-slate-50 transition-colors hover:bg-cyan-600"
				>Get in touch</button
			>
		</div>
		<hr class="my-4 mx-auto w-2/3 border-slate-300" />
	</div>

	<div class="picture-right absolute right-0 flex h-full w-1/2">
		<img src="/images/landing-page.webp" alt="placeholder" class="h-full w-full object-cover object-right" />
	</div>
</section>
