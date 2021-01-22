<template>
  <div class="spin" v-if="start">
    <div class="ring">
      <div class="lds-dual-ring"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: ["start"],
};
</script>

<style scoped>
.spin {
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
}
.ring {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  height: 100%;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #21618c;
  border-color: #21618c transparent #21618c transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>