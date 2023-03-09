<script lang="ts">
    import { addTask } from "../lib/Task";
    import type { Task } from "../lib/Task";

    interface FormValues {
        taskDescription: string;
        taskCategory: string;
        taskDuration: string;
    }

    const defaultFormValues: FormValues = {
        taskDescription: "",
        taskCategory: "",
        taskDuration: "",
    };

    let formValues: FormValues = { ...defaultFormValues };

    const handleSubmit = () => {
        const task: Task = {
            description: formValues.taskDescription,
            category: formValues.taskCategory,
            duration: parseInt(formValues.taskDuration, 10),
        };

        addTask(task);

        formValues = { ...defaultFormValues };
    };
</script>

<form on:submit|preventDefault={handleSubmit} class="dark:bg-gray-800 w-full">
    <div class="mb-4 mx-2">
        <label
            class="block dark:text-gray-200 font-bold mb-2 "
            for="taskDescription"
        >
            Task Description:
        </label>
        <input
            class="appearance-none w-full  py-2 px-3  dark:bg-slate-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="taskDescription"
            bind:value={formValues.taskDescription}
            required
        />
    </div>
    <div class="flex mb-4">
        <div class="w-1/2 mr-2 mx-2">
            <label
                class="block dark:text-gray-200 font-bold mb-2 "
                for="taskDuration"
            >
                Task Duration (hours):
            </label>
            <input
                class="appearance-none py-2 px-3 w-full  dark:bg-slate-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="taskDuration"
                bind:value={formValues.taskDuration}
                min="1"
                max="24"
                pattern="\d{(1, 2)}"
                inputmode="numeric"
                required
            />
        </div>
        <div class="w-1/2 ml-2 mx-2">
            <label
                class="block text-gray-200 font-bold mb-2 "
                for="taskCategory"
            >
                Task Category:
            </label>
            <input
                class="appearance-none w-full  py-2 px-3  dark:bg-slate-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="taskCategory"
                bind:value={formValues.taskCategory}
                required
            />
        </div>
    </div>
    <button
        class="mx-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
    >
        Add Task
    </button>
</form>
