<script setup>
  import { storeToRefs } from 'pinia';
  import { useList } from '@/stores/list';
  import VListCards from './VListCards.vue';
  import VButton from './VButton.vue';
  import VInput from './VInput.vue';

  const list = useList();
  const { filteredRates, filterPattern } = storeToRefs(list);
  const { switchDirection } = list;
</script>

<template>
  <section>
    <div class="panel">
      <div class="filter">Фильтр: <VInput v-model="filterPattern" /></div>
      <VButton
        text="◀▶"
        @click="switchDirection"
      />
    </div>
    <VListCards :rates="filteredRates" />
  </section>
</template>

<style scoped>
  .filter {
    padding: 2rem;
    display: inline-block;
  }

  .panel {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--section-border);
  }
</style>
