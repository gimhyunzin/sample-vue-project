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
    import Header from './fragment/Header'
    import Footer from "./fragment/Footer";
    import Body from "./fragment/Body";

    export default {
        components: {Body, Header, Footer},
    }
</script>

<style>
</style>
