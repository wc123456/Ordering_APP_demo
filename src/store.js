import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    //流程单
    state: {
        isShowOver:true,
        taskData: [
            {
                content: '任务一',
                over: false
            },
            {
                content: '任务二',
                over: false
            },
            {
                content: '任务三',
                over: false
            }
        ]

    },
    mutations: {
        //技术部
        addNewTask:function (state, newTask) {
            state.taskData.unshift(newTask);
        },
        ToggleOverTaskState: function (state, isShowOver){
            state.isShowOver = isShowOver;    
        }
    }

});
