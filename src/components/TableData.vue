<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transaction"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props: { transaction: Array, headers: Array },
  data: () => ({}),
};
</script>