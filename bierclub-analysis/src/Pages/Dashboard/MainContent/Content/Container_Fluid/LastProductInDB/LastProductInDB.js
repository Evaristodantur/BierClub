import React, { Component } from 'react';
import ContainerProduct from './ContainerProduct';
import axios from 'axios';
import sinImg from '../../../../../../assets/images/dummy-avatar.jpg';


let getLastProductAdded = axios.get(
  'http://localhost:3000/api/bierclub/getLastProductAdded'
);
let getLastProductSold = axios.get(
  'http://localhost:3000/api/bierclub/getLastProductSold'
);
let getTheMostExpensiveProductSold = axios.get(
  'http://localhost:3000/api/bierclub/getTheMostExpensiveProductSold'
);

class LastProductInDB extends Component {
  state = {
    data: []
  };

  getRequest = () => {
    axios
      .all([
        getLastProductAdded,
        getLastProductSold,
        getTheMostExpensiveProductSold,
      ])
      .then((resp) => {
        console.log(resp[2].data.getTheMostExpensiveProductSold.name);

        this.setState({
          data: [
            {
              id: 1,
              titulo: 'Last Product Added',
              productName: resp[0].data.getLastProductAdded.name,
              description: resp[0].data.getLastProductAdded.description,
              imagen:
                resp[0].data.getLastProductAdded.imagen != 'undefined'
                  ? resp[0].data.getLastProductAdded.images[0].name
                  : sinImg,
            },
            {
              id: 2,
              titulo: 'Last Product Sold',
              productName: resp[1].data.getLastProductSold.name,
              description: resp[1].data.getLastProductSold.description,
              imagen:
                resp[1].data.getLastProductSold.imagen != 'undefined'
                  ? resp[1].data.getLastProductSold.images[0].name
                  : sinImg,
            },
            {
              id: 3,
              titulo: 'The Most Expensive Product Sold',
              productName: resp[2].data.getTheMostExpensiveProductSold.name,
              description:
                resp[2].data.getTheMostExpensiveProductSold.description,
              imagen:
                resp[2].data.getTheMostExpensiveProductSold.imagen !=
                'undefined'
                  ? resp[2].data.getTheMostExpensiveProductSold.images[0].name
                  : sinImg,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    this.getRequest();
  }

  render() {
    
    return (
      <>
        {this.state.data.map((box) => (
          <ContainerProduct key={box.id} titulo={box.titulo} productName={box.productName} description={box.description} imagen={box.imagen}/>
        ))}
      </>
    );
  }
}

export default LastProductInDB;