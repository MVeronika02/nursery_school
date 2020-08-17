<template>
  <div class="header_page">
    <div class="header_details">
      <img src="../assets/img/logo_lang.jpg" class="header_logo" />

      <select class="header_select_object">
        <option>Выберите предмет</option>
        <option value="kazakh">Казахский язык</option>
        <option value="russian">Русский язык</option>
        <option value="english">Английский язык</option>
        <option value="count">Количество и счет</option>
        <option value="figures">Геометрические фигуры</option>
        <option value="logic">Логические задачи</option>
        <option value="time">Ориентировка по времени</option>
        <option value="speech">Развитие речи</option>
        <option value="writing">Обучение прописи</option>
        <option value="reading">Чтение</option>
      </select>

      <select class="header_select_age">
        <option>Возраст</option>
        <option>От 1,5 года до 3 лет</option>
        <option>От 3 до 5 лет</option>
        <option>От 5 до 7 лет</option>
      </select>

      <select class="header_select_period">
        <option>Период</option>
        <option>Неполный день (4 часа)</option>
        <option>Полный день</option>
      </select>

      <div class="header_nav">
        <router-link to="/" class="header_nav_a">Главная</router-link>
        <!-- <router-link  class="header_nav_a">Контакты</router-link> -->
        <router-link to="/about" class="header_nav_a">О проекте</router-link>
      </div>

      <button class="btn_request">Оставить заявку</button>
      <button class="btn_signin">Войти</button>
      <h2>Мы рады приветствовать Вас на нашем сайте!</h2>
    </div>
    <div class="header_bords">
      <div class="header_bord_left">
        <p>Занимательные и увлекательные задания каждый день</p>
      </div>
      <div class="header_bord_center">
        <p>Индивидуальный подход к каждому нашему ученику</p>
      </div>
      <div class="header_bord_right">
        <p>Дружный коллектив помогает в адаптации и развитии</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>

<style>
.header_details {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.header_logo {
  width: 110px;
  height: 70px;
  border-radius: 4%;
  margin: 5px 20px;
}

select {
  height: 30px;
  margin: 15px 20px;
}

.header_select_object {
  width: 150px;
}

.header_select_age {
  width: 90px;
}

.header_select_period {
  width: 90px;
}

.header_nav {
  width: 300px;
  height: 30px;
  margin: 20px 20px;
  display: flex;
  justify-content: space-around;
}

.btn_request {
  width: 130px;
  height: 30px;
  background-color: #7fcc73;
  border-radius: 6%;
  margin: 15px 20px;
}

.btn_signin {
  width: 80px;
  height: 30px;
  background-color: #b59fe5;
  border-radius: 6%;
  margin: 15px 20px;
}

h2 {
  color: #560c79;
  margin-left: 10px;
}

.header_bords {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align: flex-end;
}

.header_bord_left {
  width: 180px;
  height: 65px;
  background: #ecd379;
  margin: 20px 100px 0 100px;
  text-align: center;
}

.header_bord_center {
  width: 180px;
  height: 65px;
  background: #72d187;
  margin: 20px 100px 0 100px;
  text-align: center;
}

.header_bord_right {
  width: 180px;
  height: 65px;
  background: #91a5eb;
  margin: 20px 100px 0 100px;
  text-align: center;
}
</style>
