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
              <v-card-title>Editing item</v-card-title>
            </div>
            
            <v-card-actions>
              <v-btn
                icon="mdi-cancel"
                color="error"
                :to="`/item/${id}`"
              />
              <v-btn
                icon="mdi-content-save-outline"
                :onclick="saveItem"
              />
            </v-card-actions>
          </div>
          <v-card-text>
            <v-text-field
              v-model="item.name"
              width="26rem"
              label="Name"
            />
            <v-text-field
              v-model="item.price"
              width="26rem"
              label="Email"
            />
            <v-textarea
              v-model="item.description"
              label="Description"
            />
          </v-card-text>
        </v-card>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import router from '@/router';
import { type Item } from './index.vue';

type Props = {
  id: string
}

const { id } = defineProps<Props>()
const item = ref<Item | null>(null)

const saveItem = async () => {
  console.log('Saving Item')
  console.log(item)
  await new Promise(r => setTimeout(r, 1000))
  router.push(`/item/${id}`)
}

const fetchItem = async () => {
  const mockItem = {
    id: Number(id),
    name: `Item ${id}`,
    description: `Hello, I'm Item ${id}. Nice to meet you!`,
    price: (Number(id) * 20 / 33).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
  }
  
  item.value = mockItem
}

onMounted(() => { fetchItem() })

</script>