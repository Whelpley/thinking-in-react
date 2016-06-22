import React from 'react'

export const FilterableProductTable = React.createClass({
  render: function () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
});

export const SearchBar = React.createClass({
  render: function () {
    return (
      <form>
          <input type="search" placeholder="Search..."/>
          <label>
              <input type="checkbox"/>
              Only show products in stock
          </label>
      </form>
    );
  }
});