import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {StateContextWrapper} from './exports'

ReactDOM.render(
    <StateContextWrapper>
        <App/>
    </StateContextWrapper>,
    document.getElementById('root')
)