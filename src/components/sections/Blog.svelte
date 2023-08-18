<script>
	import BlogCard from "../BlogCard.svelte";
	import SectionHeader from "../template-parts/SectionHeader.svelte";

    let blogData = [
        {
            imageSrc: "images/blog/img1.jpg",
            date: 'August 14, 2023',
            title: 'Facebook Ads for Small Business & Their Benefits',
            blogLink: '/blog-1'
        },
        {
            imageSrc: "images/blog/img2.jpg",
            date: 'August 14, 2023',
            title: 'What is a Website Sitemap & Why is It Important?',
            blogLink: '/blog-1'
        },
        {
            imageSrc: "images/blog/img3.jpg",
            date: 'August 14, 2023',
            title: 'What Is Voice Search & How to Optimize for SEO',
            blogLink: '/blog-1'
        },
        {
            imageSrc: "images/blog/img4.jpg",
            date: 'August 14, 2023',
            title: 'How to Create Facebook Ad Campaign',
            blogLink: '/blog-1'
        },
    ];
    
</script>

<!-- Blog SECTION -->
<section class="container flex items-center mx-auto">
	<div class="container flex flex-col px-0 py-24 gap-y-16">
        <SectionHeader
            subheader="Latest News & Articles"
            header="Keep up with"
            accentText="news and promotions."
            buttonText="View All"
            buttonLink="/blog"
        />

        <div class="flex flex-wrap gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {#each blogData as blog}
                <BlogCard
                imageSrc={blog.imageSrc}
                date={blog.date}
                title={blog.title}
                blogLink={blog.blogLink}
            />
            

        {/each}
        </div>
        
	</div>
</section>
