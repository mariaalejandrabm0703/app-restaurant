<template>
  <div class="home pa-6">
    <v-row align="center" justify="space-around">
      <v-col sm="10">
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Select date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col sm="2">
        <v-btn style="width: 100%" @click="AddTransactions" elevation="2">
          load</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <div>
      <DataTable
        :datas="transactions"
        :headers="headers"
        :urlDetails="viewDetails"
      ></DataTable>
    </div>
    <br />
    <v-alert v-if="popup" border="top" color="red lighten-2" dark dismissible>
      An error has occurred, please verify.
    </v-alert>
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
  name: "Transactions",
  components: { DataTable },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      viewDetails: "/",
      popup: false,
      error: "Error",
      transactions: [],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "transaction_id",
          class: "blue darken-4 white--text",
        },
        {
          text: "Buyer",
          value: "buyer_name",
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
          sortable: false,
        },
      ],
    };
  },
  created: function () {
    // Se ejecuta cuando inicia la aplicación
    this.GetTransactions();
  },
  methods: {
    GetTransactions() {
      var trans = this.$store.state.transactions;
      if (trans.length > 0) {
        this.transactions = trans;
      } else {
        this.AddTransactions();
      }
    },
    AddTransactions() {
      if (this.ValidateDateFormat(this.date)) {
        let params = {};
        params["search_date"] = this.date;

        this.$store.dispatch("showLoading");
        this.$store.dispatch("saveTransactions", []);
        this.transactions = [];

        Vue.axios
          .get("https://mariaalejandrabm0703.github.io/transactions/", {
            params: params,
          })
          .then((response) => {
            this.transactions = response.data.transactions;
            this.$store.dispatch("saveTransactions", this.transactions);
            this.$store.dispatch("saveBuyers", []);
            this.$store.dispatch("showLoading");
          })
          .catch(() => {
            this.popup = true;
            this.$store.dispatch("showLoading");
            this.$store.dispatch("saveTransactions", []);
          });
      }
    },
    ValidateDateFormat(date) {
      var RegExPattern = /^\d{2,4}\-\d{1,2}\-\d{1,2}$/;
      if (date.match(RegExPattern) && date != "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
