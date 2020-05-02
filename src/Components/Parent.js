/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import {Child} from './Child';
import { Sibling } from './Sibling';

export class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Ubay',
            age : 0
        };

        //bind changeName
        this.changeName = this.changeName.bind(this);
    }


    changeName(newName, newAge) {
        console.log('ini jalan parent');       

        this.setState({name: newName, age: newAge})
    }


    render(){
        return(
            <div>
                <Child onChange={this.changeName}/>
                {/* <Sibling name={this.state.name} >and my age is : {this.state.age}</Sibling> */}
                <Sibling name={this.state.name} age ={this.state.age}/>

            </div>
        )
    }
}