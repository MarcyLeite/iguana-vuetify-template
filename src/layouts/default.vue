<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  />
  <v-app-bar>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-app-bar-title>Iguana Frontend - Vuetify</v-app-bar-title>
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
const drawer = ref(false)
</script>
