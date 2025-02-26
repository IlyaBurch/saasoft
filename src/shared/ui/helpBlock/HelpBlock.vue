<template>
  <Card>
    <template #content>
      <div class="help-block">
        <span class="pi pi-question-circle"/>
        <span>
          {{ text }}
        </span>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">

import Card from 'primevue/card';

const { text } = defineProps<{
  text: string
}>();

</script>

<style>
.help-block {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>