<script setup lang="ts">
  const layout = 'default'
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
  html {
    height: 100%;
    display: flex;
  }
  body {
    height: 100%;
    width: 100%;
  }

  #__nuxt {
    height: 100%;
  }
</style>
