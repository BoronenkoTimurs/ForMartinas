<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <main class="h-screen">
    <div class="bg-purple h-full">
      <p
        class="break-normal bg-transparent opacity-30 font-bold font-mono uppercase text-center text-9xl"
      >
        Make an order
      </p>
      <form
        @submit.prevent="handleSubmit"
        class="my-7 max-w-xl mx-auto p-10 rounded-xl"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="label">Name</label>
            <input
              placeholder="Name"
              class="input"
              type="text"
              required
              v-model="name"
            />
          </div>
         
          <div>
            <label class="label">Phone Number</label>
            <input
              placeholder="Phone Number"
              class="input"
              type="text"
              required
              v-model="number"
            />
          </div>
        </div>
        <DeliveryCalculator />
      </form>
      <div class="text-center flex place-content-end">
        
        <RouterLink
            to="/tyfororder"
            class="bg-pink shadow-2xl border-none py-3 px-8 mt-5 mr-20 text-white rounded-md"
            >Make order</RouterLink
          >
      </div>
    </div>
  </main>
</template>

<script>
import DeliveryCalculator from "@/components/DeliveryCalculator.vue";

export default {
  components: {
    DeliveryCalculator,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordErr: "",
    };
  },
  methods: {
    handleSubmit() {
      this.passwordErr =
        this.password.length > 5
          ? ""
          : "Small password! Need more than 9 symbols!";
    },
  },
};
</script>
