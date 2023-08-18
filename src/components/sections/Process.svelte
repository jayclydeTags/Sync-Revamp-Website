<script>
	import SectionHeader from "../template-parts/SectionHeader.svelte";
	import Button from "../Button.svelte";
</script>

<!-- Blog SECTION -->
<section class="container flex items-center mx-auto">
	<div class="container flex flex-col px-0 py-24 gap-y-5 md:gap-y-16">
		<SectionHeader
			subheader="Our Process"
			header="Crafting Digital Excellence:"
			accentText="Navigating Our Creative Journey"
		/>

		<div class="flex flex-col gap-y-12 md:grid md:grid-cols-3 md:gap-8 lg:gap-16">
			<div class="flex flex-col gap-8">
				<div class="border-b border-gray-300">
					<h4
						class="font-accent italic font-bold text-7xl leading-[5.625rem] tracking-[-0.09rem] mb-2"
					>
						01
					</h4>
				</div>
				<div>
					<h5 class="text-2xl font-medium leading-[2rem] mb-4">Research</h5>
					<p class="text-gray-600">
						Whether it’s web design and development, digital marketing, or a
						custom software application, our projects and solutions begin with
						the gathering and analysis of a client’s requirements. Next, we will
						discuss what you want and what else you need for your project. We
						will also discuss costing, time frame estimates, and projections.
					</p>
				</div>
				<div>
					<Button
						text="Get Free Quote"
						href="/"
						size="large"
						borderRadius="rounded-full"
						type="secondary"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-8">
				<div class="border-b border-gray-300">
					<h4
						class="font-accent italic font-bold text-7xl leading-[5.625rem] tracking-[-0.09rem] mb-2"
					>
						02
					</h4>
				</div>
				<div>
					<h5 class="text-2xl font-medium leading-[2rem] mb-4">
						Project Proper
					</h5>
					<p class="text-gray-600">
						We introduce you to the right staff to start working on your
						project. Then we have web designers and developers to create your
						website, digital marketers to improve website rankings, and
						application developers who can create your own business app.
					</p>
				</div>
			</div>

			<div class="flex flex-col gap-8">
				<div class="border-b border-gray-300">
					<h4
						class="font-accent italic font-bold text-7xl leading-[5.625rem] tracking-[-0.09rem] mb-2"
					>
						03
					</h4>
				</div>
				<div>
					<h5 class="text-2xl font-medium leading-[2rem] mb-4">
						Testing and Reporting
					</h5>
					<p class="text-gray-600">
						Our websites and apps are always tested thoroughly before handing
						them over to you for approval. We don’t just hand them over too,
						because we’ll also provide tutorials or training on how to manage
						the website/application. As for digital marketing, reports are made
						periodically for you to closely monitor the online performance of
						your website.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
