<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div class="item-form stats">
    <h2>Статистика</h2>

    <p>Всього: {{ store.totalCount }}</p>
    <p>Виконано: {{ store.doneCount }}</p>
    <p>Активні: {{ store.activeCount }}</p>

    <div class="filters">
      <button @click="store.filter = 'all'">Всі</button>
      <button @click="store.filter = 'active'">Активні</button>
      <button @click="store.filter = 'done'">Виконані</button>
    </div>
  </div>
</template>

<style scoped>
.stats {
  background-color: #e0f2ff;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.stats h2 {
  color: #0369a1;
  margin-bottom: 12px;
}

.stats p {
  margin: 6px 0;
  font-size: 1rem;
  color: #075985;
}

.filters {
  margin-top: 12px;
}

.filters button {
  padding: 8px 14px;
  margin-right: 8px;
  background-color: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.filters button:hover {
  background-color: #0369a1;
  transform: translateY(-1px);
}
</style>