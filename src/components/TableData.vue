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
        <v-icon @click="viewDetails(item, urlDetails)">mdi-book-search</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props: {
    transaction: Array,
    headers: Array,
    search: String,
    urlDetails: String,
  },
  data: () => ({
    products: [],
  }),
  methods: {
    viewDetails(item, urlDetails) {
      console.log(item);
      if (item.name) {
        console.log("vista Buyers " + item.name + " " + urlDetails);
        this.$router.push(urlDetails);
      } else {
        console.log("vista Transactions " + item.name + " " + urlDetails);
      }
    },
  },
};
</script>