<template>
  <div v-if="isPending">data pending</div>
  <div v-if="data?.abilities?.length > 0" :class="stylex(styles.abilitiesWrapper)">
    <span>Abilities:</span>
    <AbilityChip v-for="ability in data.abilities" :key="ability.url" :ability="ability.ability" />
  </div>
</template>
<script setup lang="ts">
import { getPokemon } from '@/api/pokemon'
import { useQuery } from '@tanstack/vue-query'
import AbilityChip from '@/components/AbilityChip.vue'
import stylex from '@stylexjs/stylex'

const props = defineProps({
  pokemonName: {
    type: String,
    default: () => ''
  }
})
const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['pokemon', props.pokemonName],
  queryFn: () => getPokemon(props.pokemonName)
})
</script>

<script lang="ts">
const styles = stylex.create({
  abilitiesWrapper: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid red',
    gap: '0.25rem',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)'
  }
})
</script>
