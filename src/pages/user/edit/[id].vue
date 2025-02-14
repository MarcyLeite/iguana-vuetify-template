<template>
  <span>Editing: {{ id }}</span>
</template>
<script setup lang="ts">
type Props = {
  id: string
}	

const { id } = defineProps<Props>()
</script>