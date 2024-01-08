import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ball from "../img/ball.png";
export default function Won() {

    const { id } = useParams();
    const [tick, setTick] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/won/' + id).then(res => {
            setTick(res.data[0]);
        }).catch(err => console.log(err))
    })

    return (
        <>
            <div className="head">
            <Link to="/"><div className="fq" ><i className="fa fa-arrow-left" style={{color: "white"}}></i></div></Link>
                <div className="bt">BET SLIP DETAILS</div>
            </div>
            <div className="bd tp">
                <div className="top">
                    <div className="date">{tick.Date} ({tick.Time})</div>
                    <div className="acc">&#x2116; {tick.TicketID} / Accumlator</div>
                </div>
                <div className="hg"></div>
                <div className="tod">
                    <div className="odd">Odds</div>
                    <div className="nod">{tick.Odds}</div>
                </div>
                <div className="tod">
                    <div className="bet">Bet</div>
                    <div className="betno">{tick.bet} USD</div>
                </div>
                <div className="tod">
                    <div className="pw">
                        <div className="cl wn">
                            <i className="fa fa-check" style={{fontSize: "8px",color: "#fff"}}></i>
                        </div>&nbsp;
                        <div className="wn">Win</div>
                    </div>
                    <div className="pw wn">{tick.Potent} USD</div>
                </div>
            </div>
            <div className="bd">
                <div className="tod">
                <div className="odd">
                        <div className="mg"><img src={ball} width="20px" alt="" /></div>
                        <div className="tm">{tick.country1}. {tick.countryLig1}</div>
                    </div>
                </div>
                <div className="tod">
                    <div className="bet">{tick.Date} ({tick.Time1})</div>
                </div>
                <div className="tod">
                    <div className="pw bll">{tick.Team1}</div>
                    <div className="pw">{tick.SingleScore}</div>
                </div>
                <div className="tod">
                    <div className="pw bl">{tick.Team2}</div>
                    <div className="pw">{tick.SingleScore2}</div>
                </div>
                <div className="tod">
                    <div className="cs">Correct Score {tick.SingleScore}-{tick.SingleScore2}</div>
                    <div className="pw">{tick.Odd1}</div>
                </div>
                <div className="tod">
                    <div className="st">Status</div>
                    <div className="pw">
                        <div className="cl wn">
                            <i className="fa fa-check" style={{fontSize: "8px",color: "#fff"}}></i>
                        </div>&nbsp;
                        <div className="wn">Win</div>
                    </div>
                    
                </div>
                <div className="repeat wm">
                    <div className="rp rs" >Result</div>
                    <div className="rp" ><i className="fa fa-chevron-down"></i></div>
                </div>
            </div>
            <div className="bd">
                <div className="tod">
                    <div className="odd">
                        <div className="mg"><img src={ball} width="20px" alt="" /></div>
                        <div className="tm">{tick.country2}. {tick.countryLig2}</div>
                    </div>
                </div>
                <div className="tod">
                    <div className="bet">{tick.Date} ({tick.Time2})</div>
                </div>
                <div className="tod">
                    <div className="pw bll">{tick.Team3}</div>
                    <div className="pw">{tick.SingleScore3}</div>
                </div>
                <div className="tod">
                    <div className="pw bl">{tick.Team4}</div>
                    <div className="pw">{tick.SingleScore4}</div>
                </div>
                <div className="tod">
                    <div className="cs">Correct Score {tick.SingleScore3}-{tick.SingleScore4}</div>
                    <div className="pw">{tick.Odd2}</div>
                </div>
                <div className="tod">
                    <div className="st">Status</div>
                    <div className="pw">
                        <div className="cl wn">
                            <i className="fa fa-check" style={{fontSize: "8px",color: "#fff"}}></i>
                        </div>&nbsp;
                        <div className="wn">Win</div>
                    </div>
                </div>
                <div className="repeat wm">
                    <div className="rp rs" >Result</div>
                    <div className="rp" ><i className="fa fa-chevron-down"></i></div>
                </div>

            </div>
        </>
    )
}