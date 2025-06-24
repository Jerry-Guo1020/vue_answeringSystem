import { defineStore } from "pinia";
import questions from "./questions";

export const texting = defineStore('text', {
    state: () => ({
        questions:JSON.parse(JSON.stringify(questions)),
        isSubmited: false
    }),

    actions: {

        // 这个函数的作用： 弄多选题的选中与取消选中
        // qINdex 指得是当前是第几题； 
        // oIndex 指得是用户点击的哪一个的选项(通过索引来进行寻找的方式)
        
        selectOption(qINdex, oIndex) {
            const selected = this.questions[qINdex].selected
            if(selected.includes(oIndex)) {
                this.questions[qINdex].selected = 
            }
        }
    }
})