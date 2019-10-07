import React, { Component } from "react";
import axios from "axios";
import './Country.css';

class Country extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false,
            editInput: props.element
        }
    }

    save = () => {
        const index = this.props.index;
        const newCountries = this.state.editInput;
    
        console.log(index, newCountries);
    
        axios
          .put(`/api/countries`, { index, newCountries })
          .then(res => this.props.updateState(res.data));
    
       
        this.setState({
          editing: false
        });
      };

      edit = () => {
          this.setState ({
              editing: !this.state.editing
          })
      }

      handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

   

    render() {
        return (
            <div className='country'>
              {this.state.editing ? (
                  <article>
                  <input
                      className='inputs'
                      placeholder='What Your Doing there'
                      value={this.state.editInput}
                      name="editInput"
                      onChange={e => this.handleInput(e)}
                  />
                  <button className='button' onClick={() => this.save()}>Save</button>
                  </article>
              ) : (
                  <div>
                    <section className='name-image'>
                      <img className="image" src={this.props.countries.image} alt='countries'></img>

                      <p className='name'>{this.props.countries.name} </p>
                    </section>
                      
                    <div className='description'> 
                      <p className='info'>{this.props.countries.info}</p>

                    </div>  

                    <article className='trash-edit'>
                      <button className='button' onClick={() => this.edit()}>Edit</button>

                      <button className='button' onClick={() => this.props.delete(this.props.index)}>Delete</button>
                    </article>
                  </div>
              )}

            
            </div>
        );
    }
}

export default Country;



