import React, {Component, CSSProperties} from "react";
import './Car.css';
import Radium from 'radium';

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

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any) {
        console.log('componentWillReceiveProps', nextProps, nextContext);
    }

    shouldComponentUpdate(nextProps: Readonly<{name: string}>, nextState: Readonly<{name: string}>, nextContext: any): boolean {
        console.log('shouldComponentUpdate', nextProps, nextContext);
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any) {
        console.log('componentWillUpdate', nextProps, nextContext);
    }

    // static getDerivedStateFromProps(nextProps: Readonly<any>, previousState: Readonly<any>) {
    //     console.log('getDerivedStateFromProps', nextProps, previousState);
    //
    //     return previousState;
    // }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    // getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any {
    //     console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {


        const inputClasses: string[] = ['Input'];

        if (this.props.name === '') inputClasses.push('red');
        if (this.props.name !== '') inputClasses.push('green');
        if (this.props.name.length > 4) inputClasses.push('bold');

        const style = {
            border: '1px solid black',
            boxShadow: '0 4px 5px 0 black',
            ':hover': {
                border: '1px solid white',
                boxShadow: '0 6px 7px 8px green',
                cursor: 'pointer'
            }
        }

        return (
            <div className="Car" style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input type="text"
                       onChange={this.props.onChangeCarNameHandler.bind(this)}
                       value={this.props.name}
                       className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onChangeTitle}>Set Title</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}



export default Car


