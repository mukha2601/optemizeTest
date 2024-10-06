<template>
  <div class="w-full border-b-2 border-dotted border-red-200">
    <header class="container flex justify-between items-center h-16 max-lg:p-4">
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
            class="relative max-lg:hidden px-5 pe-7 p-2 bg-red-500 text-white font-semibold rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
          >
            Добавить скидку
            <span
              class="absolute -right-2 border-2 border-white bg-gray-500 w-5 h-5 rounded-full flex items-center justify-center text-white transition-all duration-300 circle"
            >
              <span class="plus opacity-0 transition-opacity duration-300"
                >+</span
              >
            </span>
          </button>
          <button class="lg:hidden" @click="toggleSidebar">
            <UIcon name="gg:menu" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
const props = defineProps({
  toggleSidebar: Function,
});

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

<style scoped>
.circle {
  width: 0.75rem; /* Kichik doira o'lchami */
  height: 0.75rem;
  transition: all 0.3s ease; /* Silliq animatsiya */
  font-size: 0; /* '+' belgisini ko'rinmas qilish */
}

button:hover .circle {
  width: 2rem; /* Doira kattalashadi */
  height: 2rem;
  font-size: 1rem; /* '+' belgisini ko'rsatish uchun kattalashtirish */
}

.plus {
  opacity: 0; /* Standart holatda ko'rinmaydi */
  transition: opacity 0.3s ease; /* Silliq paydo bo'lish */
}

button:hover .plus {
  opacity: 1; /* Hover qilinganda '+' belgisi ko'rinadi */
}
</style>
