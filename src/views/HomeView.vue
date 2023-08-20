<template>
  <div class="home">
    <SiteHeader />
    <div class="contain vh-100">
      <div class="main vh-100">
        <div class="head-block">
          <div class="img">
            <img src="/3405161.jpg" alt="Image" class="w-100 h-100 object-fit-cover">
          </div>
          <div class="title">
            <h2>Заголовок</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi asperiores at atque cum earum error fuga hic ipsum laboriosam magnam maiores, neque, obcaecati, porro quod tempore ut velit?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100vh;
}
.title {
  background-color: #18202d;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
}

.title h2 {
  color: #BA825D;
  padding-bottom: 30px;
  font-size: 45px;
}
.head-block {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  text-wrap: balance;
  text-align: center;
}
.img, .title {
  flex: 1 1 500px;

}

</style>

<script>


import SiteHeader from "@/components/SiteHeader.vue";
export default {
  name: 'HomeView',
  components: {
    SiteHeader,
  }
};

</script>



