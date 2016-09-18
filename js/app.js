function Header(props) {
    return(
        <header>
            <h1>{props.title}</h1>
            <p>{props.tagLine}</p>
        </header>
    );
}

function Application(props) {
    return(
        <div id="app">
            <Header title={props.title} tagLine={props.tagLine}/>
        </div>
    );
}

ReactDOM.render(<Application title="Basic Score Counter" tagLine="Keeping track!"/>, document.getElementById("wrapper"));