import React, {Component, CSSProperties} from "react";
import './Car.css';
import Radium from 'radium';
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";


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

class Car extends Component<any, any> {


    render() {
        const inputClasses: string[] = ['Input'];

        if (this.props.name === '') inputClasses.push('red');
        if (this.props.name !== '') inputClasses.push('green');
        if (this.props.name.length > 4) inputClasses.push('bold');


        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input type="text"
                       onChange={this.props.onChangeCarNameHandler.bind(this)}
                       value={this.props.name}
                       className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onChangeTitle}>Set Title</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

// @ts-ignore
Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeTitle: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, 'Car')


