<script>
    import Button from "../Button.svelte";
</script>

<!-- ABOUT US SECTION -->
<section class="about-section container mx-auto flex items-center">
	<div class="xl:container flex items-center gap-y-6 flex-col py-24">
		<h3 class="text-gray-500 uppercase font-bold tracking-[.125rem]">
			About Us
		</h3>

		<div class="header max-w-[54rem] justify-center flex flex-col gap-y-16">
			<h2
				class="font-sans text-5xl font-semibold text-center tracking-[-0.06rem] leading-[3.75rem]"
			>
				Syntactics Inc. is a leading company in the Philippines that has been
				providing quality
				<span class="font-accent italic tracking-normal"
					>online and business solution for 23 years.</span
				>
				We are passionate about helping business succeed, and we are committed to
				providing our clients with the best possible service.
			</h2>
			<div class="flex items-center justify-center">
				<Button
					text="About Us"
					type="secondary"
					size="large"
					href="/"
					borderRadius="rounded-full"
				/>
			</div>
		</div>
	</div>
</section>