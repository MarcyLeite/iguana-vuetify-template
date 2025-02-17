<template>  
  <v-container v-if="user">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="780"
    >
      <div class="d-flex flex-column ga-4">
        <v-card>
          <div class="d-flex justify-space-between">
            <div class="d-flex flex-column">
              <v-card-title>{{ user.name }}</v-card-title>
              <v-card-subtitle>{{ user.email }}</v-card-subtitle>
            </div>
            
            <v-card-actions>
              <v-btn icon="mdi-pencil"/>
            </v-card-actions>
          </div>
            <v-card-text>
              <div class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices eu velit non vulputate. Aliquam in massa id orci fermentum venenatis. Pellentesque luctus turpis eget mi sodales, vitae pharetra eros tristique. Nam mattis tincidunt efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </div>
            </v-card-text>
          
        </v-card>
        
        <v-divider />
        <v-responsive class="mx-auto" max-width="520">
          <app-data-list
            :fetch-page="fetchItemList"
            :delete-data="deleteItem"
            title="Items"
            id-key="id"
            title-key="name"
            subtitle-key="price"
            view-path="/user"
            edit-path="/user/edit"
          />
        </v-responsive>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { type User } from './index.vue';
type Props = {
  id: string
}

const { id } = defineProps<Props>()
const user = ref<User | null>(null)

const fetchUser = async () => {
  const mockUser = {id: Number(id), name: `User ${id}`, email: `user.me${id}@email.com`}
  user.value = mockUser
}

const PAGE_SIZE = 10

const fetchItemList = async (index: number) => {
  const mockMapper = (n: number) => {
    const offset = (index - 1) * PAGE_SIZE
    const shift = n + 1 + offset
    return { id: shift, name: `Item ${shift}`, description: `Hello, I'm Item ${shift}. Nice to meet you!`, price: `R$${shift % 4},${(shift % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}` }
  }

  return [...Array(PAGE_SIZE).keys()].map(mockMapper)
}

const deleteItem = async (item: Record<string, any>) => {
  console.log(`Delete Item ${item.name}`)
}

onMounted(() => { fetchUser() })

</script>