<script setup lang="ts">
import * as styles from "@patrick-ui/core/button/button.css";
import { computed } from 'vue';

interface ButtonProps {
    variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost"
}

const props = defineProps<ButtonProps>()
const className = computed(() => styles.button({ variant: props.variant }))
</script>

<template>
    <button :class="className">
        <slot></slot>
    </button>
</template>
