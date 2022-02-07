import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Banner from "./Banner"
import About from "./About"
import Team from "./Team"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Banner />
    <About />
    <Team/>
    
  </React.StrictMode>,
  document.getElementById('root')
)
