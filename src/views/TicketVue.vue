<template>
  <div class="tickets">
    <SiteHeader />
    <div class="container vh-100">
      <h1>Обращения пользователя</h1>
      <table class="table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Заголовок</th>
          <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(ticket, index) in tickets" :key="index">
          <td>{{ ticket.id }}</td>
          <td>{{ ticket.title }}</td>
          <td>{{ ticket.description }}</td>
        </tr>
        </tbody>
      </table>
      <h2>Создать новый тикет</h2>
      <form @submit.prevent="createTicket">
        <div class="form-group">
          <label for="title">Заголовок</label>
          <input v-model="newTicket.title" type="text" class="form-control" id="title" required>
        </div>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea v-model="newTicket.description" class="form-control" id="description" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";

export default {
  components: {SiteHeader},
  data() {
    return {
      tickets: [
        { id: 1, title: 'Проблема с доступом', description: 'Не могу войти в аккаунт.' },
        { id: 2, title: 'Ошибка на странице', description: 'Страница выдает ошибку 404.' },
        // ... другие тикеты ...
      ],
      newTicket: {
        title: '',
        description: '',
        id: 0,
      },
    };
  },
  methods: {
    createTicket() {
      this.newTicket.id = this.tickets.length + 1;
      this.tickets.push({ ...this.newTicket });
      this.newTicket.title = '';
      this.newTicket.description = '';
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 50px 100px;
  margin: 0;
  height: 100vh;
}
</style>