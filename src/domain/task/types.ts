export type Priority = 'low' | 'medium' | 'high';

export type Task = {
  id: string;
  title: string;
  notes?: string;
  priority: Priority;
  completed: boolean;
  dueDate: string;
  estimatedMinutes: number;
  createdAt: string;
};

export const priorityWeight: Record<Priority, number> = {
  low: 1,
  medium: 2,
  high: 3,
};
