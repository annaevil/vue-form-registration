<template>
  <SiteHeader />
  <LoginView/>
</template>

<script>
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SiteHeader from "@/components/SiteHeader.vue";
import LoginView from "@/components/LoginView.vue";

export default {
  components: {
    SiteHeader,
    LoginView
  },
  data() {
    return {
      showPassword: false,
      eyeIcon: faEye,
      eyeSlashIcon: faEyeSlash,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },

};
</script>


<script setup>
// import SiteHeader from "@/components/SiteHeader.vue";
// import LoginView from "@/components/LoginView.vue";
</script>

