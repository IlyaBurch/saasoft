import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import type { Account } from "../types/types";

const STORAGE_KEY = 'my_unique_project_key_accounts';

export const useUserStore = defineStore('user', () => {

  const storedAccounts = localStorage.getItem(STORAGE_KEY);
  const accounts: Account[] = reactive(storedAccounts ? JSON.parse(storedAccounts) : [
    {id: 1, tags: [
      {text: 'Some'},
      {text: 'Some1'},
      {text: 'Some2'}
    ], recordType: undefined, login: undefined, password: null},
  ]);

  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
  }

  watch(accounts, () => {
    saveToLocalStorage();
  }, { deep: true });

  function addNewAccount(){
    accounts.push({
      id: accounts.length + 1, 
      tags: [], 
      recordType: undefined, 
      login: undefined, 
      password: null
    });
  }

  function deleteAccout(id: number){
    accounts.splice(accounts.findIndex(a => a.id === id), 1);
  }

  function updateAccount(account: Account){
    const index = accounts.findIndex(a => a.id === account.id);
    accounts[index] = account;
  }

  return { accounts, addNewAccount, deleteAccout, updateAccount, }
});
