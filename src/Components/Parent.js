/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import {Child} from './Child';
import { Sibling } from './Sibling';

export class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Ubay',
            age : 0,
            bgColor : '#a55eea',
            colorText: '#26de81'
        };

        //bind changeName
        this.changeName = this.changeName.bind(this);
    }


    changeName(newName, newAge, newBgColor, newColorText) {
        console.log('ini jalan parent');       

        this.setState({name: newName, age: newAge, bgColor:newBgColor, colorText: newColorText})
    }


    render(){
        return(
        <div style={{background:this.state.bgColor, color:this.state.colorText, width:350, marginLeft: 150, marginTop: 150}}>
                <Child changeElement={this.changeName}/>
                {/* <Sibling name={this.state.name} >and my age is : {this.state.age}</Sibling> */}
                <Sibling name={this.state.name} age ={this.state.age}/>

            </div>
        )
    }
}