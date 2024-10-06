<script setup>
const navbar = [
  { key: "all", label: "Все предложения", link: "/" },
  { key: "Discounts", label: "Скидки", link: "/" },
  { key: "Stock", label: "Акции", link: "/" },
  { key: "Promo", label: "Промокоды", link: "/" },
  { key: "Cashback", label: "Кешбэк", link: "/" },
];
</script>

<template>
  <aside class="sidebar-overlay">
    <div class="sidebar-content">
      <nav class="nav-container">
        <ul v-for="item in navbar">
          <li :key="item.key">
            <NuxtLink :to="item.link" class="nav-link">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="button-group">
        <button>
          <UIcon name="icon-park:telegram" class="icon" />
        </button>
        <button>
          <UIcon name="lucide:user-round-plus" class="icon" />
        </button>
        <button class="discount-button">Добавить скидку</button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-overlay {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.525);
  position: absolute;
  z-index: 10;
}

.sidebar-content {
  width: 85%;
  position: absolute;
  right: 0;
  height: 100%;
  background-color: white;
  padding: 1rem;
}

.nav-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  font-size: 1.25rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ff2e4c;
}

.button-group {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1.75rem;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.discount-button {
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: #ff2e4c;
  color: white;
  font-size: 0.875rem;
}

@media (max-width: 640px) {
  .discount-button {
    font-size: 0.75rem;
  }
}
</style>
