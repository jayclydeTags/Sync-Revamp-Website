<script>
    import clutchLogo from "$lib/images/Clutch.co logo.svg";
	import star from "$lib/images/star.svg";
	import Button from "../Button.svelte";

</script>

<!-- BANNER SECTION -->
<section class="hero-section container mx-auto flex items-center">
	<div class="xl:container flex items-center gap-y-16 flex-col py-24">
		<div class="header max-w-screen-lg mx-auto">
			<h1 class="font-sans text-7xl font-bold leading-11 text-center mb-6">
				Empower Your Business With IT Solutions That Deliver <span
					class="font-accent italic">Remarkable Results</span
				>

			</h1>
			<p
				class=" flex items-center gap-2 text-2xl text-center mb-6 mx-auto w-fit"
			>
				<span>Our clients greatly enjoy collaborating with us, </span>
				<span>
					<img src={clutchLogo} alt="Clutch.co logo" />
				</span>
				<span>5.0 </span>
				<span class="flex">
					<img src={star} alt="Stars" />
					<img src={star} alt="Stars" />
					<img src={star} alt="Stars" />
					<img src={star} alt="Stars" />
					<img src={star} alt="Stars" />
				</span>
				<span>5 Reviews</span>
			</p>
			<div class="flex gap-2 w-fit mx-auto">
				<Button
					text="Get A Fre Quote"
					type="primary"
					size="large"
					borderRadius="rounded-full"
				/>
				<Button
					text="Check Our Services"
					type="secondary"
					size="large"
					href="/"
					borderRadius="rounded-full"
				/>
			</div>
		</div>

		<div class="statistics flex items-center gap-4 flex-row">
			<div class="counter flex flex-col justify-center min-w-[12.5rem]">
				<span
					class="counter-value text-5xl text-center leading-12 font-bold tracking-[-0.06em]"
					>8,000+</span
				>
				<span class="counter-label text-base text-center"
					>Satisfied Clients</span
				>
			</div>
			<span class="w-px bg-gray-50 h-[3.75rem]" />
			<div class="counter flex flex-col justify-center min-w-[12.5rem]">
				<span
					class="counter-value text-5xl text-center leading-12 font-bold tracking-[-0.06em]"
					>5,767+</span
				>
				<span class="counter-label text-base text-center"
					>Developed Websites</span
				>
			</div>
			<span class="w-px bg-gray-50 h-[3.75rem]" />
			<div class="counter flex flex-col justify-center min-w-[12.5rem]">
				<span
					class="counter-value text-5xl text-center leading-12 font-bold tracking-[-0.06em]"
					>10+</span
				>
				<span class="counter-label text-base text-center">Dedicated Teams</span>
			</div>
			<span class="w-px bg-gray-50 h-[3.75rem]" />
			<div class="counter flex flex-col justify-center min-w-[12.5rem]">
				<span
					class="counter-value text-5xl text-center leading-12 font-bold tracking-[-0.06em]"
					>23</span
				>
				<span class="counter-label text-base text-center"
					>Years of Experience</span
				>
			</div>
		</div>

		<!-- <div>
			<div class="w-[64.875rem] h-[14.375rem] rotate-[33deg] bg-[--]"></div>
		</div> -->
	</div>
</section>