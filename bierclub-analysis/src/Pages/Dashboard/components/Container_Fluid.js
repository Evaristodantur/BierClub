import React from 'react';
import PageHeading from './PageHeading';
import Cajas from './Cajas/Cajas';
import LastProductInDB from './LastProductInDB';
import CategoriesInDb from './CategoriesInDb';
import AllProductsInDB from './AllProductsInDB/AllProductsInDB';

function Container_Fluid() {
  const cajas = [
    {
      id: 1,
      titulo: 'Products in Data Base',
      cifra: 135,
      borde: 'card border-left-primary shadow h-100 py-2',
      icono: 'fas fa-clipboard-list fa-2x text-gray-300',
    },
    {
      id: 2,
      titulo: 'Amount in products',
      cifra: 546.456,
      borde: 'card border-left-success shadow h-100 py-2',
      icono: 'fas fa-dollar-sign fa-2x text-gray-300',
    },
    {
      id: 3,
      titulo: 'Users quantity',
      cifra: 38,
      borde: 'card border-left-warning shadow h-100 py-2',
      icono: 'fas fa-user-check fa-2x text-gray-300',
    },
  ];

  return (
    <div className="container-fluid">
      <PageHeading></PageHeading>

      <div className="row">
        {cajas.map((caja) => (
          <Cajas
            key={caja.id}
            titulo={caja.titulo}
            cifra={caja.cifra}
            borde={caja.borde}
            icono={caja.icono}
          />
        ))}
      </div>

      <div className="row">
        <LastProductInDB></LastProductInDB>

        <CategoriesInDb></CategoriesInDb>
      </div>
      <h1 className="h3 mb-2 text-gray-800">
        All the products in the Database
      </h1>
      <AllProductsInDB></AllProductsInDB>
    </div>
  );
}

export default Container_Fluid;
