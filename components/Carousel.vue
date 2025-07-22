<script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'

  import 'vue3-carousel/dist/carousel.css'

  defineComponent({
    name: 'CarouselComponent',
    components: {
      Carousel,
      Slide,
      Pagination
    }
  })
  const props = defineProps({ images: { type: Array } })
</script>
<template>
  <Carousel class="h-min" :autoplay="5000" :wrap-around="true">
    <Slide v-for="image in props.images" :key="image.id">
      <div class="carousel__item">
        <img :src="image.url" :alt="image.name" />
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>
<style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
</style>
