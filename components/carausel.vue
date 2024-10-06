<script setup>
import { cards } from "~/data";
const items = cards.reverse();
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full md:basis-1/2 lg:basis-1/3 px-2',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4',
      },
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-start-8 sm:-start-9',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-end-8 sm:-end-9',
    }"
    arrows
    indicators
  >
    <Card :card="item" :key="item.id" />
  </UCarousel>
</template>
