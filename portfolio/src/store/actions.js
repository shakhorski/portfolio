export const add = (name, salary, hidden, id) => ({
  type: "ADD",
  payload: {
    name: name,
    salary: salary,
    hidden: hidden,
    id: id,
  },
});
export const del = (id) => ({
  type: "DEL",
  payload: {
    id: id,
  },
});
export const inc = (salary) => ({
  type: "INC",
  payload: {
    salary: salary,
  },
});
