<template>
  <Section title="FAQ">
    <div v-for="item in faq">
      <details :key="item.id" class="faq-item">
        <summary class="faq-summary">
          <div class="summary-content">
            {{ item.question }}
            <UIcon name="material-symbols-light:add-rounded" class="icon" />
          </div>
        </summary>
        <blockquote class="faq-answer">
          {{ item.answer }}
        </blockquote>
      </details>
    </div>
  </Section>
</template>

<script setup>
import { faq } from "~/data";
</script>

<style scoped>
details summary {
  list-style: none; /* Uchburchakni olib tashlash */
}

details summary::-webkit-details-marker {
  display: none; /* Brauzerlardagi uchburchakni yashirish */
}

details[open] .rotate-icon {
  transform: rotate(45deg);
}

.faq-item {
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.faq-summary {
  cursor: pointer;
}

.summary-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.summary-content:hover {
  color: #023131;
  font-weight: 700;
  transition: transform 0.3s ease;
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-left: 1.5rem;
  color: #d1d5db;
  transition: transform 0.3s ease;
}

details[open] .summary-content {
  font-weight: 700;
}

details[open] .icon {
  transform: rotate(45deg);
}

.faq-answer {
  color: #4b5563;
  padding-left: 3rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
</style>
