<template>
  <div class="home pa-6">
    <v-row>
      <v-col sm="10">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
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
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            format="Do MMMM YYYY"
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col sm="2">
        <v-btn
          @click="AddTransactions"
          @kyup.enter="AddTransactions"
          elevation="2"
          >Search</v-btn
        >
      </v-col>
    </v-row>
    <div>
      <v-data-table
        :headers="headers"
        :items="transactions"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
let transacs;

export default {
  name: "Transactions",
  methods: {
    AddTransactions: function () {
      let trans = {
        id: "00005fff4fd80",
        date: this.date,
        id_buyer: "c01bcc96",
        ip: "000000000",
        device: "Android",
        products: ["Pastas", "Pescado", "Carne"],
      };
      this.transactions.push(trans);
      console.log(this.transactions);
    },
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
        class: "blue darken-4 white--text",
      },
      { text: "Date", value: "date", class: "blue darken-4 white--text" },
      { text: "Buyer", value: "id_buyer", class: "blue darken-4 white--text" },
      { text: "IP", value: "ip", class: "blue darken-4 white--text" },
      { text: "Device", value: "device", class: "blue darken-4 white--text" },
      {
        text: "Products",
        value: "products",
        class: "blue darken-4 white--text",
      },
    ],
    transactions: [
      {
        id: "00005fffd4fd80",
        date: "01/02/2020",
        id_buyer: "c01bcc96",
        ip: "157.238.134.60",
        device: "ios",
        products: [
          "Original Deli Style Tuna Salad",
          "Progresso Vegetable Classics Lentil Soup",
          "Mac N Cheese Dinner",
        ],
      },
      {
        id: "00005ff4fdsd81",
        date: "01/03/2020",
        id_buyer: "c01bcc96",
        ip: "157.238.130.60",
        device: "ios",
        products: [
          "Original Deli Style Tuna Salad",
          "Progresso Vegetable Classics Lentil Soup",
          "Mac N Cheese Dinner",
        ],
      },
      {
        id: "00005ff4fhfd82",
        date: "01/04/2020",
        id_buyer: "c01bcc96",
        ip: "157.238.134.60",
        device: "windows",
        products: [
          "Original Deli Style Tuna Salad",
          "Progresso Vegetable Classics Lentil Soup",
          "Mac N Cheese Dinner",
        ],
      },
      {
        id: "00005ff4fdsfd82",
        date: "01/05/2020",
        id_buyer: "c01bcc96",
        ip: "157.238.534.60",
        device: "windows",
        products: [
          "Original Deli Style Tuna Salad",
          "Progresso Vegetable Classics Lentil Soup",
          "Mac N Cheese Dinner",
        ],
      },
      {
        id: "00005ff4fjhgd82",
        date: "01/06/2020",
        id_buyer: "c01bcc96",
        ip: "157.138.134.60",
        device: "windows",
        products: [
          "Original Deli Style Tuna Salad",
          "Progresso Vegetable Classics Lentil Soup",
          "Mac N Cheese Dinner",
        ],
      },
      {
        id: "00005ff4fdsd82",
        id_buyer: "c01bcc96",
        ip: "157.238.134.60",
        device: "windows",
        products: [
          "Original Deli Style Tuna Salad",
          "Progresso Vegetable Classics Lentil Soup",
          "Mac N Cheese Dinner",
        ],
      },
    ],
  }),
};
</script>
