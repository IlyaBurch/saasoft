<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ name }}</h2>
      <AddButton @click="store.addNewAccount" />
    </div>
    <HelpBlock class="card-help" v-show="showHelp" :text="helpText"/>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { AddButton } from '@/shared/ui/addButton'
import { HelpBlock } from '@/shared/ui/helpBlock'
import { useUserStore } from '@/entites/user';
const store = useUserStore();

const { name, showHelp = true } = defineProps<{
  name: string;
  showHelp: boolean;
  helpText?: string;
}>();

</script>

<style lang="scss" scoped>
.card{
  padding: 0 1rem 0 1rem;
  &-header {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  &-header{
    margin-bottom: 1rem;
  }
  &-help{
    margin-bottom: 1rem;
  }
}
</style>