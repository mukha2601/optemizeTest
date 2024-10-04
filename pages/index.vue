<template>
  <Section
    title="Топовые скидки"
    class="bg-[#F0F6F6] text-[#248888] font-bold p-4 rounded-lg "
  >
    <button
      v-for="tab in state.tabs"
      :key="tab.en"
      @click="state.component = tab.en"
      class="me-4 font-normal mb-4"
    >
      {{ tab.ru }}
    </button>

    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </Section>
</template>

<script setup>
import { reactive, computed } from "vue";
import Network from "~/components/network.vue";
import Nutrition from "~/components/nutrition.vue";
import Shops from "~/components/shops.vue";

const components = { Network, Nutrition, Shops };

const state = reactive({
  tabs: [
    { ru: "Питание", en: "Nutrition" },
    { ru: "Связь", en: "Network" },
    { ru: "Магазины", en: "Shops" },
  ],
  component: "Nutrition",
});

const currentComponent = computed(() => components[state.component]);
</script>
