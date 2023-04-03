export const initialState = {
  FirstName: "Roshan",
  APi_Data: [1, 2, 3, 4, 5],
};

export const actionTypes = {
  FIRSTNAME: "FIRSTNAME",
  API_DATA: "API_DATA",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FIRSTNAME":
      return state.FirstName;

    case "APi_Data":
      return { ...state, APi_Data: [...state.APi_Data, action.value] };
  }
};

// export { initialState, actionTypes, reducer };
