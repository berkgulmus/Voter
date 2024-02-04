<template>
  <span
    ref="reference"
    :class="stylex(styles.chipRoot)"
    @pointerenter="showTooltip = true"
    @pointerout="showTooltip = false"
    @click="invalidateQuery"
    >{{ props.ability.name }}</span
  >
  <span v-if="showTooltip" ref="floating" :style="floatingStyles">
    <AbilityDetail :ability-url="ability?.url" />
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { autoPlacement, useFloating } from '@floating-ui/vue'
import stylex from '@stylexjs/stylex'
import { useQueryClient } from '@tanstack/vue-query'
import AbilityDetail from './AbilityDetail.vue'

const props = defineProps({
  ability: { type: Object, default: () => {} }
})

const reference = ref(null)
const floating = ref(null)
const showTooltip = ref(false)
const { floatingStyles } = useFloating(reference, floating, {
  middleware: [autoPlacement()]
})

// Get QueryClient from the context
const queryClient = useQueryClient()

const invalidateQuery = () => {
  console.log('wil invalidate ', props.ability.url)
  queryClient.invalidateQueries({ queryKey: ['abilityDetail', props.ability.url] })
}
</script>

<script lang="ts">
const styles = stylex.create({
  chipRoot: {
    padding: '0.3rem',
    border: '0.15rem solid #ADBC9F',
    borderRadius: '1rem',
    color: '#12372A',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8rem',
    textTransform: 'capitalize'
  }
})
</script>
