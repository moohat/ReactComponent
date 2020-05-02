/* eslint-disable no-useless-constructor */
import React from 'react'

export class Child extends React.Component {
    constructor(props) {
        super(props);

        //bind handleChange
        this.handleChange = this.handleChange.bind(this);
        
    }


    handleChange(e) {
        const name = e.target.value;
        let age = 0;
        let bgColor = '';
        let colorText = '';
        switch (name) {
            case 'Ubay':
                age = 30;
                bgColor = '#fed330';
                colorText = '#3867d6';
                break;
            case 'Ahmad':
                age = 25;
                bgColor = '#3867d6';
                colorText = '#fed330';
                break;
            case 'Umar':
                age = 20;
                bgColor = '#eb3b5a';
                colorText = '#d1d8e0';

                break;

            default:
                break;
        }

        this.props.changeElement(name, age, bgColor, colorText);
    }



    render() {
        return (
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
