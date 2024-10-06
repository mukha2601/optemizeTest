<template>
  <!-- <teleport to="#main"> -->
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
        <div class="mt-12 flex justify-center gap-7">
          <button>
            <UIcon name="icon-park:telegram" class="w-5 h-5" />
          </button>
          <button>
            <UIcon name="lucide:user-round-plus" class="w-5 h-5" />
          </button>
          <button
            class="p-2 me-4 rounded-lg bg-[#FF2E4C] text-white max-sm:text-xs"
          >
            Добавить скидку
          </button>
        </div>
      </div>
    </aside>
  <!-- </teleport> -->
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
