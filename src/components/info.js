import React, {Component} from 'react';
import './Display.css'

class info extends Component{

    state = {
        name: '',
    }

    handlechange= (e) =>{
        //console.log(e.target.id);
        this.setState({  
            [e.target.id]: e.target.value
        })
    }

    handlesubmit = (e) =>{
        e.preventDefault();
       // console.log(this.state);
        //this.props.addPerson(this.state);
        this.props.addPerson(this.state);
        this.setState({
            name: '',
        })
        
    }

    render(){
        return(
            <div className='search'>
        <form onSubmit={this.handlesubmit}>
            
            <input type="search" id='name' placeholder='Please enter language name ' onChange={this.handlechange}></input>
            <input type="submit" id="submit" value="Search" name="search"></input> 
             <i className="fa fa-search"></i>
            </form>
        </div>
        )}

}

export default info;