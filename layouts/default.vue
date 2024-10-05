<template>
  <Header />
  <div
    class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
  >
    <Aside />
    <div class="md:col-span-2 lg:col-span-4 border-2 border-red-200 p-8">
      <slot />
    </div>
  </div>
</template>
