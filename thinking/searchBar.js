/**
 * Created by EmmaWu on 2016/12/4.
 */
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onUserInput(
            this.filterTextInput.value,
            this.inStockOnlyInput.checked
        );
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filterText} placeholder="searching..."
                       ref={(input) => this.filterTextInput = input}
                       onChange={this.handleChange.bind(this)}/>
                <input type="checkbox"
                       checked={this.props.inStockOnly}
                       ref={(input) => this.inStockOnlyInput = input}
                       onChange={this.handleChange.bind(this)}/> Only show products in stock
            </div>
        )
    }
}

export default SearchBar;