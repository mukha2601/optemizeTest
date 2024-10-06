<template>
  <Header :toggleSidebar="toggleSidebar" />
  <Sidebar v-if="sidebarOpen" />
  <div
    id="main"
    class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden"
  >
    <Aside />
    <div class="md:col-span-2 lg:col-span-4 p-4 md:p-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>
