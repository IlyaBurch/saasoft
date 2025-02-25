
<template>
    // TODO: remove table and add v-for AccountForm
        <DataTable :value="products" editMode="row" dataKey="id">
            <Column field="tags" header="Метки" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <!-- <Column field="name" header="Name" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column> -->
            <Column field="recordType" header="Record type" style="width: 20%">
                <template #editor="{ data, field }">
                    <Select v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status" fluid>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option.value" />
                        </template>
                    </Select>
                </template>
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" />
                </template>
            </Column>
            <Column field="login" header="Name" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <Column field="password" header="Парооь" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" fluid />
                </template>
            </Column>
            <!-- <Column field="price" header="Price" style="width: 20%">
                <template #body="{ data, field }">
                    {{ formatCurrency(data[field]) }}
                </template>
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" fluid />
                </template>
            </Column> -->        
            </DataTable>
</template>

<script setup lang="ts">
// import { ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Tag from 'primevue/tag';

const products = [
  { id: 1, tags: 'F001', recordType: 'Product 1', login: 'INSTOCK', password: 500 },
]

</script>


<style>

</style>