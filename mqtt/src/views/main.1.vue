<template>
  <div class="home">
    <!-- <h1></h1>
    <input type="text" v-model="searchInputValue">
    <HelloWorld></HelloWorld>
    <router-view/> -->
    <div class="reveal">
			<div class="slides">
				<section>Slide 1</section>
				<section>
          <!-- <section>{{ 'Vertical Slide 1' | date('...') }}</section> -->
			    <section>Vertical Slide 2</section>
          <section>Vertical Slide 3</section>
          <!-- <page-item></page-item> -->
        </section>
        <section>
          4
        </section>
			</div>
		</div>

  </div>
</template>

<script>
import reveal from 'reveal.js'

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
  },
  mounted() {
    console.log(3333);
    console.log(reveal);
    reveal.initialize();

    // reveal.initialize({
    // })
    reveal.slide(0, 2)

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
