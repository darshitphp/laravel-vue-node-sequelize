<template>
  <div>
    <Nav />
    <slot name="middleContent"></slot>
    <Footer2 />
  </div>
</template>

<script>
import Nav from "./Layout/Admin/Nav.vue";
import Footer2 from "./Layout/Admin/Footer2.vue";

export default {
  components: {
    Nav,
    Footer2
  }
};
</script>