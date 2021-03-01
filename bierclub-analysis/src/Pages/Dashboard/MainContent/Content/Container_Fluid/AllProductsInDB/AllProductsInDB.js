import React, { Component } from 'react';
import axios from 'axios';
import Cabecera from './Cabecera';
import Filas from './Filas';



class AllProductsInDB extends Component {
  state = {
    data: [],
  };

  getRequest = () => {
    axios
      .get('http://localhost:3000/api/bierclub/getRegisteredUsers')
      .then(({data : info}) => {
        
        this.setState({ data: info.getRegisteredUsers });
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
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <Cabecera key="1" />
              </thead>
              <tfoot>
                <Cabecera key="2" />
              </tfoot>
              {this.state.data.map((fila) => (
                <Filas
                  key={fila.id}
                  name={fila.name}
                  email={fila.email}
                  suscription_status={fila.suscription_status}
                  newsletter_status={fila.newsletter_status}
                  admin={fila.admin}
                  verify={fila.verify}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProductsInDB;