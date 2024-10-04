<template>
  <div class="w-full border-b-2 border-dotted border-red-200">
    <header class="container flex justify-between items-center h-20">
      <div>logo</div>
      <div class="flex">
        <nav class="flex gap-6">
          <ul v-for="item in navbar">
            <li :key="item.key">
              <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="w-40 border-2"></div>
        <button class="w-40 border-2"></button>
      </div>
    </header>
  </div>
</template>

<script setup>
const navbar = [
  { key: "all", label: "Все предложения", link: "/" },
  { key: "Discounts", label: "Скидки", link: "/" },
  { key: "Stock", label: "Акции", link: "/" },
  { key: "Promo", label: "Промокоды", link: "/" },
  { key: "Cashback", label: "Кешбэк", link: "/" },
];
</script>
