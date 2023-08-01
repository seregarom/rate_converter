<script setup>
  import { shortenString } from '@/utils';
  import VInput from './VInput.vue';

  defineProps({
    modelValue: {
      type: Number,
      required: true,
    },
    ticker: {
      type: String,
      required: true,
    },
    tickers: {
      type: Object,
      required: true,
      validator(tickers) {
        return Object.values(tickers).every(
          ({ title, code }) =>
            typeof title === 'string' && typeof code === 'string',
        );
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits({
    'update:modelValue'(value) {
      return typeof value === 'number';
    },
    'update:ticker'(value) {
      return typeof value === 'string';
    },
  });
</script>

<template>
  <div class="block">
    <div class="title">
      {{ shortenString(tickers[ticker].title) }}
    </div>
    <VInput
      type="number"
      :disabled="disabled"
      :value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />
    <select
      :value="ticker"
      @change="emit('update:ticker', $event.target.value)"
    >
      <option
        v-for="{ code } of tickers"
        :key="code"
        :value="code"
      >
        {{ code }}
      </option>
    </select>
  </div>
</template>
border-radius: 1rem;
<style scoped>
  .block {
    display: inline-block;
    padding: 2rem;
    padding-top: 1rem;
    background: #e6f5ff;
    border-radius: 1rem;
  }

  .title {
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    /* font-style: italic; */
  }
</style>
