<template>
<div class="jxl-button">
    jxlust的按钮组件 --- {{text}}
    数字: {{number}}
</div>
</template>

<script lang="ts">
import {
    onMounted,
    ref,
    defineComponent
} from 'vue'
export default defineComponent({
    name: 'MyButton',
    props: {
        text: {
            type: String,
            default: '按钮'
        }
    },
    setup(props) {
        const number = ref(100);
        return {
            number
        }
    }
})
</script>

<style lang="scss">
    
</style>
