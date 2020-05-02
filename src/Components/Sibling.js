import React from 'react'

export class Sibling extends React.Component {
    render() {
        const name = this.props.name;
        //jika menggunakan child props
        // const age = this.props.children;

        const age = this.props.age;
        return (
            <div>
                {/* jika menggunakan child props */}
                {/* <h1>Hey, My name is {name} {age}</h1> */}
                <h1>Hey, My name is {name} and my age is {age}</h1>
               
            </div>
        );
    }
}