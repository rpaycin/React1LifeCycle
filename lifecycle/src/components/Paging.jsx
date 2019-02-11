import React, { Component } from 'react';

class Paging extends Component {
    //MOUNT LIFE CYCLE. component sayfa yükleme aşamaları
    componentWillMount = () => {
      console.log("paging sayfaya yüklenecek");
    };
    
    render() {
        console.log("paging render ediliyor.");

        return (
            <div>
                <button>Geri</button>
                <button>İleri</button>
            </div>
        );
    }

    componentDidMount() {
      console.log("paging sayfaya yüklendi"); 
    }
    componentWillUnmount = () => {      
        console.log("paging sayfadan kaldırıldı");
    };
    
}

export default Paging;