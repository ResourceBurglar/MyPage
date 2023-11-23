<script setup>
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import {getContentAPI} from '@/api/Preview_Content'
import {ref} from 'vue';

const text = ref([])

const getContent = async () => {
        const result = await getContentAPI()
        text.value = result.data.data
}
getContent()

const scrollElement = document.documentElement;
const id = 'preview-only';
</script>
<template>

    <MdPreview 
    v-for="item in text" :key="item.id"
    :editorId="`${id + item.id}`"
    :modelValue="item.content" />
    <ul>
        <li v-for="item in text" :key="item.id">
            <MdCatalog :scrollElement="scrollElement" :editorId="`${id + item.id}`" />
        </li>
    </ul>

    
 
 
</template>
