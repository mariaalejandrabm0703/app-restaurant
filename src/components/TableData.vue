<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transaction"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon @click="viewDetails(item.products)">mdi-book-search</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props: { transaction: Array, headers: Array, search: String },
  data: () => ({
    products: [],
  }),
  methods: {
    viewDetails(products) {
      this.products = products;
    },
  },
};
</script>