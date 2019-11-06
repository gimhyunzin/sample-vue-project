<template>
  <div>
    <a-layout>
      <!-- header -->
      <Header></Header>

      <!-- body -->
      <Body></Body>

      <!-- footer -->
      <Footer></Footer>
    </a-layout>
  </div>
</template>

<script>
    import Header from './templates/Header'
    import Footer from "./templates/Footer";
    import Body from "./templates/Body";

    export default {
        components: {Body, Header, Footer},
    }
</script>

<style>
</style>
