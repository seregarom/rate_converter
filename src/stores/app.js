import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { api } from '@/api';

import VList from '@/components/VList.vue';
import VConverter from '@/components/VConverter.vue';

export const useApp = defineStore('app', () => {
  const tabs = [
    {
      name: 'Список валют',
      component: VList,
    },
    {
      name: 'Конвертер валют',
      component: VConverter,
    },
  ];

  const DEFAULT_TAB = 0;

  const tabTitles = computed(() => tabs.map((tab) => tab.name));
  const tabIndex = ref(DEFAULT_TAB);
  const tabViewComponent = computed(() => tabs[tabIndex.value].component);

  const rawRates = ref({});
  const loadRates = async () => {
    rawRates.value = await api.getRates();
  };

  return {
    tabTitles,
    tabIndex,
    tabViewComponent,
    loadRates,
    rawRates,
  };
});
