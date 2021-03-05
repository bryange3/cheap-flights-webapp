import React, { useState } from 'react';
import './FlightsInfo.css';
import Quotes from './Quotes';

function FlightsInfo() {
    const [quotes, setQuotes] = useState([])
    const [country, setCountry] = useState("")
    const [currency, setCurrency] = useState("")
    const [locale, setLocale] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [departDate, setDepartDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [showQuotes, setShowQuotes] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/"
                + country + "/"
                + currency + "/"
                + locale + "/"
                + from + "/"
                + to + "/"
                + departDate + "/"
                + returnDate, reqOptions)
            response = await response.json()
            console.log(response.Quotes)
            setQuotes(response.Quotes)
        }
        fetchMyAPI()
        setShowQuotes(true)
        setCountry("")
        setCurrency("")
        setLocale("")
        setFrom("")
        setTo("")
        setDepartDate("")
        setReturnDate("")
    }

    return (
        <div className="airportinfo">
            <form onSubmit={handleSubmit}>
                <table align='center' id='add'>
                    <tr >
                        <th align='right'>Country</th>
                        <th align='right'>Currency</th>
                        <th align='right'>Language</th>
                    </tr>
                    <tr>
                        <td align='left'><input id="countryInput" value={country} onChange={e => setCountry(e.target.value)} required /></td>
                        <td align='left'><input id="currencyInput" value={currency} onChange={e => setCurrency(e.target.value)} required /></td>
                        <td align='left'><input id="localeInput" value={locale} onChange={e => setLocale(e.target.value)} required /></td>
                    </tr>
                    <tr >
                        <th align='right'>From</th>
                        <th align='right'>To</th>
                        <th align='right'>Depart Date</th>
                        <th align='right'>Return Date</th>
                    </tr>
                    <tr>
                        <td align='left'><input id="fromInput" value={from} onChange={e => setFrom(e.target.value)} required /></td>
                        <td align='left'><input id="toInput" value={to} onChange={e => setTo(e.target.value)} required /></td>
                        <td align='left'><input id="departDateInput" value={departDate} onChange={e => setDepartDate(e.target.value)} required /></td>
                        <td align='left'><input id="returnDateInput" value={returnDate} onChange={e => setReturnDate(e.target.value)} /></td>
                    </tr>
                    <td align='center'>
                        <button className="search">Submit</button>
                    </td>
                </table>

            </form>
            { showQuotes ? <Quotes quotes={quotes}></Quotes> : <></>}
        </div>
    )
}

export default FlightsInfo;
