<template>
  <div class="login">
    <div class="container d-flex justify-content-center align-items-center">
      <form>
        <input class="form-control mb-2" id="validationCustom01" type="text" placeholder="Логин" required>
        <div class="password-input-wrapper">
          <input
              class="form-control mb-2"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Пароль"
              required
          >
          <span class="password-toggle-icon" @click="showPassword = !showPassword">
            <font-awesome-icon :icon="showPassword ? eyeIcon : eyeSlashIcon" />
          </span>
        </div>
        <p v-if="isAuthenticated">Вы авторизованы</p>
        <p v-else>Вы не авторизованы</p>
        <button  @click="login" class="btn btn-primary m-md-2">Войти</button>
        <button @click="logout" class="btn btn-primary">Выйти</button>
      </form>
    </div>
  </div>
</template>

<style>
.password-input-wrapper {
  position: relative;
}

.password-toggle-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { mapGetters, mapActions } from 'vuex'; // Импорт mapActions
//import { useStore } from 'vuex';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      showPassword: false,
      eyeIcon: faEye,
      eyeSlashIcon: faEyeSlash,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['fakeLogin']), // Импорт fakeLogin из хранилища
    async login() {
      await this.fakeLogin();

      this.$store.commit('setAuthenticated', true); // Используйте this.$store.commit
      this.$router.push('/profile'); // Перенаправление на страницу профиля
    },
  },

}
</script>



