function Application(props) {
    return(
        <div id="app">
            <header>
                <h1>{props.title}</h1>
                <p>{props.tagLine}</p>
            </header>
        </div>
    );
}

ReactDOM.render(<Application title="Basic Score Counter" tagLine="Keeping track!"/>, document.getElementById("wrapper"));