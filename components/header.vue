<template>
  <div class="w-full border-b-2 border-dotted border-red-200">
    <header class="container flex justify-between items-center h-16">
      <NuxtLink to="/"><span class="font-bold text-3xl">Logo</span></NuxtLink>
      <div class="flex items-center">
        <UIcon
          name="material-symbols-light:lists"
          class="me-2 text-red-500 max-lg:hidden"
        />
        <nav class="flex gap-6 max-lg:hidden">
          <ul v-for="item in navbar">
            <li :key="item.key">
              <NuxtLink :to="item.link" class="hover:text-red-500">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-6 ms-10">
          <button>
            <UIcon
              name="ph:magnifying-glass-light"
              class="w-5 h-5 text-green-800"
            />
          </button>
          <button class="max-lg:hidden">
            <UIcon name="icon-park:telegram" class="w-5 h-5" />
          </button>
          <button class="max-lg:hidden">
            <UIcon name="lucide:user-round-plus" class="w-5 h-5" />
          </button>
          <button @click="toggleLang">
            {{ lang }}
          </button>
          <button
            class="p-2 me-4 rounded-lg bg-[#FF2E4C] text-white max-sm:text-xs"
          >
            Добавить скидку
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
let lang = ref("Ry");
const toggleLang = () => {
  lang.value = lang.value === "En" ? "Ry" : "En";
};
const navbar = [
  { key: "all", label: "Все предложения", link: "/" },
  { key: "Discounts", label: "Скидки", link: "/" },
  { key: "Stock", label: "Акции", link: "/" },
  { key: "Promo", label: "Промокоды", link: "/" },
  { key: "Cashback", label: "Кешбэк", link: "/" },
];
</script>
