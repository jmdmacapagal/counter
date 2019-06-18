import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

const App = (props) => {
    return (
        <div>
            <h2>{props.count}</h2>
            <div>
                <button onClick={props.decrement}>Decrement</button>
                <button onClick={props.increment}>Increment</button>
            </div>
        </div>
    )   
}

const mapStateToProps = state => {
    console.log(state)
    return { count: state.count }
}

export default connect(mapStateToProps, { increment, decrement })(App)