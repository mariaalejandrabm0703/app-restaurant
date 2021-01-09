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
        <v-btn style="width: 100%" @click="AddTransactions" elevation="2"
          >Search</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <div>
      <TableData :transaction="trans" :headers="headers"></TableData>
    </div>
  </div>
</template>

<script>
import TableData from "../components/TableData";

export default {
  name: "Transactions",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      trans: [],
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
          value: "products",
          class: "blue darken-4 white--text",
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
      console.log(this.date);
      //consultp url de Go
      // obtengo un JSON y convertirlo en {}
      let transactions = [
        {
          id: Math.random(),
          date: "01/01/2020",
          id_buyer: "c01bcc96",
          ip: "000000000",
          device: "Android",
          products: ["Pastas", "Pescado", "Carne"],
        },
      ];
      this.trans = transactions;
    },
  },
};
</script>
