<template>
  <section class="mb-10 sm:mb-12">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <p class="mt-4">{{ subtitle }}</p>
    <main class="mt-4">
      <slot />
    </main>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>
