import React from "react";

function Scoreboard(props) {
    return (
        <header>
            <div className="row">
                <div className="col-md-12">
                    <h1>{props.title}</h1>
                    <p>Top Score: {props.topscore}</p>
                    <p>Clicks: {props.clicks}</p>
                </div>
            </div>
        </header>
    )
}

export default Scoreboard;