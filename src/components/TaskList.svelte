<!-- TaskList.svelte -->
<script lang="ts">
    import { taskStore } from "../lib/TaskStore";
    import type { Task } from "../lib/task";

    interface Props {
        tasks: Task[];
    }

    const deleteTask = (index: number) => {
        taskStore.update((tasks) => {
            const updatedTasks = [
                ...tasks.slice(0, index),
                ...tasks.slice(index + 1),
            ];
            return updatedTasks;
        });
    };

    $: tasks = $taskStore; // Subscribe to the taskStore and get the current tasks array

    // Log the tasks array whenever it changes
    $: console.log(tasks);
</script>

<table class="table-auto w-full">
    <thead class="dark:bg-gray-800">
        <tr class="dark:bg-gray-800">
            <th class="px-4 py-2 dark:text-white">Description</th>
            <th class="px-4 py-2 dark:text-white">Category</th>
            <th class="px-4 py-2 dark:text-white">Duration (hours)</th>
            <th class="px-4 py-2 dark:text-white">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each tasks as task, index}
            <tr class="border-b border-gray-200 odd:bg-gray-200 bg-gray-300">
                <td class="px-4 py-2">{task.description}</td>
                <td class="px-4 py-2">{task.category}</td>
                <td class="px-4 py-2">{task.duration}</td>
                <td class="px-4 py-2 ">
                    <button
                        class="bg-red-600 mx-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        on:click={() => deleteTask(index)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
