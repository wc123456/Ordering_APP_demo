<template>
  <footer id="footer">
    <img src="../assets/images/toulan.png" alt="">
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'hello'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
  height: 3.25rem;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer img{width: 100%;height: 100%;}
</style>
