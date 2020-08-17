<template>
  <div class="home">
    <div class="header">
      <Header/>
    </div>

    <div class="content_grid">
      <router-view/>
    </div>

    <!-- <div class="content">
      <Content/>
      
    </div> -->

    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header.vue'
import Content from '@/views/Content.vue'
import Footer from '@/views/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>

body {
  width: 100%;
  height: 100%;
}

.home {
  background: #76cbed;
  width: 80%;
  /* height: 100%; */
  display: grid;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  grid-template-rows: 250px auto 300px;
  grid-template-columns: 15% 1fr 15%;
  grid-gap: 10px;
  margin: 20px auto;
  padding: 0px;
  z-index: 5;
  position: relative;
}

.header {
  grid-area: header;
  padding: 10px 0;
  background-image: url(../assets/img/header.png);
  background-size: 100% 90%;
}

.content_grid {
  grid-area: content;
  padding: 0;
}

.footer {
  grid-area: footer;
}
</style>
