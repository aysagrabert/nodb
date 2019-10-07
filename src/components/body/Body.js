import React, { Component } from "react";
import Country from '../country/Country'
import Add from '../add/Add'
import './Body.css';
import axios from "axios";

class Body extends Component {
    constructor(){
        super();

        this.state = {
            countries: [],
            info: '',
            name: '',
            image: ''

        }
    }

    componentDidMount = () => {
        axios.get("/api/countries").then(res =>
          this.setState({
            countries: res.data
          })
        );
      };

      handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };

   

      //Put
      addCountry = (image,  name, info) => {
          console.log('hit')
        axios.post("/api/countries", { image,  name, info}).then(res =>
          this.setState({
            countries: res.data
          })
        );
      };

      //Delete
      delete = index => {
        axios.delete(`api/countries/${index}`).then(res =>
          this.setState({
            countries: res.data
          })
        );
      };

      //Update
      updateState = updateCountries => {
          this.setState({
            countries: updateCountries
          })
      };
    

    render() {
        console.log(this.state)
        return (
            <div className='back'>
                <section className='country-styling'>
                {this.state.countries.map((element, index) => {
                    return (
                        <Country 
                         countries={element}
                         index={index}
                         key={`country ${index}`}
                         delete={this.delete}
                         updateState={this.updateState}/>
                    )
                })}
                </section>

                <footer>
                    <Add
                      addCountry={this.addCountry}/>
                </footer>
            
            </div>
        );
    }
}

export default Body;