import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Task } from '@/domain/task/types';

const today = new Date().toISOString().slice(0, 10);

const starterTasks: Task[] = [
  { id: '1', title: 'Plan the day', priority: 'high', completed: false, dueDate: today, estimatedMinutes: 15, createdAt: new Date().toISOString() },
  { id: '2', title: 'Deep work session', priority: 'high', completed: false, dueDate: today, estimatedMinutes: 60, createdAt: new Date().toISOString() },
  { id: '3', title: 'Review priorities', priority: 'medium', completed: true, dueDate: today, estimatedMinutes: 20, createdAt: new Date().toISOString() },
];

type FocusFlowState = {
  tasks: Task[];
  focusMinutesToday: number;
  addTask: (title: string, priority: Task['priority'], estimatedMinutes: number) => void;
  toggleTask: (id: string) => void;
  addFocusMinutes: (minutes: number) => void;
};

export const useFocusFlowStore = create<FocusFlowState>()(
  persist(
    (set) => ({
      tasks: starterTasks,
      focusMinutesToday: 0,
      addTask: (title, priority, estimatedMinutes) => set((state) => ({
        tasks: [...state.tasks, { id: `${Date.now()}`, title, priority, estimatedMinutes, completed: false, dueDate: today, createdAt: new Date().toISOString() }],
      })),
      toggleTask: (id) => set((state) => ({ tasks: state.tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task) })),
      addFocusMinutes: (minutes) => set((state) => ({ focusMinutesToday: state.focusMinutesToday + minutes })),
    }),
    { name: 'focusflow-store', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
