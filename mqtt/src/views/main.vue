<template>
  <div class="home">
    <h1></h1>
    <input type="text" v-model="searchInputValue">
    <HelloWorld></HelloWorld>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '首页',
      searchInputValue: ''
    }
  },
  methods: {
    fetchPostList() {
      console.log(111)
    }
  },
  watch: {
    searchInputValue: {
      // 马上执行watch
      handler: 'fetchPostList',
      immediate: true
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
