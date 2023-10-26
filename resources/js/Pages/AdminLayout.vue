<template>
  <div>
    <Nav />
    <SideNav />
    <main class="content">
      <TopBar />
<!--      <Footer />-->
      <!-- Middle page content -->
      <slot name="middleContent"></slot>
    </main>
    <Footer2 />
  </div>
</template>

<script>
import Nav from "./Layout/Admin/Nav.vue";
import SideNav from "./Layout/Admin/SideNav.vue";
import TopBar from "./Layout/Admin/TopBar.vue";
import Footer from "./Layout/Admin/Footer.vue";
import Footer2 from "./Layout/Admin/Footer2.vue";

export default {
  components: {
    Nav,
    SideNav,
    TopBar,
    Footer,
    Footer2
  }
};
</script>