<template>
  <section>
    <h1 class="text-2xl">{{ title }}</h1>
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
