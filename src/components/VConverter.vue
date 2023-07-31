<script setup>
  import { storeToRefs } from 'pinia';

  import VConverterBlock from './VConverterBlock.vue';
  import VButton from './VButton.vue';
  import { useConverter } from '@/stores/converter';

  const converter = useConverter();
  const { baseTicker, baseValue, convertedTicker, convertedValue, tickers } =
    storeToRefs(converter);
  const { changeSides } = converter;
</script>

<template>
  <section>
    <VConverterBlock
      v-model="baseValue"
      v-model:ticker="baseTicker"
      :tickers="tickers"
    />
    <VButton
      text="◀▶"
      class="button"
      @click="changeSides"
    />
    <VConverterBlock
      v-model="convertedValue"
      v-model:ticker="convertedTicker"
      :tickers="tickers"
      disabled
    />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  .button {
    margin: 0 30px;
  }
</style>
