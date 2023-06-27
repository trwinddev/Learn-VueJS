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

<template>
  <div>
    <Modal @closed="modalClosed" v-show="showModal">
      <!-- <template #header>
        <h1>Day la header</h1>
      </template>
      <template #content>
        <h1>Day la noi dung</h1>
        <h2>Noi dung khac</h2>
      </template> -->
    </Modal>
    <hr />
    <button @click="showModal = !showModal">Show/Hide</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  components: { Modal },
  provide: {
    school: "Phenikaa",
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    modalClosed(data) {
      console.log(data);
      console.log("Modal da dong");
    },
  },
};
</script>
