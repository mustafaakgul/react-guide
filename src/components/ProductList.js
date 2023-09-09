import React, { Component } from "react";

export default class ProductList extends Component {
    //burada prodps contructorı olusturmadanda kullamnabiliriz aslında

    render() {
        return (
            <div>
                {/*<h3>Product List</h3>*/}
                {/*<h3>{ this.props.title }</h3>*/}
                <h3>{ this.props.info.title }</h3>
            </div>
        );
    }
}