<template>
  <Section class="section-container">
    <h1 class="section-title">Топовые скидки</h1>
    <button
      v-for="tab in state.tabs"
      :key="tab.en"
      @click="state.component = tab.en"
      class="tab-button"
    >
      {{ tab.ru }}
    </button>

    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </Section>
  <Section>
    <article class="article-content">
      <h1 class="article-title">Добро пожаловать на сайт</h1>
      <h3 class="article-subtitle">
        Ваш надёжный помощник в поиске лучших скидок и акций различных компаний!
      </h3>
      <p class="article-description">
        Мы собрали для вас все самые выгодные предложения, чтобы вы могли
        сэкономить свои деньги и получить максимум удовольствия от покупок.
      </p>
      <span class="expand-text">Развернуть текст</span>
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

<style scoped>
.section-container {
  background-color: #f0f6f6;
  font-weight: bold;
  padding: 1rem;
  border-radius: 0.5rem; /* rounded-lg */
}

.section-title {
  color: #248888;
  font-size: 1.875rem; /* text-3xl */
  padding-bottom: 1rem; /* pb-4 */
  border-bottom: 1px solid; /* border-b-2 */
}

.tab-button {
  margin-right: 1rem; /* me-4 */
  font-weight: normal; /* font-normal */
  margin-top: 1rem;
  margin-bottom: 1rem; /* my-4 */
}

.tab-button:hover{
  color: red;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-title {
  font-weight: bold;
  font-size: 1.5rem; /* text-2xl */
}

.article-subtitle {
  font-weight: bold;
  font-size: 1.125rem; /* text-lg */
}

.article-description {
  font-size: 0.875rem; /* text-sm */
}

.expand-text {
  font-size: 0.875rem; /* text-sm */
}
</style>
