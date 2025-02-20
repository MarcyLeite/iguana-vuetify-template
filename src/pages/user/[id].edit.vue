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
              <v-card-title>Editing User</v-card-title>
            </div>
            
            <v-card-actions>
              <v-btn
                icon="mdi-cancel"
                color="error"
                :to="`/user/${id}`"
              />
              <v-btn
                icon="mdi-content-save-outline"
                :onclick="saveUser"
              />
            </v-card-actions>
          </div>
          <v-card-text>
            <v-text-field
              v-model="user.name"
              width="26rem"
              label="Name"
            />
            <v-text-field
              v-model="user.email"
              width="26rem"
              label="Email"
            />
            <v-textarea
              v-model="user.description"
              label="Description"
            />
          </v-card-text>
        </v-card>
        
        <v-divider />
        <v-responsive
          class="mx-auto"
          max-width="520"
        >
          <app-data-list
            :fetch-page="fetchItemList"
            :delete-data="deleteItem"
            title="Items"
            id-key="id"
            title-key="name"
            subtitle-key="price"
            path="/item"
          />
        </v-responsive>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import router from '@/router';
import { type User } from './index.vue';
type Props = {
  id: string
}

const { id } = defineProps<Props>()
const user = ref<User | null>(null)

const fetchUser = async () => {
  const mockUser = { id: Number(id), name: `User ${id}`, email: `user.me${id}@email.com`,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices eu velit non vulputate. Aliquam in massa id orci fermentum venenatis. Pellentesque luctus turpis eget mi sodales, vitae pharetra eros tristique. Nam mattis tincidunt efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus.' }
  user.value = mockUser
}

const PAGE_SIZE = 10

const saveUser = async () => {
  console.log('Saving User')
  console.log(user)
  await new Promise(r => setTimeout(r, 1000))
  router.push(`/user/${id}`)
}


const fetchItemList = async (index: number) => {
  const mockMapper = (n: number) => {
    const offset = (index - 1) * PAGE_SIZE
    const shift = n + 1 + offset
    return { id: shift, name: `Item ${shift}`, description: `Hello, I'm Item ${shift}. Nice to meet you!`, price: (shift * 20 / 33).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) } as never
  }

  return [...Array(PAGE_SIZE).keys()].map(mockMapper)
}

const deleteItem = async (item: Record<string, unknown>) => {
  console.log(`Delete Item ${item.name}`)
}

onMounted(() => { fetchUser() })

</script>