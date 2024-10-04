<script setup lang="ts">
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
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
      class: '-start-10',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-end-10',
    }"
    arrows
    class="w-[90%] mx-auto"
    indicators
  >
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>
