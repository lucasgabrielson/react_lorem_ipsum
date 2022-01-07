import "bootswatch/dist/lux/bootstrap.min.css"
import axios from 'axios'
import React, { Component } from 'react'
import Output from './Components/Output'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText()
  }
  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text')
      .then((response) => {
        this.setState({text: response.data}, function(){
          console.log(this.state)
        });
      })
      .catch((err) => {
        console.log(err)

      });
  }
  render() {
    return (
      <div className="App">
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
