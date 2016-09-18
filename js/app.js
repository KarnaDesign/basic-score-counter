function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.tagLine}</p>
        </header>
    );
}

function PlayerRow() {
    return (
        <div className="row">
            <div className="left col">
                <input type="text" placeholder="Player name"/>
            </div>
            <div className="right col">
                <div className="counter">
                    <button className="plus">+</button>
                    <input type="number"/>
                    <button className="minus">-</button>
                </div>
            </div>
        </div>
    );
}


function Application(props) {
    return (
        <div id="app">
            <Header title={props.title} tagLine={props.tagLine}/>
            <div id="scoreSheet">
                <div className="row">
                    <div className="left col">
                        <h4>Player</h4>
                    </div>
                    <div className="right col">
                        <h4>Score</h4>
                    </div>
                </div>
                <PlayerRow />
                <PlayerRow />
            </div>
        </div>
    );
}

ReactDOM.render(
    <Application title="Basic Score Counter"
                 tagLine="Keeping track!"/>
    , document.getElementById("wrapper"));