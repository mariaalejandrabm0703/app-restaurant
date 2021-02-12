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
          <DataTable
            :datas="buyers"
            :headers="headersBuyers"
            :search="search"
            :urlDetails="viewDetails"
          ></DataTable>
        </div>
      </v-col>
    </v-row>
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
  name: "Buyers",

  components: { DataTable },
  data() {
    return {
      popup: false,
      search: "",
      viewDetails: "/buyer",
      buyers: [],
      headersBuyers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "buyer_id",
          class: "blue darken-4 white--text",
        },
        {
          text: "Client",
          value: "buyer_name",
          class: "blue darken-4 white--text",
        },
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
    this.GetBuyers();
  },
  methods: {
    GetBuyers() {
      var buyerss = this.$store.state.buyers;
      if (buyerss.length > 0) {
        this.buyers = buyerss;
      } else {
        this.AddBuyers();
      }
    },
    AddBuyers() {
      this.$store.dispatch("showLoading");
      Vue.axios
        .get("https://mariaalejandrabm0703.github.io/clients/")
        .then((response) => {
          console.log(response);
          this.$store.dispatch("showLoading");
          this.buyers = response.data.buyers;
          this.$store.dispatch("saveBuyers", this.buyers);
        })
        .catch(() => {
          this.popup = true;
          this.$store.dispatch("showLoading");
          this.$store.dispatch("saveBuyers", []);
        });
    },
  },
};
</script>
