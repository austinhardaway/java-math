<template>
    <div class="tab-row">
            <td>{{problem.expr}}</td>
            <td>{{problem.type}}</td>
            <td>{{problem.val}}</td>
            <td><button>Reveal</button></td>
    
    </div>
</template>
<script>
export default {
  name: "row",
  props: ["problem"]
};
</script>
<style scoped>
</style>
