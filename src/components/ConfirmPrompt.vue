<template>
  <v-dialog
    width="auto"
  >
    <template #activator="{props}">
      <slot
        name="activator"
        :props="props"
      />
    </template>
    <template #default="{ isActive }">
      <v-card max-width="400">
        <v-card-title>
          <slot name="title" />
        </v-card-title>
        <v-card-text>
          <slot name="text" />
        </v-card-text>
  
        <v-card-actions>
          <v-btn @click="isActive.value = false">
            Cancel
          </v-btn>
          <slot
            name="confirm"
            :close="() => isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
</script>