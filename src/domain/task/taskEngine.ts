import { priorityWeight, Task } from './types';

/** Returns actionable tasks ordered by priority, then due date. */
export function rankTasks(tasks: Task[], today: string): Task[] {
  return [...tasks]
    .filter((task) => !task.completed)
    .sort((a, b) => {
      const overdueA = a.dueDate < today ? 1 : 0;
      const overdueB = b.dueDate < today ? 1 : 0;
      if (overdueA !== overdueB) return overdueB - overdueA;
      const priority = priorityWeight[b.priority] - priorityWeight[a.priority];
      if (priority !== 0) return priority;
      return a.dueDate.localeCompare(b.dueDate);
    });
}

export function completionRate(tasks: Task[]): number {
  if (tasks.length === 0) return 0;
  return Math.round((tasks.filter((task) => task.completed).length / tasks.length) * 100);
}
