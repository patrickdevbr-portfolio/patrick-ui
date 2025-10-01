<script setup lang="ts">
import * as styles from "@patrick-ui/core/button/button.css";
import { defineProps, ref } from 'vue';

interface ButtonProps {
    primary?: boolean
}

const props = defineProps<ButtonProps>()
const className = ref(styles.button({ primary: props.primary }))

</script>

<template>
    <button :class="className">
        <slot></slot>
    </button>
</template>
