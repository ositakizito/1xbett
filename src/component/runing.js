import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ball from "../img/ball.png";
export default function Run() {
    const { id } = useParams();
    const [tick, setTick] = useState([]);
    useEffect(() => {
        axios.get('https://betservers.onrender.com/run/' + id).then(res => {
            setTick(res.data[0]);
        }).catch(err => console.log(err))
    })

    return (
        <>
            <div className="head">
                <Link to="/"><div className="fq"><i className="fa fa-arrow-left"  style={{color: "white"}}></i></div></Link>
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
                        <div className="cl">
                            <div className="cl2"></div>
                        </div>&nbsp;
                        <div className="">Potential Winnings</div>
                    </div>
                    <div className="pw">{tick.Potent} USD</div>
                </div>
                <div className="repeat">
                    <div className="rp">Repeat</div>
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
                </div>
                <div className="tod">
                    <div className="pw bl">{tick.Team2}</div>
                </div>
                <div className="tod">
                    <div className="cs">Correct Score {tick.SingleScore}-{tick.SingleScore2}</div>
                    <div className="pw">{tick.Odd1}</div>
                </div>
                <div className="tod">
                    <div className="st">Status</div>
                    <div className="pw">
                        <div className="cl">
                            <div className="cl2"></div>
                        </div>&nbsp;
                        <div className="">Unsettled</div>
                    </div>
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
                </div>
                <div className="tod">
                    <div className="pw bl">{tick.Team4}</div>
                </div>
                <div className="tod">
                    <div className="cs">Correct Score {tick.SingleScore}-{tick.SingleScore2}</div>
                    <div className="pw">{tick.Odd2}</div>
                </div>
                <div className="tod">
                    <div className="st">Status</div>
                    <div className="pw">
                        <div className="cl">
                            <div className="cl2"></div>
                        </div>&nbsp;
                        <div className="">Unsettled</div>
                    </div>
                </div>

            </div>
        </>
    )
}
