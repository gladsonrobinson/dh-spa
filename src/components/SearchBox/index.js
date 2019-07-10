import React from "react";
import "./search-ctnr.css";
import PropTypes from "prop-types";
export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      searchTxt: ""
    };
  }

  handleSearch = ev => {
    ev.preventDefault();
    if (this.state.searchTxt !== "") this.props.onSearch(this.state.searchTxt);
  };

  handleInputChange = ev => {
    this.setState({ searchTxt: ev.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <div className="search-wrap">
          <div className="search">
            <input
              value={this.state.searchTxt}
              type="text"
              className="search-input"
              onChange={this.handleInputChange}
              placeholder="Search by city name"
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired
};
