import React, { Component } from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

export default class CategoryList extends Component {
    // constructor(props) {
    //     super(props); // bu sayede alınan produ buraya tasırız, props u da ust rootdan alırız datayı yani
    //     this.state = { categories:
    //             [
    //                 {categoryId:1, categoryName:"Beverages"},
    //                 {categoryId:2, categoryName:"Condime"},
    //             ]
    //     }
    //     // state bir objedir, bu obje icindeki degiskenler degistiginde render edilir,
    //     // { categories: [{}, {}, {}] } bu 3 tane obje bulunan bir dizidir onunda üstnde gene bir objedir icinde categories var dadece olan obje, her sey objedir
    // }  consturcotra gerek yok aslında

    state = {
        categories:
            // [
            //     {categoryId:1, categoryName:"Beverages"},
            //     {categoryId:2, categoryName:"Condime"},
            // ],
            [],
        // currentCategory: ""
    };

    componentDidMount() { // bu bir lifecycle methodudur, react componenti ilk olusturdugunda calısır
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json()) // gelen respon icin repsonsu json a dondur
            .then(data => this.setState({categories: data})); // gelen datayı set et
    }

    // () parantez ac kapa bu bir fonksiyondur demek, karsılıgı ise arrowdan snrası sonucu
    // changeCategory = (category) => {
    //     this.setState({currentCategory: category.categoryName})
    // }
    //bu app e tasındı sebebi bunun diger compoentnte tasınması gerekiyor yukarı tasıma diye bişey olmadıgında yani root' a bu en üste konulup asagı inecek

    render() {
        return (
            <div>
                {/*<h3>Category List</h3>*/}
                {/*<h3>{ this.props.title }</h3>*/}
                <h3>{ this.props.info.title }</h3>
                {/*<h3>{ this.state.counter }</h3>*/}
                <ListGroup>
                    { // map bir dongudur dondugu elemanları yeni bir nesne yapıp aarray gibi dıondurur
                        //.map(category => bu her bir categry icin demek arrow dan sonra yapılcak seyi vericez)
                        this.state.categories.map(category => ( // map bir arraya uygulanır bakas biey geliyorsa hata alınablşir, map bir array function
                            // <ListGroupItem onClick={()=>this.setState({currentCategory: category.categoryName})} key={category.categoryId}>{category.categoryName}</ListGroupItem>
                            <ListGroupItem active={ category.categoryName === this.props.currentCategory?true:false }
                                onClick={()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>

                        ))
                    }
                    {/*<ListGroupItem>sda</ListGroupItem>*/}
                    {/*<ListGroupItem>sda</ListGroupItem>*/}
                    {/*<ListGroupItem>sda</ListGroupItem>*/}
                </ListGroup>
                <h4>{ this.props.currentCategory }</h4>
            </div>
        );
    }
}