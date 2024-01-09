<template>
    <div class="h-screen">
      <div class="bg-pink h-full">
        <p
          class="pt-3 bg-transparent opacity-30 font-bold font-mono uppercase flex justify-center items-centers text-9xl"
        >
          Registration
        </p>
        <form
          @submit.prevent="handleSubmit"
          class="max-w-xs my-7 mx-auto p-10 rounded-xl"
        >
          <label
            class="inline-block tracking-wide text-white opacity-50 uppercase font-bold"
            >Email</label
          >
          <input
            class="block mb-2 py-3 outline-none px-2 w-full box-border text-slate-600 rounded-md"
            type="email"
            required
            v-model="email"
          />
          <label
            class="inline-block mb-2 tracking-wide text-white opacity-50 uppercase font-bold"
            >Password</label
          >
          <input
            class="block py-3 mb-2 outline-none px-2 w-full box-border text-slate-600 rounded-md"
            type="password"
            required
            v-model="password"
          />
          <div class="text-red-400 font-bold" v-if="passwordErr">
            {{ passwordErr }}
          </div>
          
          <label
            class="inline-block mb-2 tracking-wide text-white opacity-50 uppercase font-bold"
            >Repeat password</label
          >
          <input
            class="block py-3 mb-2 outline-none px-2 w-full box-border text-slate-600 rounded-md"
            type="password"
            required
            v-model="password"
          />
          <div class="text-red-400 font-bold" v-if="passwordErr">
            {{ passwordErr }}
          </div>

          <div
            class="inline-block tracking-wider mt-5 mr-2 px-2 py-2 rounded-2xl bg-slate-300 text-gray-500 font-bold cursor-pointer"
            v-for="skill in skills"
            :key="skill"
          >
            <span @click="removeSkill(skill)">{{ skill }}</span>
          </div>
          <div></div>
          <div class="text-center flex items-center justify-center">
            <button
              class="bg-signUpBtn border-none  py-3 px-5 mt-5  text-white rounded-md"
            >
              Registration
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        role: "designer",
        termns: "",
        tempSkill: "",
        skills: [],
        passwordErr: "",
      };
    },
    methods: {
      addSkill(e) {
        if (e.key === "," && this.tempSkill) {
          if (!this.skills.includes(this.tempSkill)) {
            this.skills.push(this.tempSkill);
            this.tempSkill = "";
          }
          this.tempSkill = "";
        }
      },
      removeSkill(skill) {
        this.skills = this.skills.filter((item) => {
          return skill !== item;
        });
      },
      handleSubmit() {
        this.passwordErr =
          this.password.length > 5
            ? ""
            : "Small password! Need more than 9 symbols!";
      },
    },
  };
  </script>
  