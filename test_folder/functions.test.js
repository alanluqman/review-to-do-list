import { addTask, removeTask } from '../__mock__/functions.js';

describe('AddItem and RemoveItem from todo array', () => {
  test('# add one item', () => {
    const todo = [];
    const record = {
      description: 'test value',
      completed: false,
      index: 1,
    };
    addTask(todo, record);
    expect(todo).toHaveLength(1);
  });

  test('# remove one item', () => {
    const todo = [{
      description: 'test value 1',
      completed: false,
      index: 0,
    }, {
      description: 'test value 2',
      completed: false,
      index: 1,
    }, {
      description: 'test value 3',
      completed: false,
      index: 2,
    }];
    removeTask(todo, 0);
    expect(todo).toHaveLength(2);
  });
});