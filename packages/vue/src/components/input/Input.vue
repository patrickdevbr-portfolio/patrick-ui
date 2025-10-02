<script setup lang="ts">
import { computed } from 'vue'
import * as styles from '@patrick-ui/core/field/field.css'

const className = computed(() => styles.input())
</script>

<template>
    <input :class="className" />
</template>