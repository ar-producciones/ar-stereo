
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
  name: 'LayoutComponent',
  components: { Header, Footer },
  data() {
    return {
      saludo: 'hola'
    }
    
  },
  methods:{},    
}
</script>
<template>
  <div class="w-full flex flex-col">
    <Header/>
    <slot></slot>
    <Footer/>
  </div>
    
</template>