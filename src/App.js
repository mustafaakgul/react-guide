import React, { Component } from "react";
import './App.css';
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import {Col, Container, Row} from "reactstrap";

// compoennttler arası veri tasımadan dolayı burası class compoentnte cevrildi yani export defaul yazıma
export default class App extends Component{

    //cart nesnesini en ustte olugu icin app burdan navi ye gondercez orda gostercez
    state = { currentCategory: "", products: [], cart: []} //bos products arrayi ve map ile bunu snradan kullanmak

    //changecategry eski haliyleyazamıyorduk bu yuzden bunu cevirdik bu hale, root elementtaen asagı state tasımak icini, yukarı tasıma olmaıdıgndan, category degisitirmeye yonelk her seyi app icine tasıdırk
    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName})
        this.getProducts(category.id); // bunu buraya ekleyerek, getproduct cagırdık onun icinde state degismisti state degisincede diger sayfadaki render bir daha calıstırabilmiş olacagız, react o stati kullanan her yeri kendi güncellemiş olacaktı
    }
    //js de fonksiyonlarda bir degisken oldugunda props gibi bunu tasıyabiliriz altta ornegi var

    componentDidMount() {
        this.getProducts();
    }

    getProducts = (categoryId) => { // bunu bir props ile productlist compoentnine yollamak lazım

        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        fetch(url)
            .then(response => response.json()) // gelen respon icin repsonsu json a dondur
            .then(data => this.setState({products: data})); // gelen datayı set et
    }

    addToCart = (product) => { //bunu asagıda prop ile yollayacagız karsı taraftanda props. ile alacagız
        let newCart = this.state.cart;
        var addedItem = newCart.find(c => c.product.id === product.id); // her bir cart item c icin bul
        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({product: product, quantity: 1});
        }
        this.setState({cart: newCart});
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
                    <Navi cart={this.state.cart}/>
                    <Row>
                        {/*<Col xs="3"><CategoryList title="Category List"/></Col>*/}
                        {/*<Col xs="9"><ProductList title="Product List"/></Col>*/}
                        {/*<Col xs="3"><CategoryList title={titleCategory}/></Col>*/}
                        {/*<Col xs="9"><ProductList title={titleProduct}/></Col>*/}
                        <Col xs="3"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/></Col>
                        <Col xs="9"><ProductList products={this.state.products} addToCart={this.addToCart} currentCategory={this.state.currentCategory} info={productInfo}/></Col>
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
