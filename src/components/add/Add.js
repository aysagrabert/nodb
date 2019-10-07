import React, { Component } from "react";
import './Add.css';

class Add extends Component {
    constructor(){
        super();

        this.state = {
            urlInput: '',
            nameInput: '',
            infoInput: ''
            
        }
    }



    handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render() {
        console.log(this.state)
        return (
            <div className='add-country'>
             <section className='small-add-country'>

                <input className='inputs' placeholder='Image' name='urlInput' value={this.state.urlInput} onChange={this.handleInput}/>

                <input className='inputs' placeholder='Name' name='nameInput' value={this.state.nameInput} onChange={this.handleInput}/>
                
                <input className='inputs' placeholder='What Your Doing There' name='infoInput' value={this.state.infoInput} onChange={this.handleInput}/>

                <button className='button' onClick={() => this.props.addCountry(this.state.urlInput, this.state.nameInput, this.state.infoInput)}>Add</button>
             </section>
            </div>
        );
    }
}

export default Add;