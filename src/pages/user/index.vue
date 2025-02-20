<template>
  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="520"
    >
      <app-data-list
        :fetch-page="fetchUserList"
        :delete-data="deleteUser"
        title="Users"
        id-key="id"
        title-key="name"
        subtitle-key="email"
        path="/user"
      />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
export type User = {
  id: number
  name: string
  email: string
  description: string
}

const PAGE_SIZE = 10

const deleteUser = async (user: User) => {
  console.log(`Deleting user ${user.name}!`)
}

const fetchUserList = async (index: number) => {
  const mockMapper = (n: number) => {
    const offset = (index - 1) * PAGE_SIZE
    const shift = n + 1 + offset
    return { id: shift, name: `User ${shift}`, email: `user.me${shift}@email.com` } as never
  }

  return [...Array(PAGE_SIZE).keys()].map(mockMapper)
}

</script>