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
    import Header from './tags/Header'
    import Footer from "./tags/Footer";
    import Body from "./tags/Body";

    export default {
        components: {Body, Header, Footer},
    }
</script>

<style>
</style>
