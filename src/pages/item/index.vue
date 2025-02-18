<template>
	<v-container>
	  <v-responsive
		class="align-centerfill-height mx-auto"
		max-width="520"
	  >
		<app-data-list
		  :fetch-page="fetchItemList"
		  :delete-data="deleteItem"
		  title="Items"
		  id-key="id"
		  title-key="name"
		  subtitle-key="price"
		  view-path="/item"
		  edit-path="/item/edit"
		/>
	  </v-responsive>
	</v-container>
  </template>
  
<script lang="ts" setup>
export type Item = {
  id: number
  name: string
  description: string
  price: string
}

const PAGE_SIZE = 10

const deleteItem = async (item: Item) => {
  console.log(`Deleting item ${item.name}!`)
}

const fetchItemList = async (index: number) => {
  const mockMapper = (n: number) => {
    const offset = (index - 1) * PAGE_SIZE
    const shift = n + 1 + offset
	return { id: shift, name: `Item ${shift}`, description: `Hello, I'm Item ${shift}. Nice to meet you!`, price: (shift * 20 / 33).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
  }

  return [...Array(PAGE_SIZE).keys()].map(mockMapper)
  
}

</script>