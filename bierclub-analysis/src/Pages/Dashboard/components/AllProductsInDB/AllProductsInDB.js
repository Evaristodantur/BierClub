import React from 'react';
import Cabecera from './Cabecera';
import Filas from './Filas';

function AllProductsInDB() {
  const filas = [
    {
      id: 1,
      name: 'Tiger Nixon',
      description: 'System Architect',
      price: '320,800',
      stock: '245',
    },
    {
      id: 2,
      name: 'Jane Doe	',
      description: 'Fullstack developer	',
      price: '320,800',
      stock: '245',
    },
  ];
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
            {filas.map((fila) => (
              <Filas
                key={fila.id}
                name={fila.name}
                description={fila.description}
                price={fila.price}
                stock={fila.stock}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllProductsInDB;
