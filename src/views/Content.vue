<template>
<div>
  <div class="content">
    <div class="english_lang">
      <h4 class="english_lang_h3">АНГЛИЙСКИЙ ЯЗЫК</h4>
      <div class="english_left">
        <p>От 3 до 5 лет</p>
        <img src="../assets/img/eng-6-10.jpg" class="english_left_img"/>
      </div>
      <div class="english_right">
        <p>От 5 до 7 лет</p>
        <img src="../assets/img/eng-18.png" class="english_right_img"/>
      </div>
    </div>

    <div class="kazakh_lang">
      <h4 class="kazakh_lang_h3">КАЗАХСКИЙ ЯЗЫК</h4>
      <div class="kazakh_left">
        <p>От 3 до 5 лет</p>
        <img src="../assets/img/kazakh-6-10.jpeg" class="kazakh_left_img"/>
      </div>
      <div class="kazakh_right">
        <p>От 5 до 7 лет</p>
        <img src="../assets/img/kazakh-18.jpg" class="kazakh_right_img"/>
      </div>
    </div>

    <div class="russian_lang">
      <h4 class="russian_lang_h3">РУССКИЙ ЯЗЫК</h4>
      <div class="russian_left">
        <p>От 3 до 5 лет</p>
        <img src="../assets/img/rus-alfavit.jpg" class="russian_left_img"/>
      </div>
      <div class="russian_right">
        <p>От 5 до 7 лет</p>
        <img src="../assets/img/rus-7.jpg" class="russian_right_img"/>
      </div>
    </div>

    <div class="logic">
      <h4 class="logic_h3">ЛОГИЧЕСКИЕ ЗАДАЧИ</h4>
      <p class="logic_p">От 1,5 года до 3 лет</p>
      <img src="../assets/img/logics.jpg" class="logic_img"/>
      <p class="logic_p_center">От 3 до 5 лет</p>
      <p class="logic_p_center">От 5 до 7 лет</p>
    </div>

    <div class="speech">
      <h4 class="speech_h3">РАЗВИТИЕ РЕЧИ</h4>
      <p class="speech_p">От 1,5 года до 3 лет</p>
      <p class="speech_p">От 3 до 5 лет</p>
      <img src="../assets/img/speech.png" class="speech_img"/>
      <p class="speech_p_last">От 5 до 7 лет</p>
    </div>

    <div class="figures">
      <h4 class="figures_h3">ГЕОМЕТРИЧЕСКИЕ ФИГУРЫ</h4>
      <img src="../assets/img/figures.jpg" class="figures_img"/>
      <p class="figures_p">От 1,5 года до 3 лет</p>
      <p class="figures_p">От 3 до 5 лет</p>
      <p class="figures_p">От 5 до 7 лет</p>
    </div>

    <div class="time">
      <h4 class="time_h3">ОРИЕНТИРОВКА ПО ВРЕМЕНИ</h4>
      <img src="../assets/img/time.jpg" class="time_img"/>
      <p class="time_p">От 3 до 5 лет</p>
      <p class="time_p">От 5 до 7 лет</p>
    </div>

    <div class="count">
      <h4 class="count_h3">КОЛИЧЕСТВО И СЧЁТ</h4>
      <img src="../assets/img/count.jpg" class="count_img"/>
      <p class="count_p">От 3 до 5 лет</p>
      <p class="count_p">От 5 до 7 лет</p>
    </div>

    <div class="write">
      <h4 class="write_h3">ОБУЧЕНИЕ ПРОПИСИ</h4>
      <img src="../assets/img/write.jpg" class="write_img"/>
      <p class="write_p">От 3 до 5 лет</p>
      <p class="write_p">От 5 до 7 лет</p>
    </div>

    <div class="read">
      <h4 class="read_h3">ЧТЕНИЕ</h4>
      <img src="../assets/img/read.jpg" class="read_img"/>
      <p class="read_p">От 3 до 5 лет</p>
      <p class="read_p">От 5 до 7 лет</p>
    </div>
  </div>

  <h1 align="center">ОТЗЫВЫ</h1>
  <div class="reviews">
    
    <div class="riview_1">
      <p>Карлыгаш, дочь Адема, 3 года </p>
      <p>“Мы начали ходить сначала в неполную группу, но Адеме очень понравилось с первого дня и мы стали оставлять ее на весь день. Много детей, игры, интересные занятия! Ребенок стал лучше кушать, лучше говорить, интересоваться различными фигурами, мастерить из них что-то. Очень занимательно учат детей считать и знать буквы. Всё в игровой легкой форме и дети с удовольствием участвуют в процессе.”</p>
    </div>

    <div class="riview_1">
      <p>Олеся, сын Егор, 5,5 лет</p>
      <p>“Уже полгода сын с удовольствием ходит в этот садик. За это время он многому научился. В бытовом плане - приучили к горшку и кушать самостоятельно, в плане развития - очень активно начал говорить, строить предложения, мастерить поделки. Мы очень довольны!”</p>
    </div>
  </div>

  <!-- <div class="footer">
      <Footer/>
    </div> -->
