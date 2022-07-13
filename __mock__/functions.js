export const addTask = (todo, record) => todo.push(record);

export const removeTask = (todo, index) => {
  todo.splice(index, 1);
  return todo;
};
