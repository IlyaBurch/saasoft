import { defineStore } from "pinia";
import { reactive } from "vue";
import type { Account } from "../types/types";

export const useUserStore = defineStore('user', () => {
  const accounts: Account[] = reactive([
    {id: 1, tags: [
      {text: 'Some'},
      {text: 'Some1'},
      {text: 'Some2'}
    ], recordType: undefined, login: undefined, password: null},
    {id: 2, tags: [], recordType: undefined, login: undefined, password: null},
    {id: 3, tags: [], recordType: undefined, login: undefined, password: null},
    {id: 4, tags: [], recordType: undefined, login: undefined, password: null},
    {id: 5, tags: [], recordType: undefined, login: undefined, password: null},
  ])

  // const updateAccountField = (id: number, field: keyof Account, value: string) => {
  //   const account = accounts.find(acc => acc.id === id);
  //   if (account) {
  //     if (field === )
  //   }
  // };
  return { accounts }
})