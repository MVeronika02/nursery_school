<template>
  <div>
    <h1 class="about_head">О проекте</h1>

    <p class="block_start">
      Пребывание в детском саду - это первое в жизни ребенка испытание личных качеств. Знакомство с внешним миром и такими же детьми, как и он сам.
      Наш проект ориентирован на обучение Вашего ребенка с самого начала.
    </p>

    <div class="block_about">
      <div class="info_block_left">
        <img src="@/assets/img/picture0.jpg" class="info_block_left_img" />
        <p class="info_block_left_p">
          В своих занятиях мы используем только современные методики развития детей и последние знания в области детской психологии.
          В нашем садике работает дружная команда профессионалов с опытом работы. Наши сотрудники по раннему развитию имеют опыт работы с детьми и очень любят свою работу
        </p>
      </div>

      <div class="info_block_center">
        <p class="info_block_center_p">
          Мы подбираем занятия индивидуально для каждого ребенка по его способностям. Наши опытные инструкторы находят подход к каждому ребенку, помогут понять и развить сильные стороны вашего ребенка и раскрыть все его таланты
        </p>
        <img src="@/assets/img/picture11.jpg" class="info_block_center_img" />
      </div>

      <div class="info_block_right">
        <img src="@/assets/img/picture22.jpeg" class="info_block_right_img"/>
        <p class="info_block_right_p">
          Каждому родителю регулярно предоставляется обратная связь по результатам вашего ребенка.
          Мы поможем увидеть детей в новом свете, с их талантами и способностями.
          Мы всегда подскажем, как развивать уникальные способности вашего ребенка не только в садике, но и дома
        </p>
      </div>
    </div>

    <p class="block_final">Всесторонне развивающая атмосфера нашего сада позволяет раскрыть способности и таланты каждого ребенка. В нашем клубе нет учителей и учеников. У нас царит мирная и дружеская атмосфера. Мы делаем так, что в нашем садике дети, родители и сотрудники чувствуют себя как дома.
На наших занятиях мы не учимся, мы играем. Детки познают новое через веселые развивающие игры. На наши занятия дети бегут с радостью и готовы посещать их ежедневно</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style>

.about_head {
  margin-left: 100px;
}

.block_start {
  margin-top: 20px;
  font-size: 24px;
  width: 85%;
  margin-left: 100px;
}

.block_about {
  width: 85%;
  margin-left: 100px;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}

.info_block_left {
  width: 30%;
}

.info_block_left_img {
  width: 300px;
  height: 200px;
  margin-left: 40px;
  border-radius: 4px;
}

.info_block_left_p {
  background: #cc8be2;
  height: 230px;
  padding: 15px;
  text-align: left;
  margin-top: 40px;
  font-size: 20px;
  border-radius: 8px;
}

.info_block_center {
  width: 30%;
  margin-left: 10px;
}

.info_block_center_img {
  width: 300px;
  height: 200px;
  margin-top: 60px;
  margin-left: 40px;
  border-radius: 4px;
}

.info_block_center_p {
  background: #6fbf53;
  height: 200px;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  border-radius: 8px;
}

.info_block_right {
  width: 30%;
}

.info_block_right_img {
  width: 300px;
  height: 200px;
  margin-left: 40px;
  border-radius: 4px;
}

.info_block_right_p {
  background: #7794DF;
  height: 230px;
  padding: 15px;
  text-align: left;
  margin-top: 40px;
  font-size: 20px;
  border-radius: 8px;
}

.block_final {
  font-size: 24px;
  width: 85%;
  margin: 80px 100px;
}
</style>
