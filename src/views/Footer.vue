<template>
<div>
  <div class="nav_footer">
    <a class="nav_footer_a">Вопросы и ответы</a>
    <a class="nav_footer_a">О Проекте</a>
    <a class="nav_footer_a">Преподаватели</a>
    <a class="nav_footer_a">Контакты</a>
  </div>
  <hr color="black">

  <div class="soc_networks">
    <a class="soc_networks_a"><img src="@/assets/icons/youtube.png" width="30px" height="30px" /></a>
    <a class="soc_networks_a"><img src="@/assets/icons/vk.svg" width="30px" height="30px" /></a>
    <a class="soc_networks_a"><img src="@/assets/icons/instagram.png" width="30px" height="30px" /></a>
    <a class="soc_networks_a"><img src="@/assets/icons/f.png" width="30px" height="30px" /></a>
    <a class="soc_networks_a"><img src="@/assets/icons/wp.png" width="30px" height="30px" /></a>

  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({})
}
</script>

<style>
.nav_footer {
  margin: 80px 50px 20px;

  /* text-align: center; */
}

a.nav_footer_a {
  width: 500px;
  height: 30px;
  margin-left: 130px;
  margin-right: 50px;
  font-size: 24px;  
}

hr {
  width: 75%;
  margin-left: 180px;
}

.soc_networks {
  margin-left: 180px;
  margin-top: 20px;
}

.soc_networks_a {
  margin-right: 30px;
  /* margin-top: 100px; */
}

</style>
