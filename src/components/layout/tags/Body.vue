<template>
    <a-layout-content :style="{ padding: '0 50px' }">
      <a-layout :style="{ padding: '24px 0', background: '#fff' }">
        <!-- sidebar -->
        <Sidebar />
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <!-- breadcrumb -->
          <BreadCrumb />
          <!-- router-view -->
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
</template>

<script>
    import Sidebar from './Sidebar'
    import BreadCrumb from "./BreadCrumb";

    export default {
        name: "Body",
        components: { Sidebar, BreadCrumb },
    }
</script>

<style scoped>

</style>
