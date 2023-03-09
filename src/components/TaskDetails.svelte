<script lang="ts">
    import type { Task } from "../lib/Task";
    import { taskStore } from "../lib/TaskStore";

    interface Props {
        tasks: Task[];
    }

    function removeTasks() {
        taskStore.set([]);
    }

    $: tasks = $taskStore; // Subscribe to the taskStore and get the current tasks array

    // Log the tasks array whenever it changes
    $: totalDuration = tasks.reduce((acc, task) => acc + task.duration, 0);
    $: console.log(totalDuration);
</script>

<div class="px-2 py-1">
    {#if totalDuration === 0}
        <p>No tasks added!</p>
    {/if}

    {#if totalDuration !== 0}
        <p>Total duration: {totalDuration} hours</p>
    {/if}
</div>

<div class="py-2 px-2">
    <button
        class="inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        on:click={removeTasks}
    >
        <svg
            class="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.414-9.414a1 1 0 011.414 0L10 10.586l1.414-1.414a1 1 0 011.414 1.414L11.414 12l1.414 1.414a1 1 0 01-1.414 1.414L10 13.414l-1.414 1.414a1 1 0 01-1.414-1.414L8.586 12 7.172 10.586a1 1 0 010-1.414z"
                clip-rule="evenodd"
            />
        </svg>
        Remove all tasks
    </button>
</div>
