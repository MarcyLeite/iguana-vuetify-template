<template>
  <div class="d-flex flex-column ga-4">
    <span class="text-h5">{{ title }}</span>
    <v-card
      v-for="(data, i) in dataList"
      :key="i"
    >
      <v-card-title>{{ data[titleKey] }}</v-card-title>
      <v-card-subtitle>{{ data[subtitleKey] }}</v-card-subtitle>
      <v-card-actions>
        <div class="d-flex justify-space-between w-100">
          <div>
            <v-btn :to="`${path}/${data[idKey]}`">
              view
            </v-btn>
          </div>
          <div>
            <v-btn :to="`${path}/${data[idKey]}/edit`">
              edit
            </v-btn>
            <confirm-prompt>
              <template #activator="{props: activatorProps}">
                <v-btn
                  v-bind="activatorProps"
                  color="error"
                >
                  delete
                </v-btn>
              </template>
              <template #title>
                Delete {{ title }}
                <span class="text-warning text-uppercase font-weight-bold">
                  {{ data[titleKey] }}
                </span>
              </template>
              <template #text>
                Are you sure you want to delete {{ title }}
                <span class="text-warning font-weight-bold">
                  {{ data[titleKey] }}
                </span>?
              </template>
              <template #confirm="{close}">
                <v-btn
                  color="error"
                  @click="deleteData(data); close()"
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
</template>

<script setup lang="ts">
type DataType = never
type Props = {
  fetchPage: (page: number) => Promise<never[]>
  deleteData: (data: never) => Promise<void>
  title: string
  idKey: string
  titleKey: string
  subtitleKey: string
  path: string
}

const {
  fetchPage,
  deleteData,
  title, idKey,
  titleKey,
  subtitleKey,
  path 
} = defineProps<Props>()
const dataList = ref<DataType[] | null>(null)

const pageIndex = ref(1)

const fetchDataList = async () => {
  dataList.value = await fetchPage(pageIndex.value)
}

onMounted(() => {
  fetchDataList()
})

watch(pageIndex, () => {
  fetchDataList()
})
</script>
