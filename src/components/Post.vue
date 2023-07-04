<template>
  <h1>Trang bai viet</h1>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    console.log(this.id);
  },
};
</script>
