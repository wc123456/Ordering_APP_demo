<template>
  <div id="taskOverList" v-if="this.$store.state.isShowOver">
      <ul>
      <li :class="{lineOver:task.over}" v-for="task in this.$store.state.taskData.filter(task=>task.over)">
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
  name: 'ToggleOverTask',
  data() {
    return {
      msg: '这是我们的实际项目'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* taskOverList */
#taskOverList{
    margin-top: 0.625rem;
}
#taskList ul li,#taskOverList ul li{
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
#taskOverList ul li input,#taskList ul li label{ display: inline-block;}
#taskOverList ul li input{ display: none;}
#taskOverList ul li label span{
    background-image:url(../assets/images/taskOver.png);
    background-position: center;
    background-size: cover; 
    border-radius:50%;width:1.4rem;height:1.4rem; 
    display: block;margin-right: 0.375rem;border: 0.1875rem solid #bababa;
}
.lineOver {
  text-decoration: line-through;
  color: #999;
  font-style: italic;
}
</style>
