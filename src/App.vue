<template>
  <div>
    <h1>Xin chao</h1>
    <!-- <router-link :to="{ path: '/contact' }">Lien he</router-link> -->
    <router-link :to="{ name: 'contact' }">Lien he</router-link>
    <!-- <router-link :to="{ name: 'post' }">Bai viet</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
