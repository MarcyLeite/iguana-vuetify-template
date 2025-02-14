<template>
  <v-dialog
    v-model:model-value="enabled"
    activator="parent"
    width="auto"
  >
    <template #activator>
      <slot name="activator" />
    </template>
    <v-card max-width="400">
      <v-card-title>
        <slot name="title" />
      </v-card-title>
      <v-card-text>
        <slot name="text" />
      </v-card-text>

      <v-card-actions>
        <v-btn @click="enabled = false">
          Cancel
        </v-btn>
        <slot
          name="confirm"
          :close="close"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>

type Props = {
  enabled?: boolean
}

const { enabled: parentEnabled } = defineProps<Props>()
const enabled = ref(parentEnabled)

const close = () => {
  enabled.value = false
}
</script>