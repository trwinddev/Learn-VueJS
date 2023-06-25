<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "No name",
    },
  },
  data() {
    return {};
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("Component mounted");
  },
};
</script>
