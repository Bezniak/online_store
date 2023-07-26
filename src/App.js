import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Items} from "./components/Items";
import {Category} from "./components/Category";
import {ShowFullItem} from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [

                {
                    id: 1,
                    title: 'Plant',
                    img: 'plant.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'plant',
                    price: '19.99',
                },
                {
                    id: 2,
                    title: 'Chair',
                    img: 'chair.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'furniture',
                    price: '85.99',
                },
                {
                    id: 3,
                    title: 'Sofa',
                    img: 'sofa.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'furniture',
                    price: '480.99',
                },
                {
                    id: 4,
                    title: 'Mirror',
                    img: 'mirror.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'decor',
                    price: '69.99',
                },
                {
                    id: 5,
                    title: 'Lamp',
                    img: 'lamp.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'light',
                    price: '99.99',
                },
                {
                    id: 6,
                    title: 'Chair with footrest',
                    img: 'single_chair.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'furniture',
                    price: '269.99',
                },
                {
                    id: 7,
                    title: 'Flower in a pot (artificial)',
                    img: 'flower.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'plant',
                    price: '49.99',
                },
                {
                    id: 8,
                    title: 'Table with chairs',
                    img: 'table_chair.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'furniture',
                    price: '1385.99',
                },
                {
                    id: 9,
                    title: 'Coffee table',
                    img: 'coffee_table.png',
                    desc: "Lorem Ipsum is simply dummy text of the printing.",
                    category: 'furniture',
                    price: '980.75',
                },
            ],
            showFullItem: false,
            fullItem: {},
        }

        this.state.currentItems = this.state.items;

    }

    render() {
        return (
            <div className={'wrapper'}>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Category chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.showFullItem &&
                    <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}

                <Footer/>
            </div>
        );
    }


    onShowItem = (item) => {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory = (category) => {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder = (id) => {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder = (item) => {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }

}

export default App;