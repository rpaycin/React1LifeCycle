import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Paging from './Paging';

class Result extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>

                {this.props.items.length > 3 && <Paging />}
            </div>
        )
    }

    renderList = () => {
        if (this.props.items == null)
            return;
        let liItems = [];

        this.props.items.map(function (item, i) {
            liItems.push(<li key={i}>{item}</li>);//li ler key bekliyor
        });

        return liItems;
    }

    //STATE LIFE CYCLE. komponent update edilince çalışır
    //komponent in state veya props u değişirse state life cycle metotları çalışacak
    componentWillReceiveProps = (nextProps) => {
        console.log("resulta yeni props değerleri geldi.");// bu metot sadece props için çalışır.nextprops da yeni gelen prop değerleri bulunur
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("resulta component update edilecek mi?");//nextprops da yeni gelen prop değerleri, nextstate de ise yeni gelen state değerleri
        return true;
    };

    componentWillUpdate = (nextProps, nextState) => {
        console.log("resulta component update edilecek");
    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log("resulta component update edildi");
    };
}

//items props a değer geçilmediği zaman default değerler set edilir
Result.defaultProps = {
    items: ["default-item1", "default-item2"]
}

//componentteki prop ların tip kontrolü yapılır. items propu burda array tipinde ve değer gelmesi zorunlu. eğer değer gelmezse console da hata verecek
Result.propTypes = {
    items: PropTypes.array.isRequired,
    message: PropTypes.string
}

export default Result;