<template>
  <div class="l-form">
    <InputText
      class="form-login"
      name="login"
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import { defineProps } from 'vue';

defineProps<{
  modelValue: string; // Принимаем значение через v-model
}>();

// Эмитим изменения обратно в родительский компонент
const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.login {
  width: 100%;
}
</style>