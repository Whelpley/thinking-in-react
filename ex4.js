import React from 'react'

export const FilterableProductTable = React.createClass({
  render: function () {
    // const Products = this.props.products;

    return (
      <div>
        <SearchBar />
      // now, ProductTable can access the below via 'this.props.products'
        <ProductTable products={this.props.products} />
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

export const ProductTable = React.createClass({
    render() {
        const products = this.props.products;

        const rows = [];
        let currentCategory;

        products.forEach((product) => {
            if (product.category !== currentCategory) {
                currentCategory = product.category;

                rows.push((
                    <ProductCategoryRow
                        key={currentCategory}
                        category={currentCategory}
                    />
                ));
            }

            rows.push((
                <ProductRow key={product.name} product={product}/>
            ));
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    },
});

export const ProductCategoryRow = React.createClass({
  render: function () {
    return (
      <tr>
          // 'category' defined in ProductTable
          <th colSpan={2}>{this.props.category}</th>
      </tr>
    );
  }
});

export const ProductRow = React.createClass({
  render: function () {
    // 'product' defined in ProductTable
    const product = this.props.product;

    const style = {
        color: product.stocked ? null : 'red',
    };

    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
  }
});