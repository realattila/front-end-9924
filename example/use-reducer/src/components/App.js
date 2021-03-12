import { useReducer } from "react";

const reducer = (state, dispatch) => {
  if (dispatch.type === "COLOR") {
    return {
      ...state,
      color: dispatch.payload,
    };
  } else {
    return state;
  }
};

const INIT_STATE = {
  color: "yellow",
  marginBottom: "20px",
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const onClickBtn = (color) => {
    dispatch({
      type: "COLOR",
      payload: color,
    });
  };

  return (
    <div>
      <div style={state}>Hello World</div>
      <div>
        <button onClick={() => onClickBtn("blue")}>Blue</button>
        <button onClick={() => onClickBtn("green")}>Green</button>
        <button onClick={() => onClickBtn("red")}>Red</button>
        <button onClick={() => onClickBtn(INIT_STATE.color)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
