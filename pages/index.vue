<script setup>
  import Carousel from '@/components/Carousel.vue'
  import Player from '@/components/Player.vue'
  import DownloadApp from '@/components/DownloadApp.vue'
  import { ESLOGAN, ABOUT_TEXT, CANONICAL_URL, PARTNERS } from '@/common/constants.js'

  import alfredoRojasImage from '../assets/img/alfredo-rojas.jpg'
  import marianaCamachoImage from '../assets/img/mariana-camacho.jpg'
  import jesusChaminCastroImage from '../assets/img/jesus-chamin-castro.jpg'
  import neomarCepedaImage from '../assets/img/neomar-cepeda.jpg'
  import edgarPetitImage from '../assets/img/edgar-petit.jpg'
  import CardImage from '@/components/CardImage/CardImage.vue'
  import { usePartners } from '~/features/partners/composables/usePartners'
  import { NuxtLink } from '#components'
  const aboutImage = 'about-ar-stereo.jpg'
  const router = useRouter()
  const images = computed(() => {
    return [
      { id: 1, name: 'Alfredo Rojas', url: alfredoRojasImage },
      { id: 2, name: 'Mariana Camacho', url: marianaCamachoImage },
      { id: 3, name: 'Jesus Chamin Castro', url: jesusChaminCastroImage },
      { id: 4, name: 'Neomar Cepeda', url: neomarCepedaImage },
      { id: 5, name: 'Edgar Petit', url: edgarPetitImage }
    ]
  })

  const locutores = [
    {
      id: 0,
      name: 'Daenerys Targaryen',
      image: 'https://thronesapi.com/assets/images/daenerys.jpg'
    },
    {
      id: 1,
      name: 'Samwell Tarly',
      image: 'https://thronesapi.com/assets/images/sam.jpg'
    },
    {
      id: 2,
      name: 'Jon Snow',
      image: 'https://thronesapi.com/assets/images/jon-snow.jpg'
    },
    {
      id: 3,
      name: 'Arya Stark',
      image: 'https://thronesapi.com/assets/images/arya-stark.jpg'
    },
    {
      id: 4,
      name: 'Sansa Stark',
      image: 'https://thronesapi.com/assets/images/sansa-stark.jpeg'
    },
    {
      id: 5,
      name: 'Brandon Stark',
      image: 'https://thronesapi.com/assets/images/bran-stark.jpg'
    }
  ]
  useSeoMeta({
    title: `Tu Radio AR Stereo | ${ESLOGAN}`,
    ogTitle: `Tu Radio AR Stereo | ${ESLOGAN}`,
    description: ABOUT_TEXT,
    ogDescription: ABOUT_TEXT,
    ogImage: `${CANONICAL_URL}${aboutImage}`,
    ogImageAlt: 'Tu Radio AR Stereo',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  })
  const { getPartners } = usePartners()
  const partners = ref()

  const handleRegister = () => {
    router.push('/tu-voz-ar-stereo')
  }
  onMounted(async () => {
    partners.value = await getPartners()
  })
</script>

<template>
  <div class="w-full">
    <section id="carousel" class="relative h-auto overflow-hidden bg-black">
      <Carousel class="h-[800px]" :images="images" />
    </section>
    <section id="home" class="relative overflow-hidden bg-black">
      <Player />
    </section>
    <DownloadApp />

    <section v-if="false" class="h-[700px] tu-voz-ar-stereo">
      <div>
        <span class="flex items-center justify-end gap-4 p-8">
          <h4 class="text-white">Tu Voz Ar Stereo</h4>
          <Button
            class="font-bold cursor-pointer"
            value="Registrarse"
            theme="gold"
            @on-click="handleRegister"
          />
        </span>
      </div>
    </section>
    <!-- Locutores -->
    <section v-if="false" class="flex justify-center w-full pb-5 bg-black">
      <div class="flex flex-col justify-center w-2/3 h-auto lg:w-[1200px]">
        <h3 class="p-8 italic font-bold text-center text-white">Nuestros locutores</h3>
        <div class="flex justify-between p-10 md:p-10">
          <CardImage :items="locutores" />
        </div>
      </div>
    </section>
    <!-- Aliados -->
    <section class="flex justify-center w-full bg-white">
      <div class="flex flex-col justify-center w-2/3 h-auto lg:w-[1200px]">
        <h3 class="py-4 italic font-bold text-center text-black lg:p-8">
          {{ PARTNERS }}
        </h3>
        <div
          class="grid items-center justify-center grid-cols-2 gap-6 py-8 sm:grid-cols-3 md:grid-cols-4"
        >
          <NuxtLink
            v-for="(partner, index) in partners"
            :key="index"
            :to="partner.url"
            class="flex justify-center"
          >
            <NuxtImg
              :aria-label="partner.name"
              :src="partner.image"
              :alt="`Logo de ${partner.name}`"
              :title="partner.name"
              width="150"
              class="object-contain cursor-pointer"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .tu-voz-ar-stereo {
    background-image: url('tu-voz-arstero.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
