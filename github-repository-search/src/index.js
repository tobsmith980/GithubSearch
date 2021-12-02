import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class List extends React.Component {
    
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
                <div className="List">

                </div>
            </div>

        );
    }
}