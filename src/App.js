import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input } from "antd";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      numberMultiply: 0,
    }
    //this.handleDecrementNumber = this.handleDecrementNumber.bind(this);
  }

  handleDecrementNumber = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  handleIncrementNumber = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleChange = (e) => {
    var regExp = new RegExp("^\\d+$");
    if(regExp.test(e.target.value) || e.target.value == ""){
      console.log(e.target.value)
      this.setState({ numberMultiply: e.target.value })
    }
  }

  handleFunction = (e) => {
    console.log(this.state.number, this.state.numberMultiply)
    this.setState(
      { number: this.state.number * this.state.numberMultiply }
      //mb: this.state.number * 10
    )
  }

  render() {
    const { number, numberMultiply } = this.state;
    return (
      <div className="App">
        <Button onClick={this.handleDecrementNumber} className="coba" type="primary">
          Tambah
        </Button>

        <Button onClick={this.handleIncrementNumber} className="coba" type="primary">
          Kurang
        </Button>
        <br />
        <Input style={{ width: 100 }} value={numberMultiply} onChange={this.handleChange} >

        </Input>

        <br />
        <Button onClick={this.handleFunction} className="coba" type="primary">
          Kali 10
        </Button>
        <br />
        {number}
      </div>
    );
  }
}

export default App;
