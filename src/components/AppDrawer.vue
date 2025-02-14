<template>
	<v-navigation-drawer
	  v-model="drawer"
	  temporary
	>

	<v-list-item title="Iguana Frontend Template" subtitle="Using Vuetify"></v-list-item>
  	<v-divider></v-divider>
	<v-list-item to="/user">Users</v-list-item>
	</v-navigation-drawer>
  </template>
  
  <script lang="ts" setup>
  const drawer = ref(false)
  </script>
  