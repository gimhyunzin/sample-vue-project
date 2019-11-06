<template>
  <a-layout-header>

    <div class="logo" />

    <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" :style="{ lineHeight: '64px' }">
      <a-menu-item key="1">
        <router-link to="/home">HOME</router-link>
      </a-menu-item>
      <a-menu-item key="2">서비스정책</a-menu-item>
      <a-menu-item key="3">이벤트</a-menu-item>
      <a-menu-item key="4">TMS</a-menu-item>
      <a-menu-item key="5">Q&A</a-menu-item>
      <a-menu-item key="6">
        <router-link to="/admin">관리</router-link>
      </a-menu-item>

      <!-- 권한 -->

      <!-- 프로필 -->
      <a-menu-item key="8" class="profile">
        <a-icon type="user" />
      </a-menu-item>

      <!-- 캘린더 -->
      <a-menu-item key="7" class="calendar">
        <router-link to="/calendar">
          <a-icon type="calendar" />
        </router-link>
      </a-menu-item>

    </a-menu>


  </a-layout-header>
</template>

<script>
</script>

<style>
  .logo {
    width: 120px;
    height: 36px;
    background-image: url("../../../assets/logo.png");
    margin: 10px 28px 16px 0;
    float: left;
  }

  .calendar,.profile {
    float: right;
  }
</style>
