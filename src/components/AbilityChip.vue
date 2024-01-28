<template>
  <span :class="stylex(styles.chipRoot)">{{ props.ability.name }}</span>
</template>
<script setup lang="ts">
import stylex from '@stylexjs/stylex'
const props = defineProps({
  ability: { type: Object, default: () => {} }
})
</script>
<script lang="ts">
const styles = stylex.create({
  chipRoot: {
    padding: '0.25rem'
  }
})
</script>
