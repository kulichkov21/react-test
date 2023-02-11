import {ClickedContext} from "../App";

export default (props: any) => {
    return (<div style={{border: '1px solid #ccc', width: '200px', margin: '0 auto'}}>
        <h3>Counter2</h3>
        <ClickedContext.Consumer>
            {clicked => clicked ?  <p>CLicked</p> :  <p>Not CLicked</p>}
        </ClickedContext.Consumer>


    </div>)

}