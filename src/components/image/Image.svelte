<script>
    export let src;
    export let alt;
    export let imageClass = null;
</script>
  
<picture class="{imageClass}">
    <source type="image/webp" srcset={src} />
    <source type="image/jpeg" srcset={src} />
    <img class="w-full bg-center" src={src} alt={alt} />
</picture>
  