import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input } from "antd";
import AnotherComponent from './AnotherComponent';
import { thisTypeAnnotation } from '@babel/types';
import Axios from 'axios';
import HOCFetchData from './HOCFetchData'; 
import {withRouter} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      numberMultiply: 0,
      dataUser: [],
      dataPosts: []
    }
    //this.handleDecrementNumber = this.handleDecrementNumber.bind(this);
  }

  // componentDidMount() {
  //   this.handleFetchUsers();
  // }

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
    if (regExp.test(e.target.value) || e.target.value == "") {
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

  handleFetchUsers = (url) => {
    Axios.get(`https://5d60ae27c2ca490014b27096.mockapi.io/api/v1/${url}`).then(
      ({ data }) => {
        this.setState({ dataUser: data })
        console.log("this.data", this.state.dataUser);
      })
  }

  handleFetchPosts = (url) =>{
    Axios.get(`https://5d60ae27c2ca490014b27096.mockapi.io/api/v1/${url}`).then(
      ({ data }) => {
        this.setState({ dataPosts: data })
        console.log("this.data", this.state.dataPosts);
      })
  }

  render() {
    console.log('App Props', this.props);
    const { number, numberMultiply, dataUser, dataPosts} = this.state;
    return (
      <div className="App">
        <AnotherComponent
          handleDecrementNumber={this.handleDecrementNumber}
          handleIncrementNumber={this.handleIncrementNumber}
          handleFetchUsers={this.handleFetchUsers.bind(this)}
          handleFetchPosts={this.handleFetchPosts.bind(this)}
          number={number}
          {...this.state}
        ></AnotherComponent>
        
        {/* <br />
        <Input style={{ width: 100 }} value={numberMultiply} onChange={this.handleChange} >

        </Input>

        <br />
        <Button onClick={this.handleFunction} className="coba" type="primary">
          Kali 10
        </Button>
        <br />
        <br />

        <br /> */}
        {/* {dataUser.map((v) => {
          return (
            <li>{v.name}</li>
          )
        })} */}
      </div>
    );
  }
}

export default withRouter(HOCFetchData(App));