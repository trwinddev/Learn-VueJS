<template>
  <!-- <div>
    <span>{{ name }}</span>
    <br />
    <input type="text" v-model="name" />
    <button @click="name = 'linh'">Click</button>
    <br />
    <input type="checkbox" v-model="acceptTOS" />
    <br />
    <select name="city" id="city" v-model="city">
      <option value="hn">Ha Noi</option>
      <option value="hcm">Ho Chi Minh</option>
      <option value="dn">Da Nang</option>
    </select>
    <button @click="console.log(city)">Xem</button>
    <br />
    <button @click="showName = true">Show</button>
    <button @click="showName = false">Hide</button>
    <div v-show="showName">ngo trong phong</div>
    <br />
    <button @click="showAge = true">Show</button>
    <button @click="showAge = false">Hide</button>
    <div v-if="showAge">21</div>
    <div v-else>****</div>
    <br />
    <input type="text" v-model="addStudent" />
    <button @click="students.push(addStudent)">Add</button>
    <ul>
      <li v-for="(student, index) in students" :key="index">
        {{ student }} <button @click="students.splice(index, 1)">Xoa</button>
      </li>
    </ul>
    <br />
    <input type="text" v-bind:disabled="locked" />
    <input type="text" :disabled="locked" />
    <button @click="locked = !locked">Lock/Unlock</button>
    <br />
    <input :type="typePass" />
    <button @click="typePass = typePass === 'text' ? 'password' : 'text'">
      Show/Hide
    </button>
    <br />
    <span
      class="course"
      v-for="(language, index) in languages"
      :key="index"
      :class="{ daChon: language.selected }"
      @click="language.selected = !language.selected"
      >{{ language.name }}</span
    >
  </div> -->
  <!-- <Sidebar></Sidebar> -->
  <!-- <Person
    v-for="(person, index) in persons"
    :name="person"
    :key="index"
  ></Person> -->
  <div>
    <!-- <span v-if="loading">Loading...</span>
    <users v-else v-for="user in users" :key="user.id" :user="user"></users> -->
    <button @click="showing = !showing">Click</button>
    <input type="text" id="abc" ref="abc" />
    <button @click="abc()">Click here</button>
  </div>
</template>

<script>
// import Person from "./components/Person.vue";
// import Sidebar from "./components/Sidebar.vue";
// export default {
//   components: { Sidebar, Person },
//   data() {
//     return {
//       name: "phong",
//       acceptTOS: true,
//       city: "hn",
//       showName: true,
//       showAge: true,
//       addStudent: "",
//       students: ["phong", "tuan", "phuc"],
//       locked: true,
//       typePass: "text",
//       languages: [
//         { name: "HTML", selected: false },
//         { name: "CSS", selected: false },
//         { name: "JS", selected: false },
//         { name: "PHP", selected: false },
//       ],
//       persons: ["phong", "phuc", "tuan"],
//     };
//   },
//   beforeUpdate() {
//     console.log("before update");
//   },
// };

// import Users from "./components/Users.vue";
export default {
  // components: { Users },
  data() {
    return {
      users: [],
      loading: false,
      showing: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://64971fa183d4c69925a36e23.mockapi.io/users")
      .then((res) => res.json())
      .then((users) => {
        this.users = users;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    // Ham xu li
    abc() {
      // var i = document.getElementById("abc");
      var i = this.$refs.abc;
      console.log(i);
    },
  },
  watch: {
    showing: function () {
      console.log("Showing changed");
    },
  },
};
</script>

<style scoped>
/* .course {
  border: 1px solid #333333;
  margin-right: 10px;
  cursor: pointer;
}
span.daChon {
  background-color: red;
  color: white;
} */
</style>
