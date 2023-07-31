<script setup>
  import VListCard from './VListCard.vue';

  defineProps({
    rates: {
      type: Object,
      default() {
        return [];
      },
    },
  });
</script>

<template>
  <div class="rate-list">
    <VListCard
      v-for="rate in rates"
      :key="rate.nominalTicker + rate.valueTicker"
      :nominal-ticker="rate.nominalTicker"
      :nominal="rate.nominal"
      :value-ticker="rate.valueTicker"
      :value="rate.value"
      :delta="rate.delta"
      :title="rate.title"
    />
  </div>
</template>

<style scoped>
  .rate-list {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }
</style>
