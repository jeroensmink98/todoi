<script lang="ts">
  import Header from "./components/Header.svelte";
  import TaskForm from "./components/TaskForm.svelte";
  import TaskList from "./components/TaskList.svelte";
  import { tasks } from "./lib/Task";
  import type { Task } from "./lib/Task";
  import Footer from "./components/Footer.svelte";
  import TaskDetails from "./components/TaskDetails.svelte";
</script>

<div>
  <main>
    <div class="min-h-screen">
      <Header />
      <TaskForm />
      <TaskList {tasks} />
      <TaskDetails />
    </div>
  </main>
</div>
