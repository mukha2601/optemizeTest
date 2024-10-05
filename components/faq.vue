<template>
  <Section title="FAQ">
    <div v-for="item in faq">
      <details :key="item.id" class="border-b-2 mb-6">
        <summary class="cursor-pointer">
          <div class="flex justify-between">
            {{ item.question }}
            <UIcon
              name="material-symbols-light:add-rounded"
              class="w-12 h-12 ms-6 text-gray-300 transition-transform duration-300 rotate-icon"
            />
          </div>
        </summary>
        <blockquote class="text-gray-600 ps-12 mt-4 mb-6">
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
</style>
