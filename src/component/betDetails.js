import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function RunDetails() {
    const [values, setValues] = useState({
        date: '',
        time: '',
        ticket: '',
        odds: '',
        bet: '',
        potent: '',
        country1: '',
        countryLig1: '',
        time1: '',
        team1: '',
        team2: '',
        singlescore: '',
        singlescore2: '',
        
        odd1: '',
        country2: '',
        countryLig2: '',
        time2: '',
        team3: '',
        team4: '',
        singlescore3: '',
        singlescore4: '',
       
        odd2: ''

    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/ticket', values)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="head">
                <Link to="/"><div className="fq"><i className="fa fa-arrow-left" style={{color: "white"}}></i></div></Link>
                <div className="bt">BET SLIP DETAILS</div>
            </div>
            <div className="bd tp">
                <form onSubmit={handleSubmit}>
                    <p>Top details</p>
                    <input type="text" placeholder="Date" onChange={e => setValues({ ...values, date: e.target.value })} />
                    <input type="text" placeholder="Time"  onChange={e => setValues({ ...values, time: e.target.value })}/>
                    <input type="text" placeholder="TicketID"  onChange={e => setValues({ ...values, ticket: e.target.value })}/>
                    <input type="text" placeholder="Odd"  onChange={e => setValues({ ...values, odds: e.target.value })}/>
                    <input type="text" placeholder="BetAmount"  onChange={e => setValues({ ...values, bet: e.target.value })}/>
                    <input type="text" placeholder="potential"  onChange={e => setValues({ ...values, potent: e.target.value })}/>
                    <p>First team</p>
                    <input type="text" placeholder="country"  onChange={e => setValues({ ...values, country1: e.target.value })}/>
                    <input type="text" placeholder="Use the country ligue" onChange={e => setValues({ ...values, countryLig1: e.target.value })}/>
                    <input type="text" placeholder="Time"  onChange={e => setValues({ ...values, time1: e.target.value })}/>
                    <input type="text" placeholder="Team1"  onChange={e => setValues({ ...values, team1: e.target.value })}/>
                    <input type="text" placeholder="Team2"  onChange={e => setValues({ ...values, team2: e.target.value })}/>
                    <input type="text" placeholder="SingleScore"  onChange={e => setValues({ ...values, singlescore: e.target.value })}/>
                    <input type="text" placeholder="SingleScore2"  onChange={e => setValues({ ...values, singlescore2: e.target.value })}/>
                    <input type="text" placeholder="odds"  onChange={e => setValues({ ...values, odd1: e.target.value })}/>
                    <p>Second team</p>
                    <input type="text" placeholder="country" onChange={e => setValues({ ...values, country2: e.target.value })} />
                    <input type="text" placeholder="Use the country ligue" onChange={e => setValues({ ...values, countryLig2: e.target.value })}/>
                    <input type="text" placeholder="Time"  onChange={e => setValues({ ...values, time2: e.target.value })}/>
                    <input type="text" placeholder="Team3"  onChange={e => setValues({ ...values, team3: e.target.value })}/>
                    <input type="text" placeholder="Team4"  onChange={e => setValues({ ...values, team4: e.target.value })}/>
                    <input type="text" placeholder="SingleScore3"  onChange={e => setValues({ ...values, singlescore3: e.target.value })}/>
                    <input type="text" placeholder="SingleScore4"  onChange={e => setValues({ ...values, singlescore4: e.target.value })}/>
                    <input type="text" placeholder="odds"  onChange={e => setValues({ ...values, odd2: e.target.value })}/>
                    <input type="submit" className="btn" value="Submit" />
                </form>
            </div>
        </>
    )
}