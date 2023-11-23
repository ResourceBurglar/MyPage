<script setup>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {ref} from 'vue'
import {insertContentAPI} from '@/api/Edit_Content'

const oninput = (value) => {
   text.value = value
}
const text = ref('')
const InsertContent = async () => {
    const result = await insertContentAPI({
        content:text.value,
        type:1
    })
    console.log(result);
}

</script>
<template>
    <button @click="InsertContent">提交</button>
    <MdEditor v-model="text" @onChange="oninput"></MdEditor>
</template>
