<template>
  <div>
    <Student
      v-for="(student, index) in students"
      :key="index"
      :student="student"
    ></Student>
  </div>
</template>

<script>
import Student from "./Student.vue";
export default { props: ["students"], components: { Student } };
</script>
