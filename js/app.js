var players = [{
    name: "Player1",
    score: 0,
    id: 1,
}, {
    name: "Player2",
    score: 0,
    id: 2,
}];

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.tagLine}</p>
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    tagLine: React.PropTypes.string.isRequired,
};

function PlayerRow(props) {
    return (
        <div className="row">
            <div className="left col">
                <input type="text" value={props.name} placeholder="Player name"/>
            </div>
            <div className="right col">
                <div className="counter">
                    <button className="plus">+</button>
                    <input type="number" value={props.score}/>
                    <button className="minus">-</button>
                </div>
            </div>
        </div>
    );
}

PlayerRow.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
};


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
                {props.players.map(function (player) {
                    return <PlayerRow key={player.id} name={player.name} score={player.score}/>
                })}


                <div className="row">
                    <button id="addPlayer">Add player</button>
                </div>
            </div>
        </div>
    );
}

Application.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired,
};

ReactDOM.render(
    <Application title="Basic Score Counter"
                 tagLine="Keeping track!"
                 players={players}/>
    , document.getElementById("wrapper"));