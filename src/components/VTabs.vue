<script setup>
  defineProps({
    titles: {
      type: Array,
      required: true,
      validator(titles) {
        return titles.every((title) => typeof title === 'string');
      },
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  });

  const emit = defineEmits({
    'update:modelValue'(index) {
      return isFinite(index);
    },
  });
</script>

<template>
  <nav>
    <div
      v-for="(title, index) in titles"
      :key="index"
      class="tab"
      :class="{
        active: modelValue === index,
      }"
      @click="emit('update:modelValue', index)"
    >
      {{ title }}
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    box-shadow: inset 0 -1px 0 var(--section-border);
    font-weight: bold;
    color: var(--inactive);
  }

  .tab {
    margin-right: 0.5rem;
    padding: 1rem;
    cursor: pointer;
  }
  .tab:hover:not(.active) {
    border-bottom: 2px solid var(--section-border);
  }

  .active {
    color: var(--active);
    border-bottom: 2px solid var(--active);
  }
</style>
