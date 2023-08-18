<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tabItems;
  export let activeTabItem;

</script>

<div>
  <div class="flex p-2 border border-gray-400 rounded-full">
    {#each tabItems as tabItem}
      <button  on:click={() => dispatch('tabChange', tabItem)}>
        <div class="py-3 px-6 rounded-full" class:active={tabItem === activeTabItem}>{tabItem}</div>
      </button>
    {/each}
  </div>
</div>

<style>
  .active {
    color: white;
    background-color: #FF6F00;
  }

  .active:hover {
    background-color: #1D2939;
  }
</style>