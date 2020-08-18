<template>
  <div class="header_page">
    <div class="header_details">
      <router-link to="/"><img src="../assets/img/logo_lang.jpg" class="header_logo" /></router-link>

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

      <form method="post">
      <p><select required class="header_select_period">
        <option>Период</option>
        <option>Неполный день (4 часа)</option>
        <option>Полный день</option>
      </select></p>
      </form>

      <div class="header_nav">
        <router-link to="/" class="header_nav_a">Главная</router-link>
        <router-link to="/contacts" class="header_nav_a">Контакты</router-link>
        <router-link to="/about" class="header_nav_a">О проекте</router-link>
      </div>

      <a href="#popup_wrapper" class="btn_request">Оставить заявку</a>
      <a href="#popup_signin_wrapper" class="btn_signin">Войти</a>
      <h2 class="header_details_greeting">Мы рады приветствовать Вас на нашем сайте!</h2>
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

    <div id="popup_wrapper" class="request_overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
          <form
            method="post"
            @submit.prevent="addRequest"
            onsubmit="alert('Ваша заявка отправлена!');return false"
          >
            <div class="request_overlay_field">
              <label for="name">Как зовут Вашего ребенка?</label><br>
              <input
                type="text"
                id="name"
                class="request_input"
                required
              />
              <label for="age">Сколько ему/ей лет?</label><br>
              <input
                type="text"
                id="age"
                class="request_input"
                required
              />
              <label for="period">Какой период пребывания вам подходит?</label><br>
              <input
                type="text"
                id="period"
                class="request_input"
                required
              />
              <label for="tel">Ваш номер телефона</label><br>
              <input
                type="text"
                id="tel"
                class="request_input"
                required
              />
            </div>

              <input type="submit" value="Подать заявку" class="btn_submit_request" />
          </form>
      </div>
    </div>

    <div id="popup_signin_wrapper" class="signin_overlay">
      <div class="popup_signin">
        <a class="signin_close" href="#">&times;</a>
          <form>
            <div class="signin_overlay_field">
              <label for="login">Логин</label><br>
              <input
                type="text"
                id="login"
                class="signin_input"
                required
              />
              <label for="pw">Пароль</label><br>
              <input
                type="text"
                id="pw"
                class="signin_input"
                required
              />
            </div>

              <input type="submit" value="Войти" class="btn_submit_signin" />
          </form>
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
  margin: 15px 5px;
}

option {
  background: #B876E0;
}

.header_select_object {
  width: 200px;
}

.header_select_age {
  width: 150px;
}

.header_select_period {
  width: 180px;
}

.header_nav {
  width: 300px;
  height: 30px;
  margin: 20px 20px;
  display: flex;
  justify-content: space-around;
}

.header_nav_a {
  text-decoration: none;
  color: black;
}

.btn_request {
  width: 130px;
  height: 30px;
  background-color: #7fcc73;
  border-radius: 6%;
  margin: 15px 20px;
  color: black;
  text-decoration: none;
  padding: 5px 8px;
}

.btn_signin {
  width: 80px;
  height: 30px;
  background-color: #b59fe5;
  border-radius: 6%;
  margin: 15px 20px;
  color: black;
  text-decoration: none;
  padding: 6px 20px;
}

.header_details_greeting {
  color: #560c79;
  margin-left: 10px;
}

.header_bords {
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* align: flex-end; */
}

.header_bord_left {
  width: 200px;
  height: 80px;
  background: #ecd379;
  margin: 20px 100px 0 100px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
}

.header_bord_center {
  width: 200px;
  height: 80px;
  background: #72d187;
  margin: 20px 100px 0 100px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
}

.header_bord_right {
  width: 200px;
  height: 80px;
  background: #91a5eb;
  margin: 20px 100px 0 100px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
}

.request_overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.request_overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 400px;
  height: 350px;
  position: relative;
  transition: all 5s ease-in-out;
  background: #D2EBEE;
}

/* .popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
} */
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 50%;
  overflow: auto;
}

.request_overlay_field {
  color: #202020;
  border-color: #a7a7a7;
  font-weight: 300;
  padding: 11px 25px;
  width: 90%;
  /* height: 600px; */
  font-size: 16px;
  line-height: 1;
}

.request_input {
  height: 30px;
  width: 90%;
  margin-bottom: 10px;
  background: #E3E1E1;
}

.request_input:invalid {
  border: 1px solid grey;
}

.reviews_input:valid {
  border: 2px solid black;
}

.btn_submit_request {
  width: 200px;
  height: 40px;
  border-radius: 2px;
  font-size: 16px;
  background: #89B4DC;
  margin-left: 30px;
}

.btn_submit_request:hover {
  background: rgb(88, 109, 228);
}

.btn_submit_request:active {
  background: grey;
}

.signin_overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.signin_overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup_signin {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 350px;
  height: 300px;
  position: relative;
  transition: all 5s ease-in-out;
  background: #D2EBEE;
}

/* .popup_signin h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
} */
.popup_signin .signin_close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup_signin .signin_close:hover {
  color: #06d85f;
}
.popup_signin .content {
  max-height: 50%;
  overflow: auto;
}

.signin_overlay_field {
  color: #202020;
  border-color: #a7a7a7;
  font-weight: 300;
  padding: 11px 25px;
  width: 90%;
  margin-top: 30px;
  font-size: 16px;
  line-height: 1;
}

.signin_input {
  height: 30px;
  width: 90%;
  margin-bottom: 20px;
  background: #E3E1E1;
}

.signin_input:invalid {
  border: 1px solid grey;
}

.signin_input:valid {
  border: 2px solid black;
}

.btn_submit_signin {
  width: 200px;
  height: 40px;
  border-radius: 2px;
  font-size: 16px;
  background: #89B4DC;
  margin-left: 30px;
}

.btn_submit_signin:hover {
  background: rgb(88, 109, 228);
}

.btn_submit_signin:active {
  background: grey;
}




</style>
