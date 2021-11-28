<template>
  <InfoLine/>
  <Header/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import header from './components/header/header.vue';
import basicInfo from './components/basicInfo/basicInfo.vue';

export default {
  name: 'App',
  components: {
    Header: header,
    InfoLine: basicInfo,
  },
};
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
