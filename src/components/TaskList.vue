<template>
  <div id="taskList">
    <ul>
      <li :class="{lineOver:task.over}"  v-for="task in this.$store.state.taskData.filter(task=>!task.over)">
        <label for="c1">
          <span></span>
        </label>
        <input type="checkbox" name="" id="c1" v-model="task.over">{{task.content}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* taskList */
#taskList ul li input,#taskList ul li label{ display: inline-block;}
#taskList ul li input{ display: none;}
#taskList ul li label span{border: 0.1875rem solid #bababa; border-radius:50%;width:1.4rem;height:1.4rem; display: block;margin-right: 0.375rem;}
#taskList ul li{
    color:#666;
    height: 3rem;
    border-bottom:1px solid #eee;
    line-height: 3rem;
    font-size: 0.875rem;
    padding-left: 1rem;
    display:flex;
    align-items:center;
    /* font-weight: bold; */
    background: #fff;
}
.lineOver {
  text-decoration: line-through;
  color: #999;
  font-style: italic;
}
</style>
