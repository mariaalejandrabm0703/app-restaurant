<template>
  <div class="home pa-6">
    <v-row>
      <v-col sm="12">
        <div>
          <h2>Client:{{ nameBuyer }}</h2>
          <h4>Age:{{ ageBuyer }}</h4>
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
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "BuyerDetails",
  components: { TableData },
  props: { nameBuyer: String, ageBuyer: Number },
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
          value: "actions",
          class: "blue darken-4 white--text",
          sortable: false,
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
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
          class: "blue darken-4 white--text",
        },
        {
          text: "Price",
          value: "price",
          class: "blue darken-4 white--text",
        },
      ],
    };
  },
  created: function () {
    // Se ejecuta cuando inicia la aplicación
    this.SearchClient();
  },
  methods: {
    SearchClient(item) {
      Vue.axios
        .get("https://mariaalejandrabm0703.github.io/searchClient/")
        .then((response) => {
          console.log(response.data.clientID);
          this.transactions = response.data.clientID.transactions;
          this.clients = response.data.clientID.clients;
          this.products = response.data.clientID.products;
        });
    },
  },
};
</script>
