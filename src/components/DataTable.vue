<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="datas"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon @click="ViewDetails(item, urlDetails)">mdi-book-search</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    datas: Array,
    headers: Array,
    search: String,
    urlDetails: String,
  },
  data: () => ({
    products: [],
  }),
  methods: {
    ViewDetails(item, urlDetails) {
      // muestra la vista de detalles del buyer
      let path = "";
      if (item.buyer_name && item.buyer_id && item.age) {
        this.$store.dispatch("saveBuyersDetail", {});
        path = urlDetails + "/" + item.buyer_id;
        console.log(path);
        this.$router.push(path);
      } else {
        // muestra la vista de productos en una tabla simple
        if (urlDetails === "/") {
          this.$router.push({
            name: "SimpleTable2",
            query: { products: item.products },
          });
        } else {
          this.$router.push({
            name: "SimpleTable1",
            query: { products: item.products },
          });
        }
      }
    },
  },
};
</script>