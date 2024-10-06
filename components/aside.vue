<template>
  <aside class="w-full bg-[#F0F6F6]  p-4">
    <Section title="Скидки дня" :subtitle="`${cards.length} предложения`">
      <div v-for="card in cards" class="grid max-sm:grid-cols-2">
        <Card :card="card" :key="card.id" />
      </div>
    </Section>
    <button
      class="relative w-48 h-12 bg-white font-semibold rounded-xl flex items-center justify-center  transition-colors duration-300"
    >
      Показать все
      <span
        class="absolute -right-2 border-2 border-white bg-gray-500 w-5 h-5 rounded-full flex items-center justify-center text-white transition-all duration-300 circle"
      >
        <span class="plus opacity-0 transition-opacity duration-300 rotate-90">▸</span>
      </span>
    </button>
  </aside>
</template>

<script setup>
import { cards } from "~/data";
</script>

<style scoped>
.circle {
  width: 0.75rem; /* Kichik doira o'lchami */
  height: 0.75rem;
  transition: all 0.3s ease; /* Silliq animatsiya */
  font-size: 0; /* '+' belgisini ko'rinmas qilish */
}

button:hover .circle {
  width: 2rem; /* Doira kattalashadi */
  height: 2rem;
  font-size: 1rem; /* '+' belgisini ko'rsatish uchun kattalashtirish */
}

.plus {
  opacity: 0; /* Standart holatda ko'rinmaydi */
  transition: opacity 0.3s ease; /* Silliq paydo bo'lish */
}

button:hover .plus {
  opacity: 1; /* Hover qilinganda '+' belgisi ko'rinadi */
}
</style>
