<!-- src/ProjectCard.svelte -->
<script>
	import Badge from "./Badge.svelte";
	import Image from "./image/Image.svelte";
	export let project;
</script>

<div class="project-card xl:max-w-[40rem] flex flex-col">
	<Image src={project.image} alt={project.alt} />
	<div class="project-details">
		<h3 class="text-xl font-medium mb-2">
			<a href={project.link}>
				{project.title}
			</a>
		</h3>
		<div class="flex flex-wrap gap-2">
			{#each project.tags as tag (tag)}
				<Badge text={tag} />
			{/each}
		</div>
	</div>
</div>
