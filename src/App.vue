<template>
  <Header/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import header from './components/header/header.vue';

export default {
  name: 'App',
  components: {
    Header: header,
  },
};
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
