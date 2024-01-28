<script>
import { Hopper, Slide } from "hooper";

export default {
  name: "CarouselComponent",
  components: {
    Hopper,
    Slide,
  },
};
</script>
<template>
  <Hopper>
    <Slide> Slide 1 </Slide>
    <Slide> Slide 2 </Slide>
  </Hopper>
</template>
