import { taskStore } from "./TaskStore";

interface Task {
    description: string;
    category: string;
    duration: number;
}

let tasks: Task[] = [];

const addTask = (task: Task) => {
    taskStore.update((tasks) => [...tasks, task]);
};

const updateTask = (index: number, newTask: Task) => {
    taskStore.update((tasks) => {
        const updatedTasks = [
            ...tasks.slice(0, index),
            newTask,
            ...tasks.slice(index + 1),
        ];

        return updatedTasks;
    });
};

const deleteTask = (index: number) => {
    taskStore.update((tasks) => {
        const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        return updatedTasks;
    });
};

export { tasks, addTask, updateTask, deleteTask };
export type { Task };
