<template>
  <div class="home pa-6">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn @click="$router.go(-1)" class="ma-2" outlined color="indigo">
      Back
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SimpleTable",
  created: function () {
    // Se ejecuta cuando inicia la aplicación
    this.products = this.$route.query.products;
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>