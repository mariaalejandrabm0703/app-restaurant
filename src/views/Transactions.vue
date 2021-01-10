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
      <TableData
        :transaction="transactions"
        :headers="headers"
        :urlDetails="viewDetails"
      ></TableData>
    </div>
  </div>
</template>

<script>
import TableData from "../components/TableData";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Transactions",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      viewDetails: "/",
      transactions: [],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          class: "blue darken-4 white--text",
        },
        { text: "Date", value: "date", class: "blue darken-4 white--text" },
        {
          text: "Buyer",
          value: "id_buyer",
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
    };
  },
  created: function () {
    // Se ejecuta cuando inicia la aplicación
    this.AddTransactions();
  },
  components: { TableData },
  methods: {
    AddTransactions() {
      Vue.axios
        .get("https://mariaalejandrabm0703.github.io/transactions/")
        .then((response) => {
          this.transactions = response.data.transactions;
        });
    },
  },
};
</script>
