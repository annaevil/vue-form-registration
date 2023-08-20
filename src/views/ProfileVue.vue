<template>
  <div class="profile">
    <SiteHeader/>
    <div class="container vh-100 m-auto">
      <div class="w-100 m-auto d-flex flex-column align-items-center" v-if="isAuthenticated">
        <h1>Профиль</h1>
        <form>
          <div class="form-group">
            <label for="firstName">Имя</label>
            <input v-model="firstName" type="text" class="form-control mb-3" id="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName">Фамилия</label>
            <input v-model="lastName" type="text" class="form-control mb-3" id="lastName" required>
          </div>
          <div class="form-group">
            <label for="birthdate">Дата рождения</label>
            <input v-model="birthdate" type="date" class="form-control mb-3" id="birthdate" required>
          </div>
          <div class="form-group">
            <label for="city">Город</label>
            <select v-model="selectedCity" class="form-control mb-3" id="city" required>
              <option value="" disabled>Выберите город</option>
              <option v-for="city in cities" :key="city">{{ city }}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary mt-4">Сохранить</button>
        </form>
      </div>
      <div v-else>
        <p>Вы не авторизованы.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue"
import { mapGetters } from 'vuex'

export default {
  components: {SiteHeader},
  data() {
    return {
      firstName: '',
      lastName: '',
      birthdate: '',
      selectedCity: '',
      cities: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Оренбург'],
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 50px 100px;
  height: 100vh;
}
</style>
