<template>
  <div class="about">
    <h1>{{counter}}</h1>
    <button @click="increment()">Increment</button>
    <hello-world :title="counter" @decrease="ABCD"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components:{
    HelloWorld
  },

  data(){
    return{
      counter: 0

    }
  },
  methods:{
    increment(){
    console.log("ABCD")
    this.counter=this.counter+1
    },
    decrease(){
      console.log('decrease')
      this.counter--
    }
  }
}
</script>
