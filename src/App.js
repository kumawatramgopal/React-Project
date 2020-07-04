import React from 'react';
//import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import './App.css';
import Display from './components/display';
import Info from './components/info';
import axios from 'axios';

class App extends React.Component{
  state={ image:{},
          description: [],
          cryptocurrency:[],
          homepage:[],
          market_data:[],
          tickers:[],
          public_interest_stats:[],
          localization:[]

}
 

addPerson = (newPerson) =>{
  
 let newarr = [newPerson];
 console.log(newarr)
 
 this.setState({
   city : newarr
 })
 console.log(newarr[0])
 const cors = `https://cors-anywhere.herokuapp.com/` 
  axios.get(cors+`https://api.coingecko.com/api/v3/coins/bitcoin`)
   .then( resolve => {
     if(resolve.data.length < 1)
     {//console.log(resolve.data);
     alert("Please enter correct spelling");
    }
            else{

              switch(newarr[0].name)
              {
                default:var lang='en';break;
                case "korean": lang='ko';break;
                case "Arabic": lang='ar';break;
              }if(resolve.data.length < 1)
            {
              alert("Please enter correct localization")

            }else{
              switch(newarr[0].name)
              {
                default:var loca='en';break;
                case "Japanese": loca='ja';break;
                case "korean": lang='ko';break;
                case "Arabic": lang='ar';break;
              }
            }

     console.log(resolve.data);
     
     this.setState({
       description : resolve.data.description[`${lang}`],
       image : resolve.data.image,
       cryptocurrency: resolve.data.categories,
       homepage:[resolve.data.links.homepage[0],resolve.data.links.repos_url.github[0],resolve.data.links.blockchain_site[0]], 
       tickers:resolve.data.tickers, 
       localization : resolve.data.localization[`${loca}`]
        
      })
    }}
    )
}


componentDidUpdate(){
  console.log(this.state.tickers)
  console.log(this.state.description)
  }

  render(){
    let a,b,c,d,e,f,g,h,i,k,l;
   if(this.state.description.length!=0)
   {
   a= <h2>{this.state.cryptocurrency[0]}</h2>;
   b= <img src={this.state.image.large} alt=""></img>;f=<br/>;

   e= <a href={this.state.homepage[0]}><strong>Home Page</strong></a>;
   f=<br/>;
   g=<a href={this.state.homepage[1]}><strong>Repos_URL</strong></a>;
   i=<br/>;
   l=<a href={this.state.homepage[2]}><strong>Blockchain URL</strong></a>;

   c= <p><strong>Description: </strong>{this.state.description}</p>;
   k= <p>Localization: {this.state.localization}</p>;
  //  d= <p>{this.state.public_interest_stats[0]}</p>;
   h=<Display tickers={this.state.tickers}></Display>;
   }
  return (
    <div className="App">
      <h1 className='center purple-text'>BITCOIN-APP</h1>
      <Info addPerson={this.addPerson}></Info>
      {a}
      {b}
      {e}{f}
      {g}{i}
      {l}
      {c}
      {k}
      {d}
      {h}

      
    </div>
  );
}
}

export default App;
