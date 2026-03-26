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
  <div class="item-form">
    <h2>Додати задачу</h2>

    <input v-model="title" placeholder="Введіть задачу" />
    <button @click="addTask">Додати</button>
  </div>
</template>

<style scoped>
.item-form {
  background-color: #e0f2ff;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.item-form h2 {
  margin-bottom: 12px;
  font-size: 1.5rem;
  color: #0369a1; 
}

.item-form input {
  width: calc(100% - 16px);
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #90cdf4;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}

.item-form input:focus {
  border-color: #0284c7;
}

.item-form button {
  padding: 10px 18px;
  background-color: #0284c7; 
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
}

.item-form button:hover {
  background-color: #0369a1;
  transform: translateY(-2px);
}
</style>