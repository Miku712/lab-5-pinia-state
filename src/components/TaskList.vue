<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <ul>
    <li v-for="task in store.tasks" :key="task.id">
      <span @click="store.toggleTask(task.id)">
        {{ task.title }} - {{ task.done ? '✔' : '❌' }}
      </span>

      <button @click="store.removeTask(task.id)">
        Видалити
      </button>
    </li>
  </ul>
</template>