<template>
  <div>
    <h1 class="contacts_head">Контакты</h1>
    <div class="contacts_block">
      <p class="contacts_block_p">
        <b>Фактический адрес:</b><br>
        Казахстан, г.Алматы, ул.Гоголя 99
      </p>
      <p class="contacts_block_p"><b>Номер телефона:</b><br>8 (707) 425 20 20</p>
      <p class="contacts_block_p"><b>Наша электронная почта:</b><br> teach@together.com</p>
      <p class="contacts_block_p">Если у вас есть вопросы или предложения, мы будем рады узнать о них! Обращайтесь к нам любым удобным для Вас способом.</p>
      <p class="contacts_block_p">Также, вы можете найти нас в социальных сетях и на Youtube</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {};
  },
};
</script>

<style>
.contacts_head {
  margin-left: 100px;
}

.contacts_block {
  margin: 30px 100px 70px;
}

.contacts_block_p {
  font-size: 24px;
  margin-bottom: 30px;
}
</style>
