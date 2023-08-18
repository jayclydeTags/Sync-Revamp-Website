<script>
	import Image from "../image/Image.svelte";
    import CtaImage from "$lib/images/cta-image.png";

</script>

<div class="flex flex-col justify-start bg-primary-500 relative overflow-hidden">

    <!-- <div class="absolute top-[-1.5625rem] left-[5.4375rem]"> -->
        <svg class="absolute inset-0" xmlns="http://www.w3.org/2000/svg" width="1920" height="703" viewBox="0 0 1920 703" fill="none">
            <path d="M1960.5 175.933C1870.47 124.785 1471.5 -100.067 1379.5 56.4327C1333.59 134.537 1436.95 232.85 1423.5 395.433C1411.42 541.433 1372.57 649.075 1182.5 688.057C971 731.434 640.5 673.934 566 452.934C498.925 253.959 114.5 372.933 -9.5 495.433" stroke="#FFB870" stroke-width="2" stroke-dasharray="6 6"/>
          </svg>
    <!-- </div> -->

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class=" flex gap-y-16 flex-col py-24 text-white leading-normal">
			<div class="relative">
                <div class="absolute bottom-0 lg:top-0 right-0">
                    <Image src={CtaImage} alt="Banner Image" />
                </div>
				<div class="mb-16 max-w-[54rem]">
					<h3 class="text-lg mb-4 uppercase tracking-[.125rem]">
						Ready to work with us?
					</h3>
					<h2 class="text-white text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.09rem] lg:leading-11 relative">
						Collaborate with us to create or enhance your
						<span class="font-accent italic">digital product.</span>
					</h2>
				</div>

				<button
					class="px-8 py-4 bg-white rounded-full flex items-center transition"
					type="button"
				>
					<a class="font-accent italic text-7xl text-black mr-8" href="/">
						Let's Talk</a
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
					>
						<g clip-path="url(#clip0_665_569)">
							<path
								d="M33.5 12L53.5 32M53.5 32L33.5 52M53.5 32H-145"
								stroke="black"
								stroke-width="4"
								stroke-linecap="square"
							/>
						</g>
						<defs>
							<clipPath id="clip0_665_569">
								<rect width="64" height="64" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="container-fluid px-4 md:px-8 border-t border-primary-300">
		<div
			class=" container flex gap-y-16 flex-col py-16 text-white leading-normal"
		>
			<div class="flex justify-between flex-col lg:flex-row ">
                <h3 class="text-4xl font-bold tracking-[.045rem] leading-[2.75rem] pb-6 lg:pb-0">
                    Too early to take the first step?
                </h3>

                <a class="font-accent italic text-4xl border-b border-black pb-1" href="/">Learn More About Us</a>
            </div>
		</div>
	</div>
</div>
