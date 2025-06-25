<template>
    <div class="quiz">
        <h1>这个是一个小测验</h1>

        <div v-for="(q, i) in store.questions" :key="q.id" class="quesitons">
            <p>{{ i + 1 }}.{{ q.question }}</p>

            <div v-for="(obj, j) in q.options" :key="j">
                <label>
                    <input type="checkbox" :name="'q' + i" :checked="q.selected.includes(j)"
                        :disabled="store.isSubmitted" @change="store.selectOption(i, j)" />
                    {{ obj }}
                </label>
            </div>

            <div v-if="store.isSubmitted">
                <p :style="{ color: isCorrect(q) ? 'green' : 'red' }">
                    {{ isCorrect(q) ? '正确' : '错误' }}
                </p>
            </div>

            <div class="actions">
                <button v-if="!isSubmitted" @click="store.submitQuiz()">提交</button>
                <button v-else @click="store.resetQuiz()">重做</button>
            </div>

            <div v-if="store.submitQuiz">
                <p>得分：{{ score }} / {{ store.questions.length }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
// 这里涉及到一个知识点区别分析： ref 跟 computed 有什么区别呢
// 1、 ref 他是适合存储简单的响应式值，可以用于直接操作 .value
// 2、computed 他是适合基于其他的响应式数据派生新的值，具有缓存机制，可以避免重复计算

import { texting } from '@/stores/text';
import { computed } from 'vue';


const store = texting()


const isCorrect = (q) => {
    const selected = Array.isArray(q.selected) ? [...q.selected].sort() : [q.selected]
    const answer = Array.isArray(q.answer) ? [...q.answer].sort() : [q.answer]
    return JSON.stringify(selected) === JSON.stringify(answer)  
}

// 这个函数的意思是：我通过判断这个题目是否有做对；如果有做对的话，那么我就会筛选有符合的元素，然后放入一个新的数组
// 这个filter的意思是：筛选符合条件的元素，然后就返回到一个新的数组
const score = computed(() => {

    return store.questions.filter(isCorrect).length
})

</script>

<style scoped>
.quiz {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.question {
  background: #fff;
  padding: 1rem 1.2rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.question p {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

label:hover {
  background-color: #eef2f7;
}

input[type="radio"],
input[type="checkbox"] {
  transform: scale(1.2);
  accent-color: #007bff;
}

.result {
  font-weight: bold;
  margin-top: 0.5rem;
}

.result.correct {
  color: green;
}

.result.incorrect {
  color: red;
}

.actions {
  text-align: center;
  margin-top: 2rem;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin: 0 0.5rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.score {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #28a745;
  margin-top: 1rem;
}
</style>