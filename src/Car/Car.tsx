import React from "react";
import './Car.css';

//  function Car() {
//  return (
//      <div>This is car</div>
//  )
// }

// export default () => (
//     <div>
//         <div>This is car</div>
//         <div>This is car</div>
//     </div>
// )

const car = (props: any) => (
    <div className="Car">
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeCarNameHandler} value={props.name}/>
        <button onClick={props.onChangeTitle}>Set Title</button>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)

export default car


