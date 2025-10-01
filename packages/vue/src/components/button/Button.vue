<script setup lang="ts">
import * as styles from "@patrick-ui/core/button/button.css";
import { computed, defineProps } from 'vue';

interface ButtonProps {
    primary?: boolean
}

const props = defineProps<ButtonProps>()
const className = computed(() => styles.button({ primary: props.primary }))
</script>

<template>
    <button :class="className">
        <slot></slot>
    </button>
</template>
