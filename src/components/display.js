import React from 'react';
import './Display.css'


const Display = ({ tickers }) => {

   
    
    const peoplelist = tickers.length ? tickers.map( person =>{
        
        let {base,target,last,market,volume,trade_url,trust_score}=person;
        return( <div className='person' key={last}>
        {/* <p class="tickers"><strong>Tickers</strong></p> */}
        <ul>
        <p class="tickers"><strong>Tickers</strong></p>
            <li>Base: {base}, Target: {target}, Market Name: {market.name}, Volume: {volume}, <a href={trade_url}>Trade URL</a>, Trust Score: {trust_score}</li>
        </ul>
       
        </div>)
    }) : (<p> </p>);//No data found....
    return(
        <div className='display-div'>
            {peoplelist}
        </div>
    );
}
export default Display;
    