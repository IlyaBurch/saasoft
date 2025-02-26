<template>
  <div class="account-list">
    <h2>Учетные записи</h2>
    <AddButton />
  </div>
  <HelpBlock text="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"/>
  <!-- <AccountTable/> -->
  <AccountForm v-for="account in userStore.accounts" :key="account.id" :account tags="shiet"/>
</template>

<script lang="ts" setup>
import AccountForm from '@/features/AccountForm/AccountForm.vue';
import { AddButton } from '@/shared/ui/addButton'
import { HelpBlock } from '@/shared/ui/helpBlock'
import { useUserStore } from '@/entites/user';

const userStore = useUserStore();

</script>

<style scoped>
.account-list {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>