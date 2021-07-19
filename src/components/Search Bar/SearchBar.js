import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {query: ''};

    // onInputChange = event => {
    //     this.setState({query: event.target.value},
    // };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.query);
    };

    render() {
        return(
            <form className="input-group my-2 my-lg-2" onSubmit = {this.onFormSubmit}>
                <input
                    className="form-control inp-search bg-primary text-light" 
                    type="search" 
                    placeholder="Search..."
                    aria-label="Search"
                    value={this.state.query}
                    onChange={e => this.setState({query: e.target.value})}
                />
                <button
                    className="btn btn-search bg-primary text-light p-1"
                    type="submit"
                >
                    <i class="fa fa-search"></i>
                </button>
            </form>
        );
    };
};

export default SearchBar;
