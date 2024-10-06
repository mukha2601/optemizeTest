<script setup>
const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
  <Header :toggleSidebar="toggleSidebar" />
  <Sidebar v-if="sidebarOpen" />
  <div id="main" class="container main-container">
    <Aside />
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 100%;
  /* overflow: hidden; */
}
.content-container {
  padding: 1rem;
  grid-column: span 1;
}

@media (min-width: 640px) and (max-width: 766px) {
  .content-container {
    /* grid-column: span 1;  */
    width: 400px;
  }
}

@media (min-width: 640px) {
  .main-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .main-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .content-container {
    grid-column: span 2;
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .main-container {
    grid-template-columns: repeat(5, 1fr);
  }
  .content-container {
    grid-column: span 4;
  }
}
</style>
