<template>
  <div class="formWidget">
    <AccountList :showHelp="true" name="Учетные записи" :helpText>
        <AccountForm v-for="account in userStore.accounts" :key="account.id" :account tags="shiet" class="list"/>
    </AccountList>
  </div>
  
  <Button class="button" label="Toggle Dark Mode" @click="toggleDarkMode()" />

</template>

<script lang="ts" setup>
import {AccountList} from '@/widgets/AccountList'
import { Button } from 'primevue';
import AccountForm from '@/features/AccountForm/AccountForm.vue';
import { useUserStore } from '@/entites/user';

const userStore = useUserStore();


function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}


const helpText = "Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
</script>
<style scoped lang="scss">
.formWidget {
  width: 60rem;
}
.button {
  margin-top: 10rem;
}
</style>