<script setup>
  import { shortenString } from '@/utils';

  defineProps({
    nominal: {
      type: Number,
      required: true,
    },
    nominalTicker: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '-',
    },
    value: {
      type: Number,
      required: true,
    },
    valueTicker: {
      type: String,
      required: true,
    },
    delta: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <div class="card">
    <p class="title">{{ nominalTicker }} - {{ valueTicker }}</p>
    <p class="name">
      {{ shortenString(title) }}
    </p>
    <p class="value">
      {{ nominal }} {{ nominalTicker }} - <span>{{ value }}</span>
      {{ valueTicker }}
    </p>
    <p
      class="delta"
      :class="{ decrease: delta < 0 }"
    >
      {{ delta }}
    </p>
  </div>
</template>

<style scoped>
  .card {
    display: inline-block;
    padding: 1rem;
    background: #e6f5ff;
    border-radius: 1rem;
    text-align: center;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--inactive);
  }

  .name {
    margin-bottom: 3px;
    font-size: 14px;
    color: var(--inactive);
    font-style: italic;
  }

  .delta {
    font-size: 16px;
    color: var(--increase-color);
  }

  .delta::after {
    display: inline-block;
    content: ' ▲';
  }

  .decrease {
    color: var(--decrease-color);
  }
  .decrease::after {
    display: inline-block;
    content: ' ▼';
  }

  .value {
    font-size: 16px;
  }

  .value span {
    font-size: 16px;
    font-weight: bold;
  }
</style>
