<!-- src/TabButtons.svelte -->
<script>
    export let tabs = [];
    export let activeTab = 0;
  
    const switchTab = (index) => {
      activeTab = index;
    };
  </script>
  
  <div class="flex space-x-4">
    {#each tabs as tab, index (tab)}
      <button
        class="px-4 py-2 rounded-md text-white focus:outline-none bg-primary-500"
        class:activeTab={activeTab === index}
        on:click={() => switchTab(index)}
      >
        {tab}
      </button>
    {/each}
  </div>
  