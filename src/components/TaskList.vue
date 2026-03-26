<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div class="item-list">
    <h2>Список задач</h2>

    <div
      v-for="task in store.filteredTasks"
      :key="task.id"
      class="item-row"
    >
      <span
        :class="{ done: task.done }"
        @click="store.toggleTask(task.id)"
      >
        {{ task.title }}
      </span>

      <div>
        <button @click="store.toggleTask(task.id)">
          ✔
        </button>

        <button class="delete" @click="store.removeTask(task.id)">
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-list {
  width: 100%;
  max-width: 500px;
}

.item-list h2 {
  margin-bottom: 16px;
  color: #0369a1;  
  font-size: 1.4rem;
}

.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f9ff;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  font-size: 1rem;
  transition: transform 0.15s, box-shadow 0.15s;
}

.item-row:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.item-row span.done {
  text-decoration: line-through;
  color: #90a4ae;
}

.item-row button {
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 8px;
}

.item-row button:not(.delete) {
  background-color: #0284c7;
  color: white;
}

.item-row button.delete {
  background-color: #f87171;
  color: white;
}
</style>