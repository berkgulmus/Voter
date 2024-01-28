<template>
  <div :class="stylex(styles.root)">stylex</div>
  <Button>Click me</Button>
  <RouterView />
</template>
<script setup lang="ts">
import stylex from '@stylexjs/stylex'
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<script lang="ts">
const styles = stylex.create({
  root: {
    borderRadius: 8,
    padding: 16,
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)'
  }
})
</script>
