import { writable } from "svelte/store";
import type { Task } from './Task';

const defaultTasks: Task[] = [];
export const taskStore = writable(defaultTasks);
