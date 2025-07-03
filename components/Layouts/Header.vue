<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { defineComponent } from "vue";
import { useRouter } from "vue-router"; // Importar useRouter

export default defineComponent({
  name: "HeaderComponent",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Bars3Icon,
    XMarkIcon,
  },
  props: { navigation: { type: Array } },
  setup() {
    const router = useRouter(); // Obtener el enrutador
    const dynamicPage = computed(() => {
      return router.currentRoute.value.path.split("/").pop(); // Obtener la última parte de la ruta
    });

    const navigateTo = (href) => {
      router.push(href); // Navegar programáticamente
    };

    return { dynamicPage, router, navigateTo }; // Retornar navigateTo para usarlo en el template
  },
});
</script>

<template>
  <Disclosure as="nav" class="bg-black" v-slot="{ open }">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-32">
        <div class="absolute right-0 flex items-center inset-y- sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gold"
          >
            <span class="absolute -inset-0.5" />
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center justify-center flex-1 sm:justify-between">
          <div class="flex items-center flex-shrink-0">
            <img
              class="w-auto h-20"
              src="../../assets/img/banner.png"
              alt="Ar Stereo"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                @click="navigateTo(item.href)"
                :class="[
                  dynamicPage === item.href
                    ? 'text-gold'
                    : 'text-white hover:text-gold hover:cursor-pointer',
                  'uppercase px-3 py-2 text-lg font-bold',
                ]"
                :aria-current="dynamicPage === item.href ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        ></div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          @click="navigateTo(item.href)"
          <!--
          Cambio
          aquí
          también
          --
        >
          :class="[ item.current ? 'bg-gold text-white' : 'text-gray-300
          hover:bg-gold hover:text-white', 'uppercase block rounded-md px-3 py-2
          text-base font-medium', ]" :aria-current="item.current ? 'page' :
          undefined" >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
