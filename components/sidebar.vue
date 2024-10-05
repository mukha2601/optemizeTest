<template>
  <teleport to="#main">
    <aside class="w-full h-screen bg-[rgba(0,0,0,0.525)] absolute z-10">
      <div class="w-[85%] absolute right-0 h-full bg-white p-4">
        <nav class="flex flex-col gap-6 items-center">
          <ul v-for="item in navbar">
            <li :key="item.key">
              <NuxtLink :to="item.link" class="hover:text-red-500 text-xl">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
        
      </div>
    </aside>
  </teleport>
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
