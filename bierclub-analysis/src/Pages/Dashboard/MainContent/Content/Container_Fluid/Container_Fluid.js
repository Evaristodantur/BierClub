import React, { Component } from 'react';
import PageHeading from './PageHeading/PageHeading';
import Boxes from './Boxes/Boxes';
import axios from 'axios';
import ProductInDB from './LastProductInDB/ProductInDB';
import CategoriesInDb from './CategoriesInDb/CategoriesInDb';
import AllProductsInDB from './AllProductsInDB/AllProductsInDB';

let productsInDbEndPoint = axios.get(
  'http://localhost:3000/api/bierclub/getTotalProductsAdded'
);
let amountInProductsEndPoint = axios.get(
  'http://localhost:3000/api/bierclub/getTotalSalesMade'
);
let userQuantityEndPoint = axios.get(
  'http://localhost:3000/api/bierclub/getTotalRegisteredUsers'
);

class Container_Fluid extends Component {
  state = {
    data: []
  };

  getRequest = () => {
    axios
      .all([
        productsInDbEndPoint,
        amountInProductsEndPoint,
        userQuantityEndPoint,
      ])
      .then(
        axios.spread((...responses) => {

          this.setState({
            data: [
              {
                id: 1,
                titulo: 'Products in Data Base',
                cifra: responses[0].data.getTotalProductsAdded,
                borde: 'card border-left-primary shadow h-100 py-2',
                icono: 'fas fa-clipboard-list fa-2x text-gray-300',
              },
              {
                id: 2,
                titulo: 'Amount in products',
                cifra: responses[1].data.getTotalSalesMade,
                borde: 'card border-left-success shadow h-100 py-2',
                icono: 'fas fa-dollar-sign fa-2x text-gray-300',
              },
              {
                id: 3,
                titulo: 'Users quantity',
                cifra: responses[2].data.getTotalRegisteredUsers,
                borde: 'card border-left-warning shadow h-100 py-2',
                icono: 'fas fa-user-check fa-2x text-gray-300',
              },
            ],
          });
        })
      )
      .catch((err) => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    this.getRequest();
  }

  render() {
    
    return (
      <div className="container-fluid">
        <PageHeading />

        <div className="row">
          {this.state.data.map((box) => (
            <Boxes
              key={box.id}
              titulo={box.titulo}
              cifra={box.cifra}
              borde={box.borde}
              icono={box.icono}
            />
          ))}
        </div>

        <div className="row">
          <ProductInDB></ProductInDB>

          <CategoriesInDb></CategoriesInDb>
        </div>
        <h1 className="h3 mb-2 text-gray-800">
          All users in the Database
        </h1>
        <AllProductsInDB></AllProductsInDB>
      </div>
    );
  }
}

export default Container_Fluid;
