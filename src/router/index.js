import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AccountView from "../views/AccountView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import TyForOrder from "../views/TyForOrder.vue";
import AccountRegister from "../views/AccountRegister.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/order",
      name: "order",
      component: OrderView,
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
    },
    {
      path: "/thankyou",
      name: "thankyou",
      component: TyForOrder,
    },

    {
      path: "/register",
      name: "register",
      component: AccountRegister,
    }

  ],
});
export default router;
