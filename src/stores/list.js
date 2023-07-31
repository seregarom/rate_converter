import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { useApp } from './app';
import { filterObjectsByFieldPattern, fixNumber } from '@/utils';
import { BASE_TICKER, BASE_NOMINAL } from '@/constants';

export const useList = defineStore('list', () => {
  const app = useApp();

  const directRates = computed(() =>
    Object.values(app.rawRates).map((rate) => ({
      nominalTicker: rate.CharCode,
      nominal: rate.Nominal,
      valueTicker: BASE_TICKER,
      value: rate.Value,
      delta: fixNumber(rate.Value - rate.Previous),
      title: rate.Name,
    })),
  );

  const reverseRates = computed(() =>
    Object.values(directRates.value).map((rate) => ({
      nominalTicker: rate.valueTicker,
      nominal: BASE_NOMINAL,
      valueTicker: rate.nominalTicker,
      value: fixNumber(rate.nominal / rate.value),
      delta: fixNumber(
        rate.nominal / rate.value - rate.nominal / (rate.value - rate.delta),
      ),
      title: rate.title,
    })),
  );

  const isReverseDirection = ref(false);
  const switchDirection = () => {
    isReverseDirection.value = !isReverseDirection.value;
  };

  const rates = computed(() =>
    isReverseDirection.value ? reverseRates.value : directRates.value,
  );

  const filterPattern = ref('');
  const filteredRates = computed(() =>
    filterObjectsByFieldPattern(rates.value, filterPattern.value),
  );

  return {
    filterPattern,
    switchDirection,
    filteredRates,
  };
});
