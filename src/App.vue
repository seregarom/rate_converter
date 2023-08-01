<script setup>
  import { storeToRefs } from 'pinia';
  import VTabs from './components/VTabs.vue';
  import { useApp } from './stores/app';

  const app = useApp();

  const { tabTitles, tabIndex, tabViewComponent } = storeToRefs(app);

  app.loadRates();
</script>

<template>
  <header>
    <VTabs
      v-model="tabIndex"
      :titles="tabTitles"
    />
  </header>
  <main>
    <keep-alive>
      <Component :is="tabViewComponent" />
    </keep-alive>
  </main>
</template>

<style src="./assets/global.css"></style>
<style scoped>
  main {
    flex: 1;
    margin-bottom: 10px;
  }

  header {
    margin-top: 50px;
  }
</style>
