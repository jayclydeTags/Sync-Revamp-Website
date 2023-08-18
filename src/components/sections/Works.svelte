<script>
    import Tab from "../Tab.svelte";
    import ProjectCard from "../ProjectCard.svelte";
    import Button from "../Button.svelte";
	import SectionHeader from "../template-parts/SectionHeader.svelte";


    let tabItems = ["Website Projects", "Mobile App Projects"];
	let activeTabItem = "Website Projects";
	const tabChange = (e) => {
		activeTabItem = e.detail;
	};


    let webProject = [
		{
			title: "MedLife",
			alt: "Project Name",
			link: "/projects",
			image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
			tags: ["Web Design", "Web Development"],
		},
		{
			title: "Construction Company",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Web Design", "Web Development"],
		},
		{
			title: "FitnesXia",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Web Design", "Web Development"],
		},
		{
			title: "SAASA",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Web Design", "Web Development"],
		},
	];

	let mobileProject = [
		{
			title: "Project Name",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Mobile Application", "Mobile Development"],
		},
		{
			title: "Project Name",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Mobile Application", "Mobile Development"],
		},
		{
			title: "Project Name",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Mobile Application", "Mobile Development"],
		},
		{
			title: "Project Name",
			alt: "Project Name",
			link: "/projects",
			image: "https://picsum.photos/200/300",
			tags: ["Mobile Application", "Mobile Development"],
		},
	];

</script>


<!-- Project SECTION -->
<section class="container flex items-center mx-auto project-section">
	<div class="flex flex-col py-24 gap-y-16">
		<div>
			<SectionHeader
            subheader="Our Works"
            header="See our sample"
            accentText="works."
        />
	
			<div class="flex">
				<Tab {activeTabItem} {tabItems} on:tabChange={tabChange} />
			</div>
		</div>
		

		{#if activeTabItem === "Website Projects"}
			<div class="flex flex-wrap gap-8 projects-container">
				{#each webProject as project (project)}
					<ProjectCard {project} />
				{/each}

				<!-- {#if projects === undefined}
					<p>...waiting for projects</p>
				{:else if projects === null} 
					<p style="color: red">error</p>
					
				{:else}
					{#each projects as project}
						<ProjectCard project={project} />
					{/each}
				{/if} -->
			</div>

			<div class="flex items-center">
				<Button
					text="See More Work"
					type="secondary"
					size="large"
					href="/projects/web-projects"
					borderRadius="rounded-full"
				/>
			</div>
		{:else if activeTabItem === "Mobile App Projects"}
			<div class="flex flex-wrap gap-8 projects-container">
				{#each mobileProject as project (project)}
					<ProjectCard {project} />
				{/each}
			</div>

			<div class="flex items-center">
				<Button
					text="See More Work"
					type="secondary"
					size="large"
					href="/projects/mobile-projects"
					borderRadius="rounded-full"
				/>
			</div>
		{/if}
	</div>
</section>