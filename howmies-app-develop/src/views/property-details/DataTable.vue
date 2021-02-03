<template>
  <v-col xs="12" md="5" class="pt-0">
    <v-simple-table height="400px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Price</th>
          <th class="text-left">₦ 350,000</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in headers" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { name: 'Address', value: '8 Iju Road, Agege, Lagos.' },
      { name: 'Beds', value: 3 },
      { name: 'Baths', value: 2 },
      { name: 'Garrage', value: 1 },
      { name: 'Living Areas', value: '8,000' },
      { name: 'Lot Size', value: '20,000' },
      { name: 'Year Built', value: 2015 },
    ],
  }),
};
</script>

<style scoped>
.v-data-table td {
  font-size: 12px !important;
}
</style>
