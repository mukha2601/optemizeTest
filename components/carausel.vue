<script setup>
import { cards } from "~/data";
const items = cards;
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full md:basis-1/2 lg:basis-1/3',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4',
      },
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-start-11',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-end-11',
    }"
    arrows
    indicators
  >
    <Card :card="item" :key="item.id" />
  </UCarousel>
</template>
