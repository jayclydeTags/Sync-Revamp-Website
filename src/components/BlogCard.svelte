<script>
	import Image from "./image/Image.svelte";

	export let imageSrc;
	export let date;
	export let title;
	export let blogLink;
</script>

<div class="flex flex-col w-full">
    <Image src={imageSrc} alt={title} imageClass="w-full overflow-hidden"/>
	<div class="mt-4">
		<p class="mb-2 text-base text-gray-600">{date}</p>
		<h3 class="text-xl font-bold leading-[1.875rem]">
			<a href={blogLink}>
				{title}
			</a>
		</h3>
	</div>
</div>
