import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Result extends React.Component {
    render() {
        return (
            <div className="row">
                <rect className="Rectangle">{this.props.id}</rect>
                <rect className="Rectangle">{this.props.name}</rect>
                <rect className="Rectangle">{this.props.owner}</rect>
            </div>
        )
    }
    
}

class List extends React.Component {
    renderRecord(data) {
        return (
            <Result
                id={data.id}
                name={data.name}
                owner={data.owner}
            />
        )
    }
    // First Render what each of the columns will be on top
    // The top will also be a record with the names of each field
    // After that it will just be records with data
    // For each result, render a new record for that result

    render() {
        const headers = {
            id : "ID",
            name : "NAME",
            owner : "OWNER",
        }

        const headers1 = {
            id : "ID1",
            name : "NAME",
            owner : "OWNER",
        }

        const headers2 = {
            id : "ID2",
            name : "NAME",
            owner : "OWNER",
        }

        return (
            <div>
                {this.renderRecord(headers)}
                {this.renderRecord(headers1)}
                {this.renderRecord(headers2)}
            </div>
        );
    }
}

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo  : null,
            owner : null,
            keyword : null,
            repoSearch: true,
            data    : [
                {
                }
            ]
        }
    }

    toggleRepoSearch(bool) {
        this.setState({
            repoSearch : bool
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.toggleRepoSearch(true)}>Repo Search</button>
                <button onClick={() => this.toggleRepoSearch(false)}>View Commits</button>
                <br/>
                <br/>
                <div className="List">
                    <List 
                        />
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Application />, document.getElementById("root"));