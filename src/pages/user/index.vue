<template>
  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="520"
    >
      <div class="d-flex flex-column ga-4">
        <h1>Users</h1>
        <v-card
          v-for="user in userList"
          :key="user.email"
        >
          <v-card-title>{{ user.name }}</v-card-title>
          <v-card-subtitle>{{ user.email }}</v-card-subtitle>
          <v-card-actions>
            <div class="d-flex justify-space-between w-100">
              <v-btn :to="`/user/${user.id}`">
                view
              </v-btn>
              <div>
                <v-btn :to="`/user/edit/${user.id}`">
                  edit
                </v-btn>
                <confirm-prompt>
                  <template #activator>
                    <v-btn color="error">
                      delete
                    </v-btn>
                  </template>
                  <template #title>
                    Delete user <span class="text-warning text-uppercase font-weight-bold"> {{ user.name }}</span>
                  </template>
                  <template #text>
                    Are you sure you want to delete user <span class="text-warning font-weight-bold"> {{ user.name }}</span>?
                  </template>
                  <template #confirm="{close}">
                    <v-btn
                      color="error"
                      @click="deleteUser(user); close()"
                    >
                      Delete
                    </v-btn>
                  </template>
                </confirm-prompt>
              </div>
            </div>
          </v-card-actions>
        </v-card>
        <v-pagination
          v-model="pageIndex"
          class="px-2"
          length="20"
        />
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
type User = {
  id: number
  name: string
  email: string
}

const PAGE_SIZE = 10

const userList = ref<User[] | null>(null)
const pageIndex = ref(1)

const deleteUser = async (user: User) => {
  console.log(`Deleting user ${user.name}!`)
}

const fetchUserList = async () => {
  const mockMapper = (n: number) => {
    const offset = (pageIndex.value - 1) * PAGE_SIZE
    const shift = n + 1 + offset
    return {id: shift, name: `User ${shift}`, email: `user.me${shift}@email.com`}
  } 
  userList.value = [...Array(PAGE_SIZE).keys()].map(mockMapper)
}

watch(pageIndex, () => {
  fetchUserList()
})


fetchUserList()
</script>