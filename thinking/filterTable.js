/**
 * Created by EmmaWu on 2016/12/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import Table from './table';

let products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

class ProductCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        )
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let products = this.props.products;
        let rows = [];
        let lastCategory = null;
        products.forEach(product => {
            console.log(this.props.filterText);
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }

            let category = product.category;
            if (category !== lastCategory) {
                lastCategory = category;
                rows.push(<ProductCategory category={lastCategory} key={lastCategory}/>);
            }
            rows.push(<ProductItem product={product} key={product.name}/>);
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
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value,
            this.inStockOnlyInput.checked
        );
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref={(input) => this.inStockOnlyInput = input}
                        onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                    inStockOnly={this.state.inStockOnly}/>
                <Table products={this.props.products}
                       filterText={this.state.filterText}
                       inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}

ReactDOM.render(
    <FilterableProductTable products={products}/>,
    document.getElementById('app')
);

export default FilterableProductTable;





