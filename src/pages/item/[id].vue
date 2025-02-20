<template>  
  <v-container v-if="item">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="780"
    >
      <div class="d-flex flex-column ga-4">
        <v-card>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column">
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-subtitle>{{ item.price }}</v-card-subtitle>
            </div>
			  
            <v-card-actions>
              <v-btn
                icon="mdi-pencil"
                :to="`/item/${id}/edit`"
              />
            </v-card-actions>
          </div>
          <v-card-text>
            <div class="text-justify">
              {{ item.description }}
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-responsive>
  </v-container>
</template>
  
<script lang="ts" setup>
import type { Item } from './index.vue';

type Props = {
  id: string
}

const { id } = defineProps<Props>()
const item = ref<Item | null>(null)


const fetchItem = async () => {
  const mockItem = { 
    id: Number(id), 
    name: `Item ${id}`,
    description: `Hello, I'm Item ${id}. Nice to meet you!`, 
    price: (Number(id) * 20 / 33)
      .toLocaleString('en-US', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      })
  }
  item.value = mockItem
}

onMounted(() => { fetchItem() })
</script>