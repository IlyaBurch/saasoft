<template>
  <div class="group">
    <InputText name="login" type="text" v-model="login"/>
    <InputText name="password" type="text" v-model="password"/>
  </div>
</template>

<script lang="ts" setup>
const login = defineModel<string>('login')
const password = defineModel<string>('password')
</script>

<style scoped>
.group {
  display: flex;
  gap:1rem;
}
</style>