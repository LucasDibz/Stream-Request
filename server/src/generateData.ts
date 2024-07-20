import { setTimeout } from 'node:timers/promises';

const fakeDBState = [
  {
    status: 'idle',
    approved: 0,
    rejected: 0,
  },
  {
    status: 'in progress',
    approved: 5,
    rejected: 3,
  },
  {
    status: 'in progress',
    approved: 12,
    rejected: 6,
  },
  {
    status: 'in progress',
    approved: 18,
    rejected: 10,
  },
  {
    status: 'completed',
    approved: 20,
    rejected: 10,
  },
];

export async function* generateData() {
  for (const state of Object.values(fakeDBState)) {
    await setTimeout(2000); // 2s delay
    yield state;
  }
}
