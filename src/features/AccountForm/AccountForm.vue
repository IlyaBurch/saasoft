<template>
  <Toast />
  <div @submit="onSubmit" class="form">
    <div>
      <InputText placeholder="Метки" type="text" v-model="localUser.tags" @blur="validateTags"/>
      <Message v-show="errors.tags" severity="error" size="small" variant="simple">{{ errors.tags }}</Message>
    </div >
    <div class="form-select">
      <Select placeholder="Тип записи" fluid v-model:model-value="localUser.recordType" :options="recordTypeList" @hide="validateRecordType" />
      <!-- <Select placeholder="Тип записи" fluid v-model:model-value="localUser.recordType" :options="recordTypeList" @change="validateRecordType" @blur="validateRecordType" /> -->
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
    <Button class="form-button" icon="pi pi-delete-left" @click="store.deleteAccout(account.id)" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

import { type Account, recordTypeList, type Tag, useUserStore } from '@/entites/user';

const store = useUserStore();
const toast = useToast();


interface Props {
  account: Account;
}
const { account } = defineProps<Props>();

function tagsToString(tags: Tag[] | undefined): string {
  if (!tags) {
    return '';
  }

  const tagValues = tags.map(tag => tag.text);

  return tagValues.join(';');
}

const localUser = reactive({ 
  id: account.id,
  tags: tagsToString(account.tags),
  recordType: account.recordType,
  login: account.login,
  password: account.password
 });

const errors = reactive({
  login: '',
  password: '',
  tags: '',
  recordType: '',
});

function validateTags() {
  if (localUser.tags.length > 50) {
    errors.tags = 'Максимум 50 символов';
  } else {
    errors.tags = '';
    onSubmit();
  }
}

function validateRecordType() {
  if (!localUser.recordType) {
    errors.recordType = 'Тип записи обязателен';
  } else if(localUser.recordType === 'LDAP'){
    localUser.password = null;
    errors.password = '';
    errors.recordType = '';
    onSubmit();
  } else {
    errors.recordType = '';
    onSubmit();
  }
}

function validateLogin() {
  if (!localUser.login || localUser.login.length > 100) {
    errors.login = 'Логин обязателен и не более 100 символов';
  } else {
    errors.login = '';
    onSubmit();
  }
}

function validatePassword() {
  if (!localUser.password || localUser.password.length > 100) {
    errors.password = 'Пароль обязателен и не более 100 символов';
  } else {
    errors.password = '';
    onSubmit();
  }
}

function onSubmit() {
  if (!isFormValid()) {
    return;
  }

  const accountData = prepareAccountData();

  saveAccountData(accountData);
}

function isFormValid(): boolean {
  const isRecordTypeValid = !errors.recordType && !!localUser.recordType; 
  const isLoginValid = !errors.login && !!localUser.login; 

  if (localUser.recordType === 'Локальная') {
    const isPasswordValid = !errors.password && !!localUser.password; 
    return isRecordTypeValid && isLoginValid && isPasswordValid;
  }

  return isRecordTypeValid && isLoginValid;
}

function prepareAccountData(): Account {
  const tagsArray = localUser.tags
    .split(';')
    .map(tag => ({ text: tag.trim() }))
    .filter(tag => tag.text); 

  if (localUser.recordType === 'LDAP') {
    localUser.password = null;
  }

  return {
    ...localUser,
    tags: tagsArray,
  };
}

// Сохранение данных в стейт менеджер
function saveAccountData(accountData: Account) {
  store.updateAccount(accountData);

  showSuccessNotification(`Учетная записть с ID:${accountData.id} сохранена!`)
}

// Показ уведомления об успешном сохранении
function showSuccessNotification(text: string) {
  toast.add({
    severity: 'success',
    summary: 'Успешно',
    detail: text,
    life: 3000,
  });
}

</script>

<style scoped lang="scss">
.form {
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;

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
