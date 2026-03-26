<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskStats from './components/TaskStats.vue'
</script>

<template>
  <div id="app">
    <h1>Task Manager</h1>
    <TaskForm />
    <TaskList />
    <TaskStats />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #e0f2ff;
  min-height: 100vh;
  padding: 40px 20px;
}

#app h1 {
  color: #0369a1; 
  margin-bottom: 24px;
  font-size: 2rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
</style>