<script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },
  });
  const emit = defineEmits({
    click: null,
  });
</script>

<template>
  <div
    class="button"
    @click="emit('click')"
  >
    {{ text }}
  </div>
</template>

<style scoped>
  .button {
    display: inline-block;
    padding: 0.7rem;
    color: white;
    background: var(--active);
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .button:hover {
    background: var(--active-hover);
  }
</style>
