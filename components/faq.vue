<template>
  <Section title="FAQ">
    <div class="faq">
      <div v-for="(item, index) in faq" :key="index" class="faq-item">
        <div class="faq-question" @click="toggle(index)">
          <span>{{ item.question }}</span>
          <span class="icon">{{ activeIndex === index ? "x" : "+" }}</span>
        </div>

        <div v-if="activeIndex === index" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { faq } from "~/data";
const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
