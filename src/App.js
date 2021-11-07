// create your App component here
import React from 'react'

export default class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(data => console.log(data))
    }

    render() {
        return(<div>{}</div>)
    }
}