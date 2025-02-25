<template>
  <div class="account-list">
    <h2>Учетные записи</h2>
    <AddButton />
  </div>
  <HelpBlock text="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"/>
  <AccountTable/>
</template>

<script lang="ts" setup>
import { AddButton } from '@/shared/ui/addButton'
import { HelpBlock } from '@/shared/ui/helpBlock'
import { AccountTable } from '@/features/AccountTable'


</script>

<style scoped>
.account-list {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>