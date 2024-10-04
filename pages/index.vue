<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item">
        <div class="card">
          <div class="card-header">До 29 февраля</div>
          <div class="card-body">
            <h3>GOSTY</h3>
            <p>Каждый вторник — 20% на все меню</p>
            <div class="card-footer">
              <span>Скидки</span>
              <span>Рестораны</span>
              <span>Кэшбэк 3%</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Add more carousel items here -->
    </div>
    <button class="carousel-control prev" @click="prevButton">‹</button>
    <button class="carousel-control next" @click="nextButton">›</button>
  </div>
</template>

<script setup>
let currentIndex = 0;

function nextButton() {
  currentIndex = (currentIndex + 1) % 3; // Bu erda 3 — slaydlar soni
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevButton() {
  currentIndex = (currentIndex - 1 + 3) % 3; // Bu erda 3 — slaydlar soni
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 100%;
  margin: 20px auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 300%;
}

.carousel-item {
  flex: 0 0 33.33%;
  box-sizing: border-box;
  padding: 10px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-header {
  background-color: #f44336;
  color: #fff;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
}

.card-body h3 {
  font-size: 24px;
  margin: 10px 0;
}

.card-body p {
  font-size: 16px;
  margin: 5px 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
  margin-top: 15px;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-control:focus {
  outline: none;
}
</style>
