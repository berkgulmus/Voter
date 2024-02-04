<template>
  <span v-if="isPending">pending...</span>
  <span v-else-if="isFetching">fetching...</span>
  <span v-else-if="isError">!!!ERROR!!!:{{ error }}</span>
  <span v-else >
    {{ data?.effect_entries?.[0]?.effect }}
  </span>
</template>
<script setup lang="ts">
import { generalizedGet } from '@/api/pokemon'
import { useQuery,  } from '@tanstack/vue-query'

const props = defineProps({
  abilityUrl: { type: String, default: () => {} }
})

const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['abilityDetail', props.abilityUrl],
  queryFn: () => generalizedGet(props.abilityUrl)
})

</script>
<script lang="ts"></script>
