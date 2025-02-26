<template>
  <div class="form">
      <InputText placeholder="Метки" type="text" v-model="localUserTags"/>
      <div class="form-select">
        <Select placeholder="Тип записи" fluid v-model:model-value="localUser.recordType" :options="recordTypeList"/>
      </div>
        <div class="changeForm" v-if="localUser.recordType === 'Локальная'">
          <InputText placeholder="Логин" fluid name="login" type="login" v-model="localUser.login"/>
        </div>
        <div class="changeForm" v-else>
          <InputText placeholder="Логин" name="login" type="login" v-model="localUser.login"/>
          <InputText placeholder="Пароль" name="password" type="password" v-model="localUser.password"/>
        </div>
      <Button class="form-button" icon="pi pi-delete-left"/>
  </div>
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import { Select } from 'primevue';
import Button from 'primevue/button';
import { ref } from 'vue';
import { type Account, recordTypeList } from '@/entites/user';

interface Props {
  account: Account;
}

const { account } = defineProps<Props>();

const localUser = ref({ ...account });
const localUserTags = ref<string>('')
</script>

<style scoped lang="scss">
.form{
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  
  &-select {
  // width: 40rem;
  }
  &-button {
    width: 10rem;
  }
}

.changeForm{
  display: flex;
  gap: 1rem;
  width: 100%;
}

.p-select{
  width: 10rem;
}

.p-button{
  width: 6rem;
}
</style>