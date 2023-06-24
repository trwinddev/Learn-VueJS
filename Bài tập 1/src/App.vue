<template>
  <div id="baitap" class="m-14">
    <div id="bai1">
      <h1>Bài 1: Chọn ngôn ngữ: HTML, CSS, JS, PHP</h1>
      <span
        class="course"
        v-for="(language, index) in languages"
        :key="index"
        :class="{ daChon: language.selected }"
        @click="language.selected = !language.selected"
        >{{ language.name }}</span
      >
    </div>
    <div id="bai2">
      <h1>Bài 2: Modal</h1>
      <span class="modal-btn" @click="showModal = !showModal">Modal</span>
      <div class="modal" v-show="showModal">
        <p>
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          debitis aperiam dolores, ut est quaerat animi laborum iste minima !"
        </p>
      </div>
    </div>
    <div id="bai3">
      <h1>Bài 3: Chọn tất cả, bỏ chọn tất cả</h1>
      <input
        id="checkedName"
        type="checkbox"
        class="mr-2 mb-2"
        v-model="selectAll"
        @change="selectAllLanguages"
      />
      <label for="checkedName" class="font-bold select-none cursor-pointer"
        >Chọn tất cả</label
      >
      <br />
      <table>
        <tr v-for="(language, index) in languages" :key="index">
          <td>
            <input class="mr-2" type="checkbox" v-model="language.checked" />
          </td>
          <td>
            {{ language.name }}
          </td>
        </tr>
      </table>
    </div>
    <div id="bai4">
      <h1>Bài 4: Chọn 2 bên</h1>
      <div class="bai4 flex gap-10">
        <div class="box-left w-40 h-40 border relative">
          <table
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <tr v-for="(language, index) in languagesLeft" :key="index">
              <td>
                <input
                  class="mr-2"
                  type="checkbox"
                  :value="language"
                  v-model="selectedLeft"
                />
              </td>
              <td>{{ language.name }}</td>
            </tr>
          </table>
        </div>
        <div
          class="action text-3xl cursor-pointer flex flex-row items-center justify-center"
          @click="swapLanguages"
        >
          🔁
        </div>
        <div class="box-right w-40 h-40 border relative">
          <table
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <tr v-for="(language, index) in languagesRight" :key="index">
              <td>
                <input
                  class="mr-2"
                  type="checkbox"
                  :value="language"
                  v-model="selectedRight"
                />
              </td>
              <td>{{ language.name }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div id="bai5">
      <h1>Bài 5: Checkbox custom</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectAll: false,
      languages: [
        { name: "HTML", selected: true, checked: false },
        { name: "CSS", selected: false, checked: false },
        { name: "JS", selected: false, checked: false },
        { name: "PHP", selected: false, checked: false },
      ],
      showModal: false,
      languagesLeft: [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "Java" },
        { name: "C++" },
      ],
      languagesRight: [],
      selectedLeft: [],
      selectedRight: [],
      isChecked: this.value,
    };
  },

  methods: {
    selectAllLanguages() {
      for (let i = 0; i < this.languages.length; i++) {
        this.languages[i].checked = this.selectAll;
      }
    },
    swapLanguages() {
      // Move selected languages from left to right
      this.selectedLeft.forEach((language) => {
        this.languagesRight.push(language);
        const index = this.languagesLeft.indexOf(language);
        this.languagesLeft.splice(index, 1);
      });

      // Move selected languages from right to left
      this.selectedRight.forEach((language) => {
        this.languagesLeft.push(language);
        const index = this.languagesRight.indexOf(language);
        this.languagesRight.splice(index, 1);
      });

      // Clear selection
      this.selectedLeft = [];
      this.selectedRight = [];
    },
  },
};
</script>

<style scoped>
#baitap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
span.daChon {
  background-color: #0275d8;
  color: white;
}
h1 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

#bai1 span {
  border: 1px solid gray;
  padding: 5px 10px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  border-radius: 4px;
}

span.modal-btn {
  border: 1px solid transparent;
  background-color: #0275d8;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
}

#bai2 {
  position: relative;
}

.modal {
  position: absolute;
  left: 15%;
  top: 20%;
  width: 400px;
  font-style: italic;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
}

.custom-checkbox {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 18px;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ccc;
  border-radius: 3px;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
