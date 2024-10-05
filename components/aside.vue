<template>
  <aside class="w-80 border-2 border-red-200  grid grid-cols-1 p-4">
    <Section title="Скидки дня" subtitle="23 предложения">
      <div v-for="card in cards">
        <Card :card="card" :key="card.id"/>
      </div>
    </Section>
  </aside>
</template>

<script setup>
import { cards } from "~/data";
</script>
