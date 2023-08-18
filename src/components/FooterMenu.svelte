<script>
    export let menuItems = [];
  </script>
  
  <div class="footer-menu">
    <ul class="text-white flex flex-col gap-3">
      {#each menuItems as item (item.id)}
        <li><a class="transition hover:text-primary-500" href={item.link}>{item.label}</a></li>
      {/each}
    </ul>
  </div>

  