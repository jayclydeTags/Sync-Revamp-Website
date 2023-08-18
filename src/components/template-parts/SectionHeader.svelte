<script>
	import Button from "../Button.svelte";

	export let subheader;
	export let header;
	export let accentText;
	export let description = null;
	export let buttonText = null;
	export let buttonLink = null;
</script>

<div class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
    <div class="max-w-full lg:max-w-[48rem] mb-8 lg:mb-0">
        {#if subheader}
		<h3 class="text-gray-500 uppercase font-bold tracking-[.125rem]">{subheader}</h3>
        {/if}
        <h2 class="font-sans text-5xl font-bold tracking-[-0.06rem] leading-[3.75rem] mb-6">
            {header} 
            <span class="italic font-bold font-accent">{accentText}</span>
        </h2>
        {#if description}
            <p class="text-base text-gray-600">{description}</p>
        {/if}
    </div>

    <!-- <div> -->
        {#if buttonText && buttonLink}
            <Button text={buttonText} href={buttonLink} size="large" borderRadius="rounded-full" type="secondary"/>
        {/if}
    <!-- </div> -->
	
</div>
