<template>
    <h1>欢迎来到这个做题系统</h1>
    <button @click="toAnswer">开始吧~</button>
</template>

<script setup>
import router from '@/router';


const toAnswer = () => {
    router.push("/texting")
}
</script>

<style>

</style>