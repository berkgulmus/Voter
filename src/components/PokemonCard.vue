<template>
  <div v-if="isPending">data pending</div>
  <div v-else>
    <div :class="stylex(styles.wrapper)">
      <div :class="stylex(styles.pokemonName)">{{ data?.species?.name }}</div>
      <div v-if="data?.abilities?.length > 0" :class="stylex(styles.abilitiesWrapper)">
        <span :class="stylex(styles.abilityTitle)">Abilities:</span>
        <AbilityChip
          v-for="ability in data.abilities"
          :key="ability?.ability?.url"
          :ability="ability?.ability"
        />
      </div>
    </div>
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
  wrapper: { display: 'flex', flexDirection: 'column', maxWidth: '25rem' },
  pokemonName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#12372A',
    textTransform: 'uppercase'
  },
  abilitiesWrapper: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  abilityTitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    fontSize: '1.1rem',
    color: '#12372A'
  }
})
</script>
