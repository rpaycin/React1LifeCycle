import React, { Component } from 'react';
import Result from '../components/Result'
import Button from '../components/Button';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["item-1", "item-2"]
        }
    }

    //life cycle
    render() {
        return (
            <div>
                <input type="text" ref="txtItem" />
                <Button buttonText="Eleman Ekle" onClick={this.buttonClick.bind(this, true)} />
                <Button buttonText="Eleman Çıkar" onClick={this.buttonClick.bind(this, false)} />

                <Result items={this.state.items} />
            </div>
        );
    }

    //methods
    buttonClick = (isAdd) => {
        const { txtItem } = this.refs;//kontrolü direk böyle erişebiliyoruz
        let textboxValue = txtItem.value;//textboxın değerini this.refs.txtItem.value diye alabilirdik

        let itemArray = this.state.items;

        if (isAdd)
            itemArray.push(textboxValue);
        else
            itemArray = itemArray.filter(item => item !== textboxValue)

        // this.state.items.push(textboxValue); diye ekleyebiliriz ama state yukardaki gibi değiştiriliyor
        this.setState({ items: itemArray });

        txtItem.value = "";
    };


}

export default Main;