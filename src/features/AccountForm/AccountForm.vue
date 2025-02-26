<template>
  <div class="form">
    <InputText type="text" v-model="localUserTags"/>
    <Select class="form-select" v-model:model-value="localUser.recordType" :options="recordTypeList"/>
    <InputText class="p-8" name="login" type="text" v-model="localUser.login"/>
    <InputText class="form-password" v-show="localUser.recordType !== 'Локальная'" name="password" type="text" v-model="localUser.password"/>
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
  display: grid;
  grid-template-columns: 15rem 10rem 100% 15rem 8rem;
}
</style>