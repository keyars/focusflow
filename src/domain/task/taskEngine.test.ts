import { completionRate, rankTasks } from './taskEngine';
import { Task } from './types';

const task = (id: string, priority: Task['priority'], dueDate: string, completed = false): Task => ({ id, title: id, priority, dueDate, completed, estimatedMinutes: 25, createdAt: '2026-09-11T00:00:00.000Z' });

describe('task engine', () => {
  it('ranks overdue tasks before priority ties', () => {
    const ranked = rankTasks([task('low-overdue','low','2026-09-10'), task('high-today','high','2026-09-11'), task('medium-today','medium','2026-09-11')], '2026-09-11');
    expect(ranked.map((t) => t.id)).toEqual(['low-overdue','high-today','medium-today']);
  });
  it('excludes completed tasks', () => expect(rankTasks([task('done','high','2026-09-10', true)], '2026-09-11')).toHaveLength(0));
  it('calculates completion percentage', () => expect(completionRate([task('a','low','2026-09-11', true), task('b','low','2026-09-11')])).toBe(50));
  it('returns zero for an empty list', () => expect(completionRate([])).toBe(0));
});
