import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { useApp } from './app';
import { fixNumber } from '@/utils';

export const useConverter = defineStore('converter', () => {
  const app = useApp();

  const baseTicker = ref('USD');
  const baseValue = ref(1);
  const convertedTicker = ref('EUR');

  const convertedValue = computed(() =>
    convertValue(
      baseValue.value,
      getRateByTicker(baseTicker.value),
      getRateByTicker(convertedTicker.value),
    ),
  );

  const changeSides = () => {
    baseValue.value = convertedValue.value;
    [baseTicker.value, convertedTicker.value] = [
      convertedTicker.value,
      baseTicker.value,
    ];
  };

  const tickers = computed(() =>
    Object.fromEntries(
      Object.values(app.rawRates).map(({ Name, CharCode }) => [
        CharCode,
        {
          title: Name,
          code: CharCode,
        },
      ]),
    ),
  );

  function getRateByTicker(ticker) {
    return app.rawRates[ticker].Value;
  }

  function convertValue(sourceValue, sourceRate, targetRate) {
    return fixNumber((sourceValue * sourceRate) / targetRate);
  }

  return {
    baseTicker,
    baseValue,
    convertedTicker,
    convertedValue,
    changeSides,
    tickers,
  };
});
