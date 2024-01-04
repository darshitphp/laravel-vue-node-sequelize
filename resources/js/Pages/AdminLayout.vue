<template>

    <Nav />
    <SideNav />
    <main class="content page-main-wrapper">
      <TopBar />
<!--      <Footer />-->
      <!-- Middle page content -->
      <slot name="middleContent"></slot>
      <Footer2 />
    </main>

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