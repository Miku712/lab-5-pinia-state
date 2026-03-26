<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <h3>Статистика</h3>

    <p>Всього: {{ store.totalCount }}</p>
    <p>Виконано: {{ store.doneCount }}</p>
    <p>Активні: {{ store.activeCount }}</p>

    <button @click="store.filter = 'all'">Всі</button>
    <button @click="store.filter = 'active'">Активні</button>
    <button @click="store.filter = 'done'">Виконані</button>
  </div>
</template>