<script setup lang="ts">
import * as styles from "@patrick-ui/core/theme/default.css";
</script>

<template>
    <div :class="styles.defaultTheme">
        <slot></slot>
    </div>
</template>
