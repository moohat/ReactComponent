/* eslint-disable no-useless-constructor */
import React from 'react'

export class Child extends React.Component {
    constructor(props){
        super(props);

        //bind handleChange
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        const age = e.target.value === 'Ubay' ? 30 : e.target.value === 'Ahmad' ?  25: 20;

        this.props.onChange(name, age);
    }



    render(){
        return(
            <div>
                <select onChange={this.handleChange}>
                    <option value="Ubay">Ubay</option>
                    <option value="Ahmad">Ahmad</option>
                    <option value="Umar">Umar</option>
                </select>
                
            </div>
        );
    }
}
