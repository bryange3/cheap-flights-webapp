import React from 'react';
import './Quotes.css';

function Quotes(props) { 

    return(
        <div className="quotes">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Minimum Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                            <th>{quote.QuoteId}</th>
                            <th>{quote.MinPrice}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Quotes;