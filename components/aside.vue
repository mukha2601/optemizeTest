<template>
  <aside class="w-full border-2 border-red-200  grid grid-cols-1 p-4">
    <Section title="Скидки дня" :subtitle="`${cards.length} предложения`">
      <div v-for="card in cards">
        <Card :card="card" :key="card.id"/>
      </div>
    </Section>
  </aside>
</template>

<script setup>
import { cards } from "~/data";
</script>
