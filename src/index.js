import React from 'react'
import { render } from 'react-dom'
import App from './components/app';

fetch('http://localhost:3001/example')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })

render(<App/>, document.getElementById('app'))
