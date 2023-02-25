
const initialState = [];

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          name: action.payload.name,
          salary: action.payload.salary,
          hidden: action.payload.hidden,
          id: action.payload.id,
        },
      ];
    case "DEL":
      return [...state].filter((item) => item.id !== action.payload.id);
    case "INC":
      return [...state].filter((item) => item.salary >= action.payload.salary);

    default:
      break;
  }
};
