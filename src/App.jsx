import React,{ useState } from 'react'
import './App.css'
import MainContent from './MainContent';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      searchPhrase: ""
    }
  }

  render(){
    return (
      <div className="main-container" style={{backgroundImage: "url(https://clarksvillenow.sagacom.com/files/2020/11/shutterstock_286242953-1200x768.jpg)"}}>
        <MainContent app={this}/>
      </div>
    )
  }
}

export default App
