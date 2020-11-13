import React from "react";

class SearchBar extends React.Component {

  state = { searchTerm: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="container box search-box">
        <div className="header">
          <span className="search-label">Image Search</span> <img src="./main-bg-s.png"  alt="people" className="img-fluid"/>
        </div>
        <form onSubmit={this.onFormSubmit}>
        <div className="form-group input-group-sm centered">
            <input className="form-group input-wide mt-3" type="text"
            placeholder="Enter search words like shoes, toys, people or anything!" value={this.state.searchTerm}
            onChange={e => {this.setState({searchTerm:e.target.value})} } />
        </div>
        </form>
      </div>

    );
  }
}

export default SearchBar;
