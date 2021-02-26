import { Fragment, Component, useState } from "react";

//////////////
// Function Base Component
// const App = (props) => {
//   const [show, setShow] = useState(true);

//   const toggleShow = () => {
//     setShow(!show);
//   };
//   console.log(props);
//   return (
//     <Fragment>
//       {show && <h1 className="title">Hello Word, {props.name}</h1>}
//       <p>Salam</p>
//       <button onClick={toggleShow}>ToggleShow</button>
//     </Fragment>
//   );
// };

//////////////
// ClassBase Component
// class App extends Component {
//   componentWillUnmount() {
//     console.log("b");
//   }
//   render() {
//     this.props.print();
//     return (
//       <Fragment>
//         <h1 className="title">
//           Hello Word, {this.props.name} is {this.props.age}
//         </h1>
//         <p>Salam</p>
//       </Fragment>
//     );
//   }
// }

// const App = (props) => {
//   const cars = {
//     peraid: {
//       name: "peraid",
//       price: 2000,
//     },
//     samand: {
//       name: "samand",
//       price: 3000,
//     },
//     tiba: {
//       name: "tiba",
//       price: 1000,
//     },
//   };

//   const RenderItem = () => {
//     return Object.values(cars).map((item) => {
//       return (
//         <li key={item.name}>
//           {item.name} {item.price}
//         </li>
//       );
//     });
//   };

//   console.log(props);
//   return (
//     <Fragment>
//       <RenderItem />
//     </Fragment>
//   );
// };

const App = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [select, setSelect] = useState("mango");

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(name, age);
  };
  const onChangeAge = (event) => {
    setAge(Number(event.target.value));
  };
  const onchangeSelect = (event) => {
    setSelect(event.target.value);
  };
  return (
    <Fragment>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type="number" name="age" onChange={onChangeAge} value={age} />

        <select value={select} onChange={onchangeSelect}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        <button type="submit">submit</button>
      </form>
    </Fragment>
  );
};

export default App;
