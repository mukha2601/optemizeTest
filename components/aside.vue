<template>
  <aside class="aside">
    <Section title="Скидки дня" :subtitle="`${cards.length} предложения`">
      <div class="card-grid">
        <div v-for="card in visibleCards">
          <Card :card="card" :key="card.id" />
        </div>
      </div>
    </Section>
    <button @click="showAllCards" class="show-all-btn">
      Показать все
      <span class="circle">
        <span class="plus">▸</span>
      </span>
    </button>
  </aside>
</template>

<script setup>
import { cards } from "~/data";

const showAll = ref(false);

const visibleCards = computed(() => {
  return showAll.value ? cards : cards.slice(0, 3);
});

const showAllCards = () => {
  showAll.value = true;
};
</script>

<style scoped>
.circle {
  position: absolute;
  right: -0.5rem;
  border: 2px solid white;
  background-color: gray;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  width: 0.75rem;
  height: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0;
}

button:hover .circle {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
}

.plus {
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: rotate(90deg);
}

button:hover .plus {
  opacity: 1;
}

.aside {
  width: 100%;
  background-color: #f0f6f6;
  padding: 1rem;
}

.card-grid {
  display: grid;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.show-all-btn {
  margin: 0 auto;
  position: relative;
  width: 12rem;
  height: 3rem;
  background-color: white;
  font-weight: 600;
  border: 1px solid gray;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}
</style>
