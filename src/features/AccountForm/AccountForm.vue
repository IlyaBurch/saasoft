<template>
  <Form @submit="onSubmit" class="form">
    <div>
      <InputText placeholder="Метки" type="text" v-model="localUserTags" @blur="validateTags"/>
    </div>
    <div class="form-select">
      <Select placeholder="Тип записи" fluid v-model:model-value="localUser.recordType" :options="recordTypeList" @change="validateRecordType" @blur="validateRecordType" />
      <Message v-show="errors.recordType" severity="error" size="small" variant="simple">{{ errors.recordType }}</Message>
    </div>
    <div class="changeForm grid" v-if="localUser.recordType === 'LDAP'">
      <InputText placeholder="Логин" fluid name="login" type="login" v-model="localUser.login" @blur="validateLogin"/>
      <Message v-show="errors.login" severity="error" size="small" variant="simple">{{ errors.login }}</Message>
    </div>
    <div class="changeForm" v-else>
      <div>
        <InputText placeholder="Логин" name="login" type="login" v-model="localUser.login" @blur="validateLogin"/>
        <Message v-show="errors.login" severity="error" size="small" variant="simple">{{ errors.login }}</Message>
      </div>
      <div>
        <InputText placeholder="Пароль" name="password" type="password" v-model="localUser.password" @blur="validatePassword"/>
        <Message v-show="errors.password" severity="error" size="small" variant="simple">{{ errors.password }}</Message>
      </div>
    </div>
    <Button class="form-button" icon="pi pi-delete-left" @click="deleteAccount"/>
  </Form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { type Account, recordTypeList } from '@/entites/user';

interface Props {
  account: Account;
}
const { account } = defineProps<Props>();
const localUser = reactive({ ...account });
const localUserTags = ref<string>('');
const errors = reactive({
  login: '',
  password: '',
  tags: '',
  recordType: ''
});

function validateTags() {
  if (localUserTags.value.length > 50) {
    errors.tags = 'Максимум 50 символов';
  } else {
    errors.tags = '';
  }
}

function validateRecordType() {
  if (!localUser.recordType) {
    errors.recordType = 'Тип записи обязателен';
  } else if(localUser.recordType === 'LDAP'){
    localUser.password = null;
    errors.password = '';
    errors.recordType = '';
  } else errors.recordType = ''
}

function validateLogin() {
  if (!localUser.login || localUser.login.length > 100) {
    errors.login = 'Логин обязателен и не более 100 символов';
  } else {
    errors.login = '';
  }
}

function validatePassword() {
  if (!localUser.password || localUser.password.length > 100) {
    errors.password = 'Пароль обязателен и не более 100 символов';
  } else {
    errors.password = '';
  }
}

function onSubmit() {
  validateTags();
  validateRecordType();
  validateLogin();
  validatePassword();

  if (!errors.tags && !errors.recordType && !errors.login && !errors.password) {
    const tagsArray = localUserTags.value.split(';').map(tag => ({ text: tag.trim() }));
    const accountData = {
      ...localUser,
      tags: tagsArray
    };
    // Сохранение в стейт менеджер или отправка на сервер
    console.log('Account Data:', accountData);
  }
}

function deleteAccount() {
  // Логика удаления учетной записи
  console.log('Account deleted');
}
</script>

<style scoped lang="scss">
.form {
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
.changeForm {
  display: flex;
  gap: 1rem;
  width: 100%;
}
.p-select {
  width: 10rem;
}
.p-button {
  width: 6rem;
}
.grid{
  display: grid;
}
</style>
