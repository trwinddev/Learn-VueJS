<template>
  <div>
    Modal
    <button @click="closeModal">Close</button>
    <button @click="getData">Get data</button>
  </div>
</template>

<script>
export default {
  inject: ["age", "school"],
  provide: {
    ["modalModule"]: {
      name: "Tuan",
    },
  },
  data() {
    return {};
  },
  methods: {
    getData() {
      console.log(this.age);
      console.log(this.school);
    },
    closeModal() {
      console.log("clicked");
      this.$emit("closed", { name: "phong" });
    },
  },
};
</script>
