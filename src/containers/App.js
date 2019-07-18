import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { personsFetchData, personsAddData } from "../actions/persons";
import NavBar from '../navbar';


class App extends Component {

  state= {
    nameValue: '',
    ageValue: '',
    statusValue: ''
  }
  
  componentDidMount() {
    this.props.fetchData("/api/muggers");
  }
  
  remove = (person,_id) =>{
    this.deleteData(person._id)
  }
  edit = (person,_id) => {
    console.log(person._id)
        this.setState({
          nameValue: person.name,
          ageValue: person.age,
          statusValue:person.status
        });
  }
  
  clearInput = () =>{
    this.setState({
      nameValue: '',
      ageValue: '',
      statusValue: '',
    })
  }
  addData = (person,_id) => {
    this.putData(person,_id)
  }

  putData = (person,_id) => {
    console.log(person._id);
    var data = {
      name: this.state.nameValue,
      age: this.state.ageValue,
      status: this.state.statusValue
    };
    fetch("/api/muggers/" + person._id,{
      method: 'PUT', // или 'PUT'
      body: JSON.stringify(data), // data может быть типа `string` или {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Успех:', JSON.stringify(response)))
    .catch(error => console.error('Ошибка:', error));
    this.clearInput()
  }

  postData = (_id) => {
    console.log(_id)
    var data = {
      name: this.state.nameValue,
      age: this.state.ageValue,
      status: this.state.statusValue
    };
    fetch("/api/muggers", {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // data может быть типа `string` или {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Успех:', JSON.stringify(response)))
    .catch(error => console.error('Ошибка:', error));
  }

  deleteData = (_id) => {
    console.log(_id)
    return fetch("/api/muggers/" + _id,{
        method: 'DELETE'
    })  
    .then(response => response.json())
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="wrapper__body">
          <div className="left"></div>
          <div className="right"></div>
          <div className="circle"></div>
          <div className="form_body">
            <h3>Напишите свои данные</h3>
            <input  type='text' 
                    value={this.state.nameValue} 
                    onChange={e =>
                                  this.setState({ nameValue: e.target.value })
                              } 
                    placeholder="Full Name" /><br />
            <input  type='number'
                    value={this.state.ageValue} 
                    onChange={e =>
                                  this.setState({ ageValue: e.target.value })
                              } 
                    placeholder="Your age" /><br />
            <input  type='text' 
                    value={this.state.statusValue} 
                    onChange={e =>
                                  this.setState({ statusValue: e.target.value })
                              } 
                    placeholder="Status" /><br />
            <input type='submit' onClick={this.postData} />
            </div>
            </div>
          <div className="wrapper__body-data">
              {this.props.persons.map((person, _id)=> {
                return <ul className="body__data" key={_id}>
                  <h3 className="center">Информация</h3>
                  <div className="df">
                  <li> {person.name}</li>
                  <li> {person.age}</li>
                  <li> {person.status}</li>
                  </div>
                  <div className="flex">
                  <button onClick={() => this.remove(person, _id)}>Удалить</button>
                  <button onClick={() => this.edit(person, _id)}>Изменить</button>
                  <button onClick={() => this.addData(person,_id)}>Сохранить изменение</button>
                  </div>
                </ul>
              })}

          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(personsFetchData(url)),
    // addData: url => dispatch(personsAddData(url))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);