var players = [{
    name: "Player1",
    score: 0,
    id: 1,
}, {
    name: "Player2",
    score: 0,
    id: 2,
}];

var Header = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        tagLine: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>{this.props.tagLine}</p>
            </header>
        );
    }
});

var PlayerRow = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
    },

    render: function () {
        return (
            <div className="row">
                <div className="left col">
                    <input type="text" value={this.props.name} placeholder="Player name"/>
                </div>
                <div className="right col">
                    <div className="counter">
                        <button className="plus">+</button>
                        <input type="number" value={this.props.score}/>
                        <button className="minus">-</button>
                    </div>
                </div>
            </div>
        );
    }
});

var Application = React.createClass({
    propTypes: {
        players: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            score: React.PropTypes.number.isRequired,
            id: React.PropTypes.number.isRequired,
        })).isRequired,
    },

    render: function () {
        return (
            <div id="app">
                <Header title={this.props.title} tagLine={this.props.tagLine}/>
                <div id="scoreSheet">
                    <div className="row">
                        <div className="left col">
                            <h4>Player</h4>
                        </div>
                        <div className="right col">
                            <h4>Score</h4>
                        </div>
                    </div>
                    {this.props.players.map(function (player) {
                        return <PlayerRow key={player.id} name={player.name} score={player.score}/>
                    })}


                    <div className="row">
                        <button id="addPlayer">Add player</button>
                    </div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <Application title="Basic Score Counter"
                 tagLine="Keeping track!"
                 players={players}/>
    , document.getElementById("wrapper"));