</div>
</template>

<script>
export default {
  name: "Content",

  data: () => ({}),
};
</script>

<style>
.content {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.english_lang {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 360px;
  height: 230px;
  background: url(../assets/img/english.svg) no-repeat;
  padding: 20px 0 0 30px;
}

.english_lang_h3 {
  margin-left: 10px;
  margin-top: 20px;
  width: 250px;
  height: 30px;
}

.english_left {
  width: 120px;
  height: 125px;
  padding: 5px 0 0 15px;
  margin-right: 5px;
  margin-top: -15px;
  border-radius: 8%;
}

.english_left_img {
  width: 88px;
  height: 80px;
  margin-top: 5px;
  border-radius: 8%;
}

.english_right {
  width: 120px;
  height: 125px;
  padding: 5px 0 0 15px;
  margin-left: 10px;
  margin-top: -15px;
  border-radius: 8%;
}

.english_right_img {
  width: 88px;
  height: 80px;
  margin-top: 5px;
  border-radius: 8%;
}

.kazakh_lang {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  height: 220px;
  background: url(../assets/img/kazakh.svg) no-repeat;
  padding: 20px 0 0 30px;
  margin-left: 50px;
}

.kazakh_lang_h3 {
  margin-left: 40px;
  width: 200px;
}

.kazakh_left {
  width: 110px;
  height: 110px;
  padding: 5px 10px;
  margin: -45px 5px 0 15px;
  border-radius: 8%;
}

.kazakh_left_img {
  width: 88px;
  height: 75px;
  margin-top: 5px;
  border-radius: 8%;
}

.kazakh_right {
  width: 110px;
  height: 110px;
  padding: 5px 10px;
  margin: -50px 5px 0 10px;
  border-radius: 8%;
}

.kazakh_right_img {
  width: 88px;
  height: 75px;
  margin-top: 5px;
  border-radius: 8%;
}

.russian_lang {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  height: 220px;
  background: url(../assets/img/russian.svg) no-repeat;
  padding: 20px 0 0 30px;
  margin-right: 50px;
}

.russian_lang_h3 {
  margin-left: 50px;
  width: 200px;
}

.russian_left {
  width: 110px;
  height: 110px;
  padding: 5px 10px;
  margin: -45px 5px 0 15px;
  border-radius: 8%;
}

.russian_left_img {
  width: 88px;
  height: 75px;
  margin-top: 5px;
  border-radius: 8%;
}

.russian_right {
  width: 110px;
  height: 110px;
  padding: 5px 10px;
  margin: -45px 5px 0 10px;
  border-radius: 8%;
}

.russian_right_img {
  width: 88px;
  height: 75px;
  margin-top: 5px;
  border-radius: 8%;
}

.logic {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  height: 220px;
  background: url(../assets/img/logics.svg) no-repeat;
  padding: 20px 0 0 30px;
  margin-left: 100px;
  margin-top: 30px;
}

.logic_h3 {
  margin-left: 30px;
  width: 250px;
  height: 30px;
}

.logic_img {
  width: 120px;
  height: 75px;
  margin-left: 10px;
  margin-top: -30px;
}

.logic_p {
  background-color: #D77DCE;
  margin-top: -30px;
  height: 20px;
  width: 150px;
  padding: 2px;
}

.logic_p_center {
  background-color: #D77DCE;
  margin: -30px 0px 0 30px;
  height: 25px;
  width: 100px;
  padding: 4px;
}

.speech {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 250px;
  background: url(../assets/img/speech.svg) no-repeat;
  padding-left: 30px;
  margin-left: 200px;
  margin-top: -50px;
}

.speech_h3 {
  margin-left: 50px;
  margin-top: 40px;
  width: 250px;
  height: 30px;
}

.speech_img {
  width: 150px;
  height: 100px;
  margin-left: 10px;
  margin-top: -30px;
}

.speech_p {
  background-color: #70C063;
  margin-top: -30px;
  margin-right: 15px;
  height: 20px;
  width: 140px;
  text-align: center;
}

.speech_p_last {
  background-color: #70C063;
  margin-left: 15px;
  height: 20px;
  width: 100px;
  padding: 2px;
}

.figures {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 250px;
  background: url(../assets/img/figures.svg) no-repeat;
  padding-left: 20px;
}

.figures_h3 {
  margin-left: 30px;
  margin-top: 50px;
  width: 250px;
  height: 30px;
}

.figures_img {
  width: 130px;
  height: 80px;
  margin-left: 10px;
  margin-top: -40px;
}

.figures_p {
  height: 20px;
  width: 140px;
  margin-left: 20px;
  margin-top: -30px;
}

.time {
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  height: 250px;
  background: url(../assets/img/time.svg) no-repeat;
  margin-top: 50px;
  margin-left: 40px;
}

.time_h3 {
  margin-left: 50px;
  margin-top: 20px;
  width: 250px;
  height: 30px;
}

.time_img {
  width: 130px;
  height: 80px;
  margin-left: 40px;
  margin-top: -40px;
}

.time_p {
  height: 20px;
  width: 140px;
  margin-left: 20px;
  margin-top: -30px;
}

.count {
  display: flex;
  flex-wrap: wrap;
  width: 370px;
  height: 230px;
  background: url(../assets/img/count.svg) no-repeat;
  padding-left: 20px;
  margin-right: 220px;
  margin-top: -70px;
}

.count_h3 {
  margin-left: 30px;
  margin-top: 50px;
  width: 250px;
  height: 30px;
}

.count_img {
  width: 130px;
  height: 80px;
  margin-left: 10px;
  margin-top: -40px;
}

.count_p {
  height: 20px;
  width: 140px;
  margin-left: 20px;
  margin-top: -30px;
}

.write {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 250px;
  background: url(../assets/img/writing.svg) no-repeat;
  padding-left: 20px;
}

.write_h3 {
  margin-left: 50px;
  margin-top: 30px;
  width: 250px;
  height: 30px;
}

.write_img {
  width: 130px;
  height: 80px;
  margin-left: 10px;
  margin-top: -50px;
}

.write_p {
  height: 20px;
  width: 140px;
  margin-left: 20px;
  margin-top: -40px;
}

.read {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 250px;
  background: url(../assets/img/reading.svg) no-repeat;
  padding-left: 20px;
  margin-left: 350px;
  margin-top: -180px;
}

.read_h3 {
  margin-left: 50px;
  margin-top: 30px;
  width: 250px;
  height: 30px;
}

.read_img {
  width: 130px;
  height: 80px;
  margin-left: 10px;
  margin-top: -50px;
}

.read_p {
  height: 20px;
  width: 140px;
  margin-left: 20px;
  margin-top: -40px;
}

.reviews {
  width: 80%;
  margin-left: 150px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.riview_1 {
  width: 40%;
  height: 200px;
  padding: 20px;
  background: #4E90B5;
  border-radius: 6px;
}

</style>
