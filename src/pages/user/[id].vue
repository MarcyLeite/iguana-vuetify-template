<template>
  <span>Page of: {{ id }}</span>
</template>

<script lang="ts" setup>
type Props = {
  id: string
}	

const { id } = defineProps<Props>()
</script>