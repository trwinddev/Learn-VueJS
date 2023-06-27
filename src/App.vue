<!-- <template>

import Modal from './components/Modal.vue';

import Modal from './components/Modal.vue';
  <div class="flex">
    <div class="border p-5">
      <StudentList :students="students"></StudentList>
    </div>
    <div class="border p-5">
      <button class="bg-blue-400 mb-5 w-20 text-white rounded-md">
        Sang trai
      </button>
      <br />
      <button class="bg-blue-400 w-20 text-white rounded-md">Sang phai</button>
    </div>
    <div class="border p-5">
      <StudentList :students="userSelectedStudents"></StudentList>
    </div>
  </div>
</template>

<script>
import StudentList from "./components/StudentList.vue";
export default {
  components: { StudentList },
  data() {
    return {
      students: [
        { name: "phong", selected: false },
        { name: "tuan", selected: false },
        { name: "phuc", selected: false },
      ],
      userSelectedStudents: [],
    };
  },
};
</script>

<style scoped></style> -->

<!-- <template>
  <div> -->
<!-- <Modal @closed="modalClosed" v-show="showModal"> -->
<!-- <template #header>
        <h1>Day la header</h1>
      </template>
      <template #content>
        <h1>Day la noi dung</h1>
        <h2>Noi dung khac</h2>
      </template> -->
<!-- </Modal> -->
<!-- <hr /> -->
<!-- <button @click="showModal = !showModal">Show/Hide</button>
    <div>
      <span>{{ phoneModel }}</span>
    </div> -->
<!-- <div v-for="(product, i) in products" :key="i">
      {{ product.name }} - {{ product.price }}
      <button @click="boughtProducts.push(product)">Mua</button>
    </div>
    <hr />
    <div v-for="(product, i) in boughtProducts" :key="i">
      {{ product.name }}
    </div>
    <div>Total: {{ total }}</div>
  </div>
</template> -->

<!-- <script> -->
// import Modal from "./components/Modal.vue"; // export default { //
components: { Modal }, // provide: { // school: "Phenikaa", // }, // data() { //
return { // boughtProducts: [], // showModal: false, // student: { // name:
"phong", // phone: { // color: "black", // made: { // model: "apple", // }, //
}, // }, // products: [ // { name: "iphone 4", price: 1 }, // { name: "iphone
5", price: 2 }, // { name: "iphone 6", price: 2 }, // ], // }; // }, // watch: {
// boughtProducts: { // handler: function () { // this.total =
this.boughtProducts.reduce((t, p) => t + p.price, 0); // }, // deep: true, // },
// }, // computed: { // phoneModel() { // return this.student.phone.made.model;
// }, // total() { // return this.boughtProducts.reduce((t, p) => t + p.price,
0); // }, // }, // methods: { // modalClosed(data) { // console.log(data); //
console.log("Modal da dong"); // }, // }, // };
<!-- // </script> -->

<template>
  <div>
    <div>{{ name }}</div>
    <button @click="setName">Set name to Linh</button>
    <br />
    <div>{{ person.age }}</div>
    <button @click="tangTuoi">Tang tuoi</button>
    <br />
    <div>{{ totalStudents }}</div>
    <!-- <button @click="hello">Click</button> -->
    <button @click="addStudent">Click</button>
  </div>
</template>

<script setup>
import { computed, onMounted, onUpdated, reactive, ref, watch } from "vue";

// export default {
//   setup() {
const name = ref("Phong");
// const hello = () => {
//   console.log("hello");
// };
const setName = () => {
  name.value = "Linh";
};
const person = reactive({
  age: 21,
});
const tangTuoi = () => {
  person.age++;
};
//     return {
//       name,
//       hello,
//       setName,
//     };
//   },
// };

const students = reactive([]);
const addStudent = () => {
  students.push("nguyen");
};
const totalStudents = computed(() => {
  return students.length;
});

onMounted(() => {
  console.log("component mounted");
});
onUpdated(() => {
  console.log("component updated");
});

watch(students, async (newStudent, oldStudent) => {
  console.log("student changed");
});
</script>
