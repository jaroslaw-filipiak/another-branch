import { createRouter, createWebHistory } from "vue-router";
import { store } from "@/store";

import HomeView from "./../views/HomeView.vue";
import AboutView from "./../views/AboutView.vue";
import ContactView from "./../views/ContactView.vue";
import PrivacyPolicyView from "./../views/PrivacyPolicyView.vue";
import AdvertisingPrivacyPolicyView from "./../views/AdvertisingPrivacyPolicyView.vue";
import GDPRView from "./../views/GDPRView.vue";

const routes = [
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
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/privacy-policy",
    name: "privacyPolicy",
    component: PrivacyPolicyView,
  },
  {
    path: "/advertising-privacy-policy",
    name: "advertisingPrivacyPolicy",
    component: AdvertisingPrivacyPolicyView,
  },
  {
    path: "/gdpr",
    name: "gdpr",
    component: GDPRView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(() => {
  store.isMobileMenuVisible = false;
});

export default router;
