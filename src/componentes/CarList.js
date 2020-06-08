import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import CarDetail from './CarDetail';

class CarList extends Component{

    state = { carList : []}

    componentDidMount()
    {
        console.log('Hola estoy dentro de didMount');
        axios.get('https://givecars.herokuapp.com/').then(response =>{
            this.setState({carList:response.data });
            console.log(response);

        });
    }

    renderList =() =>{

        return this.state.carList.map((brand) => {
        return <CarDetail key = {brand.model[0].name} brand={brand}></CarDetail>
        });
    }
     
  render(){
      console.log(this.state)
      return (
           <ScrollView>
              {this.renderList()}
           </ScrollView>

             );
           }
   }

export default CarList;