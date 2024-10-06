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

<template>
  <section class="section">
    <h1 class="section-title">{{ title }}</h1>
    <p class="section-subtitle">{{ subtitle }}</p>
    <main class="section-content">
      <slot />
    </main>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .section {
    margin-bottom: 3rem;
  }
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
}

.section-subtitle {
  margin-top: 1rem;
}

.section-content {
  margin-top: 1rem;
}
</style>
