<template>
  <Header />
  <div class="container flex w-full">
    <Aside />
    <div class="w-full border-2 border-red-200 p-8">
      <slot />
    </div>
  </div>
</template>
