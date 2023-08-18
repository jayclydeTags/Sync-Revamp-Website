<!-- Button.svelte -->
<script>
	export let text = "Button";
	export let onClick = null;
	export let type = "primary";
	export let size = "medium";
	export let disabled = false;
	export let href = null;
	export let borderRadius = "rounded";
	export let active = null;

	// Define a mapping of button types to Tailwind CSS classes
	const typeClasses = {
		primary:
			"bg-primary-500  border-primary-500 hover:bg-gray-900 hover:border-gray-900 text-white",
		secondary:
			"bg-transparent border  border-gray-900 hover:bg-gray-900 hover:text-white",
		tertiary: "bg-gray-100 text-gray-700 border border-gray-400",
	};

	// Define a mapping of button sizes to Tailwind CSS classes
	const sizeClasses = {
		small: "px-2 py-1 text-sm",
		medium: "px-4 py-2 text-base",
		large: "py-4 px-6 text-base ",
	};

	// Computed class strings
	$: buttonClasses = `${borderRadius} ${typeClasses[type]} ${sizeClasses[size]}`;

	// Computed class for disabled state
	$: disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
</script>

{#if href}
	<button class={buttonClasses + " " + disabledClass} {disabled} class:active>
		<a {href}>
			{text}
		</a>
	</button>
{:else}
	<button
		on:click={onClick}
		class={buttonClasses + " " + disabledClass}
		{disabled}
		class:active
		type="button"
	>
		{text}
	</button>
{/if}
