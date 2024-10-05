<template>
  <Section
    title="Топовые скидки"
    class="bg-[#F0F6F6] text-[#248888] font-bold p-4 rounded-lg"
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
  <Section>
    <h1>Добро пожаловать на сайт</h1>
    <h3>
      Ваш надёжный помощник в поиске лучших скидок и акций различных компаний!
    </h3>
    <p>
      Мы собрали для вас все самые выгодные предложения, чтобы вы могли
      сэкономить свои деньги и получить максимум удовольствия от покупок.
    </p>
    <span>Развернуть текст</span>
  </Section>
  <Section title="FAQ">
    <div class="faq">
      <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
        <div class="faq-question" @click="toggle(index)">
          <span>{{ item.question }}</span>
          <span class="icon">{{ activeIndex === index ? "x" : "+" }}</span>
        </div>

        <div v-if="activeIndex === index" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
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

const faqItems = ref([
  {
    question: "Какие компании представлены на сайте?",
    answer: "Здесь будет текст о компаниях, которые представлены на сайте.",
  },
  {
    question: "Как я могу быть в курсе новых скидок и акций на сайте?",
    answer:
      "Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.",
  },
  {
    question: "Могу ли я поделиться найденными скидками и акциями с друзьями?",
    answer:
      "Да, вы можете поделиться скидками и акциями через социальные сети или мессенджеры.",
  },
]);

// Aktive elementni boshqarish uchun
const activeIndex = ref(null);

// Savolni ochish/yopish funksiyasi
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
