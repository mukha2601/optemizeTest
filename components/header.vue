<template>
  <div class="header-container">
    <header class="container header-content">
      <NuxtLink to="/"><span class="logo-text">Logo</span></NuxtLink>
      <div class="header-actions">
        <UIcon name="material-symbols-light:lists" class="icon-lists" />
        <nav class="nav-links">
          <ul v-for="item in navbar">
            <li :key="item.key">
              <NuxtLink :to="item.link" class="nav-link">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="action-buttons">
          <button>
            <UIcon name="ph:magnifying-glass-light" class="icon-search" />
          </button>
          <button class="icon-telegram">
            <UIcon name="icon-park:telegram" class="icon" />
          </button>
          <button class="icon-user">
            <UIcon name="lucide:user-round-plus" class="icon" />
          </button>
          <button @click="toggleLang">
            {{ lang }}
          </button>
          <button class="add-discount">
            Добавить скидку
            <span class="circle">
              <span class="plus">+</span>
            </span>
          </button>
          <button class="menu-button" @click="toggleSidebar">
            <UIcon name="gg:menu" class="icon" />
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  width: 100%;
  border-bottom: 2px dashed #cbd5e1;
  padding: 0 18px;
}

.header-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
}

@media (max-width: 640px) {
  .header-content {
    padding: 0 0.2rem;
  }
}

@media (min-width: 1024px) {
  .header-content {
    padding: 0;
  }
}

.logo-text {
  font-weight: bold;
  font-size: 1.875rem; /* text-3xl */
}

.header-actions {
  display: flex;
  align-items: center;
}

.icon-lists {
  margin-right: 0.5rem;
  color: #ef4444; /* text-red-500 */
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ef4444; /* hover:text-red-500 */
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: 2.5rem;
}

.icon {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
}

.icon-search {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  color: #065f46; /* text-green-800 */
}

.add-discount {
  position: relative;
  padding: 0.5rem 1.25rem 0.5rem 0.75rem;
  background-color: #ef4444; /* bg-red-500 */
  color: white;
  font-weight: 600;
  border-radius: 0.75rem; /* rounded-xl */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.add-discount:hover {
  background-color: #dc2626; /* hover:bg-red-600 */
}

.circle {
  position: absolute;
  right: -0.5rem;
  border: 2px solid white;
  background-color: #6b7280; /* bg-gray-500 */
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s;
}

.plus {
  opacity: 0;
  transition: opacity 0.3s;
}

.add-discount:hover .plus {
  opacity: 1;
}

.menu-button {
  display: none;
  padding-top: 7px;
}

@media (max-width: 1024px) {
  .icon-lists {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .icon-telegram,
  .icon-user {
    display: none;
  }

  .menu-button {
    display: block;
  }
  .add-discount {
    display: none;
  }
}

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
