const redux = require("redux");

const initialState = {
  value: "Hello, World"
};

// Create a reducer
const reducer = (previousState = initialState, action = "DEFAULT") => {
  console.log(previousState, action);
  switch (action.type) {
    case "CHECK":
      return { value: action.payload };
  }
  return previousState;
};

// Create a store
const store = redux.createStore(reducer);

// Check store status --> should be initial state at this point
console.log("INITIAL STATE LOG", store.getState());

// Subscription
store.subscribe(() => {
  console.log("SUBSCRIPTION LOG", store.getState());
});

// Dispatching
store.dispatch({
  type: "CHECK",
  payload: "MATE"
});

console.log("FINAL STATE LOG", store.getState());
