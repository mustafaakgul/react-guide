import React, { Component } from "react";
import './App.css';
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import {Col, Container, Row} from "reactstrap";

// compoennttler arası veri tasımadan dolayı burası class compoentnte cevrildi yani export defaul yazıma
export default class App extends Component{

    //changecategry eski haliyleyazamıyorduk bu yuzden bunu cevirdik bu hale
    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName})
    }

    render() {
        //best practice encapsulation like class, dic
        let productInfo = { title: "Product List" } // nesneti direk yollamaslısın asagıda diger kompoenttte parcalamalısın cunku burya bir şey eklendiginde diger yerde direk kullan degisiklik zama ını kaybetmemek icin
        let categoryInfo = { title: "Category List" }
        return (       // bu fonksiyon bir jsx tipidir geri dondurdugu sey jsx dir, icindeki html degildir aynı yazıma sahip jsx dir kolay ogrenmek icin buradaki div ile html div maplenir aynı seyi yaratır
            <div>
                {/*<h1>Hello, World!</h1>*/}
                {/*<Navi></Navi>*/}
                {/*<Navi></Navi>*/}
                {/*<Navi></Navi>*/}
                <Container>
                    <Row>
                        <Navi/>
                    </Row>
                    <Row>
                        {/*<Col xs="3"><CategoryList title="Category List"/></Col>*/}
                        {/*<Col xs="9"><ProductList title="Product List"/></Col>*/}
                        {/*<Col xs="3"><CategoryList title={titleCategory}/></Col>*/}
                        {/*<Col xs="9"><ProductList title={titleProduct}/></Col>*/}
                        <Col xs="3"><CategoryList info={categoryInfo}/></Col>
                        <Col xs="9"><ProductList info={productInfo}/></Col>
                    </Row>
                </Container>

                {/*<Navi/>*/}
                {/*<CategoryList/>*/}
                {/*<ProductList/>*/}
            </div>
            // <h1>sdf</h1> buna izin vermez cunku jsx bir tane root element ister, birden fazla yaratamaz component miamrisi gibi ana roottan türemek zorunda
        );
    }
}


// function App() { // bu bir fonksiyon bir js tipidir
//   //bad practice
//   let titleProduct = "Product List"
//   let titleCategory = "Category List"
//
//   //best practice encapsulation like class, dic
//     let productInfo = { title: "Product List" } // nesneti direk yollamaslısın asagıda diger kompoenttte parcalamalısın cunku burya bir şey eklendiginde diger yerde direk kullan degisiklik zama ını kaybetmemek icin
//     let categoryInfo = { title: "Category List" }
//
//   return (       // bu fonksiyon bir jsx tipidir geri dondurdugu sey jsx dir, icindeki html degildir aynı yazıma sahip jsx dir kolay ogrenmek icin buradaki div ile html div maplenir aynı seyi yaratır
//     <div>
//         {/*<h1>Hello, World!</h1>*/}
//         {/*<Navi></Navi>*/}
//         {/*<Navi></Navi>*/}
//         {/*<Navi></Navi>*/}
//         <Container>
//             <Row>
//                 <Navi/>
//             </Row>
//             <Row>
//                 {/*<Col xs="3"><CategoryList title="Category List"/></Col>*/}
//                 {/*<Col xs="9"><ProductList title="Product List"/></Col>*/}
//                 {/*<Col xs="3"><CategoryList title={titleCategory}/></Col>*/}
//                 {/*<Col xs="9"><ProductList title={titleProduct}/></Col>*/}
//                 <Col xs="3"><CategoryList info={categoryInfo}/></Col>
//                 <Col xs="9"><ProductList info={productInfo}/></Col>
//             </Row>
//         </Container>
//
//         {/*<Navi/>*/}
//         {/*<CategoryList/>*/}
//         {/*<ProductList/>*/}
//     </div>
//     // <h1>sdf</h1> buna izin vermez cunku jsx bir tane root element ister, birden fazla yaratamaz component miamrisi gibi ana roottan türemek zorunda
//   );
// }

//export default App;
