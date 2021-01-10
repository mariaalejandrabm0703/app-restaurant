<template>
  <div class="home pa-6">
    <v-row>
      <v-col sm="4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search client"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col sm="12">
        <div>
          <TableData
            :transaction="clients"
            :headers="headersClient"
            :search="search"
            :urlDetails="viewDetails"
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
  name: "Buyers",
  components: { TableData },
  data() {
    return {
      search: "",
      viewDetails: "/buyerDetails",
      clients: [],
      headersClient: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          class: "blue darken-4 white--text",
        },
        { text: "Client", value: "name", class: "blue darken-4 white--text" },
        { text: "Age", value: "age", class: "blue darken-4 white--text" },
        {
          text: "Details",
          value: "actions",
          class: "blue darken-4 white--text",
          sortable: false,
        },
      ],
    };
  },
  created: function () {
    // Se ejecuta cuando inicia la aplicación
    this.GetClients();
  },
  methods: {
    GetClients() {
      Vue.axios
        .get("https://mariaalejandrabm0703.github.io/clients/")
        .then((response) => {
          this.clients = response.data.clients;
        });
    },
  },
};
</script>
