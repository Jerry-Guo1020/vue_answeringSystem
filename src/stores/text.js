import { defineStore } from 'pinia'
import questions from './questions'

export const texting = defineStore('text', {
  state: () => ({
    questions: JSON.parse(JSON.stringify(questions)),
    isSubmited: false,
  }),

  actions: {
    // 这个函数的作用： 弄多选题的选中与取消选中
    // qINdex 指得是当前是第几题；
    // oIndex 指得是用户点击的哪一个的选项(通过索引来进行寻找的方式)
    selectOption(qINdex, oIndex) {
      const selected = this.questions[qINdex].selected // 拿到当前的题目的 selected数组 表示当前用户选了哪一些选项

      // 通过 if 语句 来进行判断是否选中，如果取消勾选的话，那么要将勾选的选项 移除当前题目的 selected 数组
      if (selected.includes(oIndex)) {
        this.questions[qINdex].selected = selected.filter((i) => i !== oIndex)
      } else {
        selected.push(oIndex)
      }
    },

    // 提交的功能，将选好的选项的内容进行提交，锁定选项
    submitQuiz() {
      this.isSubmited = true
    },


    // 重置答题状态，用于用户点击“重新答题”
    resetQuiz() {
      this.questions = JSON.parse(JSON.stringify(questions))
      this.isSubmited = false
    },
  },
})
