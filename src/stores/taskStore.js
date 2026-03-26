import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
    tasks: [],
    filter: 'all'
    }),

    getters: {
    totalCount: (state) => state.tasks.length,

    doneCount: (state) =>
        state.tasks.filter(t => t.done).length,

    activeCount: (state) =>
        state.tasks.filter(t => !t.done).length,

    filteredTasks: (state) => {
        if (state.filter === 'active') {
        return state.tasks.filter(t => !t.done)
        }
        if (state.filter === 'done') {
        return state.tasks.filter(t => t.done)
        }
        return state.tasks
      }
    },

  actions: {
    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        done: false
      })
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    },

    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
})

