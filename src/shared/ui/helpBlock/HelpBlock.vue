<template>
  <Card class="help">
    <template #content>
      <div class="help-block">
        <Button @click="show = !show" icon="pi pi-question-circle"/>
        <Transition>
          <span v-show="show">
            {{ text }}
          </span>
        </Transition>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">

import Card from 'primevue/card';
import { Button } from 'primevue';
import { ref } from 'vue';

const { text } = defineProps<{
  text?: string
}>();

const show = ref<boolean>(true)

</script>

<style>
.help{
  width: fit-content;
}
.help-block {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>