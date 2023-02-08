import React, {CSSProperties} from "react";
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

const car = (props: any) => {
        const inputClasses: string[] = ['Input'];

        if (props.name === '') inputClasses.push('red');
        if (props.name !== '') inputClasses.push('green');
        if (props.name.length > 4) inputClasses.push('bold');

        return (
            <div className="Car">
                    <h3>Car name: {props.name}</h3>
                    <p>Year: {props.year}</p>
                    <input type="text"
                           onChange={props.onChangeCarNameHandler}
                           value={props.name}
                           className={inputClasses.join(' ')}
                    />
                    <button onClick={props.onChangeTitle}>Set Title</button>
                    <button onClick={props.onDelete}>Delete</button>
            </div>
        )

}

export default car


