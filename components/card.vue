<template>
  <article
    class="relative w-full border-2 rounded-lg overflow-hidden bg-white mb-4 hover:border-green-600 cursor-pointer hover:shadow-lg"
  >
    <div class="w-full h-36 overflow-hidden">
      <img :src="card?.img" alt="" class="w-full h-full object-cover" />
    </div>
    <span
      class="absolute top-1 left-1 px-3 p-2 rounded-md bg-red-200 text-xs text-red-500 font-bold"
      >До 29 февраля</span
    >
    <div class="p-2 flex flex-col gap-3">
      <p>{{ card.name }}</p>
      <h1 class="font-bold hover:text-[#248888]">{{ card.text }}</h1>
      <div class="flex justify-between">
        <p class="text-sm">Скидки</p>
        <div>
          <span class="p-2 py-1 rounded-md border-2 text-sm">Кешбэк</span
          ><span class="p-2 py-1 rounded-md bg-gray-400 text-sm">{{
            card.stock
          }}</span>
        </div>
      </div>
      <p class="text-xs">{{ card.type }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
p:hover {
  color: red;
}
</style>
