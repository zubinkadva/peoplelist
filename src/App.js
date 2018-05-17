import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';	

var peopleClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var peopleABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}]

var peopleAddress = '0xedc9ea069bb741135749ff05bfc0c892c7d0d36d';

var peopleContract = new peopleClient.eth.Contract(peopleABI, peopleAddress);

class App extends Component {
	
  constructor(props) {
    super(props);
	  this.state = {
	    firstNames: [],
	    lastNames: [],
	    ages: []
	  }      
  }
	
  componentWillMount() {       
    //peopleContract.methods.addPerson(Web3.utils.toHex("ghf"),Web3.utils.toHex("dfgfddfd"), 10).call().then(console.log);
    let self = this;
    peopleContract.methods.getPeople().call().then(function(result) {  
      self.setState({
        firstNames: String(result[0]).split(','),
        lastNames: String(result[1]).split(','),
        ages: String(result[2]).split(',')
      });
    });          
  }	
	
  render() {
	  
    let table = []
    if(this.state.firstNames.length > 1) {
      for (let i = 0; i < this.state.firstNames.length; i++) {      
        table.push(<tr><td>{Web3.utils.hexToAscii(this.state.firstNames[i])}</td>
        <td>{Web3.utils.hexToAscii(this.state.lastNames[i])}</td>
        <td>{this.state.ages[i]}</td></tr>)
      }    
    } else
      table.push(<tr><td colspan="3"><i>No data found</i></td></tr>);    
	  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">People List UI</h1>
        </header>
		<br/><br/>
		
		<table align="center">	
		  <thead>
		    <tr>
			  <th>First Name</th>
			  <th>Last Name</th>
			  <th>Age</th>
		    </tr>
		  </thead>		
		  <tbody>					  
			{table}		    
		  </tbody>		
		</table>
		
      </div>
    );
  }
}

export default App;
