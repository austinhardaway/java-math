<template>
  <div id="app">
    <h1>Java Math Review</h1>
    <pre><code>
      int i = {{int}};
      byte b = {{byte}};
      float f = {{float}}F;
      double d = {{double}};
      char c = '{{char}}'
    </code></pre>
    <table class="table">
      <thead>
        <th>Expression</th>
        <th>Type</th>
        <th>Val</th>
        <th>Check</th>
      </thead>
      <tr v-for="problem in problems" :key="problem.val" :class="problem.style">
        <td>{{problem.expr}} </td>
        <td><input v-model="problem.typeIn" type="text"></td>
        <td><input v-model="problem.valIn" type="text"></td>
        <td><button @click="check(problem)" class="btn-primary">Check</button></td>
      <tr/>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    check({ type, val, typeIn, valIn, style }) {
      if (type == typeIn && Math.abs(valIn - val) < 0.02) {
        style.push("green");
        this.$forceUpdate();
      }
    }
  },
  computed: {
    byte: function() {
      return Math.floor(Math.random() * 127);
    },
    int: function() {
      return Math.floor(Math.random() * 300);
    },
    float: function() {
      return Math.floor(Math.random() * 300 * 100 / 1) / 100;
    },
    double: function() {
      return Math.floor(Math.random() * 500 * 100 / 1) / 100;
    },
    char: function() {
      return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    },

    problems: function() {
      return [
        {
          expr: "(i*d)/i",
          type: "double",
          val: Math.floor(this.int * this.double / this.int * 100 / 1) / 100,
          style: []
        },
        {
          expr: "i/(2*i)",
          type: "int",
          val: Math.floor(
            Math.floor(this.int / (2 * this.int) * 100 / 1) / 100
          ),
          style: []
        },
        {
          expr: "i*c",
          type: "int",
          val: Math.floor(
            Math.floor(this.int * this.char.charCodeAt(0) * 100 / 1) / 100
          ),
          style: []
        },
        {
          expr: "b+b",
          type: "int",
          val: this.byte + this.byte,
          style: []
        },
        {
          expr: "i + c + i + d",
          type: "double",
          val:
            Math.floor(
              (2 * this.int + this.char.charCodeAt(0) + this.double) * 100 / 1
            ) / 100,
          style: []
        },
        {
          expr: " 3 / b",
          type: "int",
          val: Math.floor(3 / this.byte),
          style: []
        },
        {
          expr: "((int)(d*100))/100.0",
          type: "double",
          val: Math.floor(this.double * 100) / 100.0,
          style: []
        }
      ];
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Mono");
#app {
  font-family: "Fira Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

h1 {
  text-align: center;
  padding-top: 30px;
}

.green {
  background: green;
  color: whitesmoke;
}
</style>
