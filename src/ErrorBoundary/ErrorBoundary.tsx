import React, {Component} from "react";

export default class ErrorBoundary extends Component<any, any> {

    state = {
        hasError: false
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return (<h1 style={{color: 'red'}}>Error</h1>)
        } else {
            return this.props.children
        }
    }

}