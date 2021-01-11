<template>
  <div class="home pa-6">
    <v-row>
      <v-col sm="12">
        <div>
          <h2>Buyer: {{ this.name }}</h2>
          <h4>Age: {{ this.age }}</h4>
        </div>
        <br />
        <div>
          <h2 style="padding: 3px">Transactions:</h2>
          <DataTable
            :urlDetails="viewDetails"
            :datas="transactions"
            :headers="headersTrans"
          ></DataTable>
        </div>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col sm="6">
        <div>
          <h2 style="padding: 3px">Similar clients:</h2>
          <DataTable :datas="buyers" :headers="headersBuyers"></DataTable>
        </div>
      </v-col>
      <v-col sm="6">
        <div>
          <h2 style="padding: 3px">Suggested products:</h2>
          <DataTable :datas="products" :headers="headersProduct"></DataTable>
        </div>
      </v-col>
    </v-row>
    <v-btn
      style="top: 3px"
      @click="$router.go(-1)"
      class="ma-2"
      outlined
      color="indigo"
    >
      Back
    </v-btn>
  </div>
</template>

<script>
import DataTable from "../components/DataTable";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "BuyerDetails",
  components: { DataTable },
  data() {
    return {
      name: "",
      age: "",
      viewDetails: "/buyer/" + this.$route.params.id,
      transactions: [],
      buyers: [],
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
        },
      ],
      headersBuyers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          class: "blue darken-4 white--text",
        },
        { text: "Client", value: "name", class: "blue darken-4 white--text" },
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
    this.SearchClient(this.$route.params.id);
  },
  methods: {
    SearchClient(idBuyer) {
      // usar ID para poder consultar el buyer
      Vue.axios
        .get("https://mariaalejandrabm0703.github.io/searchClient/")
        .then((response) => {
          this.name = response.data.clientID.name;
          this.age = response.data.clientID.age;
          this.transactions = response.data.clientID.transactions;
          this.buyers = response.data.clientID.buyers;
          this.products = response.data.clientID.products;
        });
    },
  },
};
</script>
