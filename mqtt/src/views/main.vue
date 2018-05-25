<template>
  <div class="home">
    <!-- <h1></h1>
    <input type="text" v-model="searchInputValue">
    <HelloWorld></HelloWorld>
    <router-view/> -->
    <div class="app" tabindex="1" ref="app"
      @keyup.right.space="impressNextStep"
      @keyup.left="impressPrevStep">
      <impress-viewport ref="impress"
        :steps="steps" :config="config"></impress-viewport>
    </div>

  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      msg: '首页',
      searchInputValue: '',
      steps: [],
      config: {
        width: 800,
        height: 800,
      },
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
    },
    impressPrevStep() {
      this.$refs.impress.prevStep()
    },
    impressNextStep() {
      this.$refs.impress.nextStep()
    },
  },
  mounted() {
    this.$refs.app.focus()

    const size = 12
    const radius = 500
    const degreeStep = 360 / size
    for (let i = 0; i < size; i += 1) {
      // const rotateX = i * 10
      // const xRadius = (rotateX * Math.PI) / 180
      // const rotateZ = (Math.random() * 720) - 360
      // const zRadius = (rotateZ * Math.PI) / 180
      // const zRadius = (90 * Math.PI) / 180
      // console.log(Math.sin(zRadius))
      const degree = (degreeStep * i * Math.PI) / 180
      this.steps.push({
        // x: Math.cos(xRadius) * (Math.sin(zRadius) * radius),
        // y: Math.sin(xRadius) * (Math.sin(zRadius) * radius),
        // z: Math.cos(zRadius) * radius,
        // rotateY: rotateZ,
        // rotateX: 90 - rotateX,
        x: Math.cos(degree) * radius,
        y: 0,
        z: Math.sin(degree) * radius,
        rotateY: 90 - (degreeStep * i),
        content: 'center'
      })
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
