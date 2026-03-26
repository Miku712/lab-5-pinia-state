<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <h2>Список задач</h2>

    <ul>
      <li v-for="task in store.tasks" :key="task.id">
        {{ task.title }} ({{ task.done ? 'done' : 'active' }})
      </li>
    </ul>
  </div>
</template>