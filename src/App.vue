<template>
  <main id="app">
    <Header />
    <Nav />
    <router-view/>
    <Footer />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Nav,
    Home,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: url('assets/main-bg.jpg');
  background-size: cover no-repeat;
  width: 100%;
  height: 100%;
}
body::after {
  content: "";
  background: rgba(0, 0, 0, .6);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
