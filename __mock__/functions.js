export const addTask = (todo, record) => todo.push(record);

export const removeTask = (todo, index) => {
  todo.splice(index, 1);
};

export const editDescription = (todo, index, text) =>  todo[index].description = text;
   
export const status = (todo, index) => {
    const sts = todo[index].completed;
    if (sts) todo[index].completed= false;
    if (!sts) todo[index].completed= true;   
};