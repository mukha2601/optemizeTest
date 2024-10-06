<template>
  <Section class="bg-[#F0F6F6] font-bold p-4 rounded-lg">
    <h1 class="text-[#248888] text-3xl pb-4 border-b-2">Топовые скидки</h1>
    <button
      v-for="tab in state.tabs"
      :key="tab.en"
      @click="state.component = tab.en"
      class="me-4 font-normal my-4"
    >
      {{ tab.ru }}
    </button>

    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </Section>
  <Section>
    <article class="flex flex-col gap-4">
      <h1 class="font-bold text-2xl">Добро пожаловать на сайт</h1>
      <h3 class="font-bold text-lg">
        Ваш надёжный помощник в поиске лучших скидок и акций различных компаний!
      </h3>
      <p class="text-sm">
        Мы собрали для вас все самые выгодные предложения, чтобы вы могли
        сэкономить свои деньги и получить максимум удовольствия от покупок.
      </p>
      <span class="text-sm">Развернуть текст</span>
    </article>
  </Section>
  <Faq />
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
