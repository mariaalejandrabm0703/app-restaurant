<template>
  <div class="home pa-6">
    <v-row>
      <v-col sm="12">
        <br />
        <v-alert
          v-if="popup"
          border="top"
          color="red lighten-2"
          dark
          dismissible
        >
          An error has occurred, please verify.
        </v-alert>
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
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
Vue.use(VueAxios, axios);

export default {
  name: "BuyerDetails",
  components: { DataTable },
  data() {
    return {
      popup: false,
      name: "",
      age: "",
      viewDetails: "/buyer/" + this.$route.params.id,
      transactions: [],
      buyers: [],
      products: [],
      buyerDetail: {},
      headersTrans: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "transaction_id",
          class: "blue darken-4 white--text",
        },
        { text: "IP", value: "ip", class: "blue darken-4 white--text" },
        {
          text: "Date",
          value: "transaction_date",
          class: "blue darken-4 white--text",
        },
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
          value: "buyer_id",
          class: "blue darken-4 white--text",
        },
        {
          text: "Buyer",
          value: "buyer_name",
          class: "blue darken-4 white--text",
        },
        { text: "Age", value: "age", class: "blue darken-4 white--text" },
      ],
      headersProduct: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "product_name",
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
    this.GetBuyer(this.$route.params.id);
  },
  methods: {
    GetBuyer(buyer_id) {
      var buyerDetails = this.$store.state.buyerDetails;

      if (buyerDetails.buyer_name) {
        this.buyerDetail = buyerDetails;
        this.GetDataAditional();
      } else {
        this.SearchClient(buyer_id);
      }
    },
    SearchClient(idBuyer) {
      // usar ID para poder consultar el buyer
      this.$store.dispatch("showLoading");
      let params = {};
      params["buyerID"] = idBuyer;
      Vue.axios
        .get("https://mariaalejandrabm0703.github.io/searchClient/", {
          params: params,
        })
        .then((response) => {
          this.buyerDetail = response.data.clientID;
          this.$store.dispatch("saveBuyersDetail", this.buyerDetail);
          this.GetDataAditional();
          this.$store.dispatch("showLoading");
        })
        .catch(() => {
          this.popup = true;
          this.$store.dispatch("showLoading");
          this.$store.dispatch("saveBuyersDetail", []);
        });
    },
    GetDataAditional() {
      this.name = this.buyerDetail.buyer_name;
      this.age = this.buyerDetail.age;
      this.transactions = this.buyerDetail.transactions;
      this.buyers = this.buyerDetail.buyers;
      this.products = this.buyerDetail.products;
    },
  },
};
</script>
