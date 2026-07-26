const VALID_STATUSES = ['pending', 'in-progress', 'done'];

export default function createTaskRepository() {
  let tasks = []; // מערך רגיל בזיכרון, נשמר ב-closure, בלי class ובלי קובץ חיצוני
  let nextId = 1;

  function create({ title, status = 'pending' } = {}) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new Error('Title is required');
    }
    if (!VALID_STATUSES.includes(status)) {
      throw new Error(`Invalid status: ${status}`);
    }

    const task = { id: nextId++, title: title.trim(), status };
    tasks.push(task);
    return task;
  }

  function getAll() {
    return [...tasks];
  }

  function getById(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error(`Task ${id} not found`);
    }
    return task;
  }

  function update(id, updates = {}) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Task ${id} not found`);
    }

    if (updates.status && !VALID_STATUSES.includes(updates.status)) {
      throw new Error(`Invalid status: ${updates.status}`);
    }

    const updated = { ...tasks[index], ...updates, id };
    tasks[index] = updated;
    return updated;
  }

  function remove(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Task ${id} not found`);
    }
    tasks.splice(index, 1);
    return true;
  }

  function findByStatus(status) {
    return tasks.filter((task) => task.status === status);
  }

  function count() {
    return tasks.length;
  }

  return { create, getAll, getById, update, delete: remove, findByStatus, count };
}