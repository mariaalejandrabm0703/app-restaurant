<template>
  <div class="home pa-6">
    <v-row align="center" justify="space-around">
      <v-col sm="10">
        <v-text-field label="Client ID"></v-text-field>
      </v-col>
      <v-col sm="2">
        <v-btn style="width: 100%" elevation="2">Search</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <div>
          <h2>Client:</h2>
          <h4>Age:</h4>
        </div>
        <br />
        <div>
          <h2>Transactions:</h2>
          <TableData
            :transaction="transactions"
            :headers="headersTrans"
          ></TableData>
        </div>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col sm="6">
        <div>
          <h2>Similar clients:</h2>
          <TableData
            :transaction="clients"
            :headers="headersClient"
          ></TableData>
        </div>
      </v-col>
      <v-col sm="6">
        <div>
          <h2>Suggested products:</h2>
          <TableData
            :transaction="products"
            :headers="headersProduct"
          ></TableData>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TableData from "../components/TableData";

export default {
  name: "Buyers",
  components: { TableData },
  data() {
    return {
      transactions: [],
      clients: [],
      products: [],
      headersTrans: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          class: "blue darken-4 white--text",
        },
        { text: "IP", value: "ip", class: "blue darken-4 white--text" },
        { text: "Device", value: "device", class: "blue darken-4 white--text" },
        {
          text: "Products",
          value: "products",
          class: "blue darken-4 white--text",
        },
      ],
      headersClient: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          class: "blue darken-4 white--text",
        },
        { text: "Client", value: "client", class: "blue darken-4 white--text" },
        { text: "Age", value: "age", class: "blue darken-4 white--text" },
      ],
      headersProduct: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          class: "blue darken-4 white--text",
        },
        {
          text: "Product",
          value: "product",
          class: "blue darken-4 white--text",
        },
      ],
    };
  },
};
</script>
