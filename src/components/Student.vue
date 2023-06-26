<template>
  <div
    class="border m-4"
    @click="student.selected = !student.selected"
    :class="{ selected: student.selected }"
  >
    {{ student.name }}
  </div>
</template>

<script>
export default {
  props: ["student"],
};
</script>

<style scoped>
.selected {
  background-color: #20e3b2;
}
</style>
