<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
const title = ref('')

function addTask() {
  if (title.value.trim() !== '') {
    store.addTask(title.value)
    title.value = ''
  }
}
</script>

<template>
  <div>
    <input v-model="title" placeholder="Введіть задачу" />
    <button @click="addTask">Додати</button>
  </div>
</template>