export default [
  {
    id: 1,
    question: '以下哪个是合法的 JavaScript 变量名？',
    options: ['1name', '_name', 'var', 'let'],
    answer: 1, // 单选题
    selected: [] 
  },
  {
    id: 2,
    question: '以下属于 Vue 特性的是？',
    options: ['响应式', '编译型', '静态语言', '虚拟 DOM'],
    answer: 0,
    selected: [] 
  },
  {
    id: 3,
    question: '以下哪些是 JS 数据类型？',
    options: ['string', 'boolean', 'object', 'float'],
    answer: [0, 1, 2], // 这个是多选题目
    selected: [],
  },
]
