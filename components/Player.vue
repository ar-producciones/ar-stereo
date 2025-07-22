<script setup>
  defineComponent({
    name: 'PlayerComponent'
  })
</script>
<template>
  <div class="player">
    <iframe
      src="https://players.hostingned.net/playlivestream/arstereo/"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</template>
<style scoped>
  .player iframe {
    min-width: 100%;
    height: 400px;
  }
</style>
