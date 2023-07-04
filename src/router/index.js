import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Post from "../components/Post.vue";
import ContactDev from "../components/ContactDev.vue";
import ContactSale from "../components/ContactSale.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      component: About,
      name: "about",
    },
    {
      path: "/contact",
      component: Contact,
      name: "contact",
      children: [
        {
          path: "/contact/dev",
          component: ContactDev,
          name: "contactdev",
        },
        {
          path: "/contact/sale",
          component: ContactSale,
          name: "contactsale",
        },
      ],
    },
    {
      path: "/bai-viet/:id",
      component: Post,
      name: "post",
      props: true,
    },
  ],
});

export default router;
