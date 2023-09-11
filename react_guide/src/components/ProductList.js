import React, { Component } from "react";
import {Button, Table} from "reactstrap";

export default class ProductList extends Component {
    //burada prodps contructorı olusturmadanda kullamnabiliriz aslında

    //asagıda propsdan cekilen productları map ile basacagız

    // asagıdaki butona basında bir fonksiyon calıscak () sonuc olarakda arrow ile product gonderecek

    render() { // komponentlerde bir degisiklik oldugunda degisen veriye göre yenileme sürecini render edilmesini saglar
        return (
            <div>
                {/*<h3>Product List</h3>*/}
                {/*<h3>{ this.props.title }</h3>*/}
                <h3>{ this.props.info.title } - {this.props.currentCategory}</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Unit Price
                        </th>
                        <th>
                            Quantity Per Unit
                        </th>
                        <th>
                            Units In Stock
                        </th>
                        <th>

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitsInStock}</td>
                            <td><Button onClick={() => this.props.addToCart(product)} color="info">Add</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}