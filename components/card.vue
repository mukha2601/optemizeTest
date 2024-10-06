<template>
  <article class="card">
    <div class="image-container">
      <img :src="card?.img" alt="" class="card-image" />
    </div>
    <span v-if="card.term" class="term-badge">{{ card?.term }}</span>
    <div class="content">
      <p class="card-name">{{ card.name }}</p>
      <h1 class="card-title">{{ card.text }}</h1>
      <div class="discounts">
        <p class="discount-label">Скидки</p>
        <div class="cashback-stock">
          <span class="cashback">Кешбэк</span>
          <span class="stock">{{ card.stock }}</span>
        </div>
      </div>
      <p class="card-type">{{ card.type }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
p:hover {
  color: red;
}

.card {
  user-select: none;
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid rgb(210, 209, 209);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  border-color: #16a34a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  height: 7rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .image-container {
    height: 9rem;
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.term-badge {
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: #fecaca;
  font-size: 0.75rem;
  font-weight: bold;
  color: #ef4444;
}

.content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card-title {
  font-weight: bold;
  font-size: 12px;
  transition: color 0.3s ease;
}

@media (min-width: 640px) {
  .content {
    gap: 0.75rem;
  }
  .discounts {
    display: flex;
  }
  .card-title {
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;
  }
}

.card-name {
  font-size: 12px;
}

.card-title:hover {
  color: #248888;
}

.discounts {
  justify-content: space-between;
  align-items: center;
  color: white;
}

.discount-label {
  font-size: 0.875rem;
  color: black;
}

.cashback-stock {
  display: flex;
}

.cashback {
  padding: 0.2rem 0.25rem;
  border-radius: 0.375rem;
  border: 1px solid gray;
  font-size: 0.875rem;
  color: black;
}

.stock {
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: #607282;
  font-size: 0.875rem;
}

.card-type {
  font-size: 0.75rem;
}
</style>
