import React, {Component, DetailedHTMLProps, MouseEventHandler} from 'react';
import './App.css';
import Car from "./Car/Car";
import {IAppState} from "./types/app-state.interface";
import {ICar} from "./types/car.interface";

class App extends Component {
    state: IAppState = {
        appTitle: 'Test app',
        cars: [{name: 'Ford Focus', year: 2007}, {name: 'Audi A4 B9', year: 2019}]
    };

    render() {
        const divStyle: React.CSSProperties = {'textAlign': 'center'};
        const cars: ICar[] = this.state.cars;
        const title: string = this.state.appTitle;
        let carsHtml = null;
        carsHtml = this.state.cars.map((car, i) => {
            return (
                car.year > 2008 ? <Car name={car.name} year={car.year} key={i}
                                       onChangeTitle={() => this.changeTitle(car.name)}
                                       onChangeCarNameHandler={(event: any) => this.changeCarName(event.target.value, i)}
                                       onDelete={this.deleteHandler.bind(this, i)}
                /> : null
            )
        });


        return (
            <div>
                <div style={divStyle}>
                    <h2>{title}</h2>
                    <input type="text" onChange={this.handleInput}/>
                    <button onClick={this.changeTitle.bind(this, 'New From App')}>Change title</button>
                </div>


                {
                    <div style={{width: '400px', margin: 'auto', paddingTop: '20px'}}>
                        {
                            carsHtml
                        }
                    </div>
                }



            </div>
        );

        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null, 'Hello world'))

    }

    changeTitle(newTitle: string) {
        this.setState({appTitle: newTitle});
    }

    private deleteHandler(index: number) {
        const cars: ICar[] = this.state.cars;
        cars.splice(index, 1);
        this.setState({cars});
    }

    private changeCarName(name: string, index: number) {
        const car = this.state.cars[index];
        car.name = name;

        const cars: ICar[] = [...this.state.cars];
        cars[index] = car;
        this.setState({cars});
    }

    handleInput = (event: any) => {
        this.setState({appTitle: event.target.value});
    }

    // changeTitle = () => {
    //     this.setState({appTitle: 'New'});
    // }
}

export default App;
