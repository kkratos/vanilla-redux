import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minux')
const number = document.querySelector("span")


const countReducer = (stateCount = 0, action) => {

  if (action.type === "Add") {
    return stateCount + 1;
  } else if (action.type === "Minus") {
    return stateCount - 1;
  }
  return stateCount
}

const countStore = createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({type: "Add"}))
minus.addEventListener("click", () => countStore.dispatch({type: "Minus"}))