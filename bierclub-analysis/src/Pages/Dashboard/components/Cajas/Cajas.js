import React from 'react';
import propTypes from 'prop-types';

function Cajas(props) {
    return (
      <div className="col-md-4 mb-4">
        <div className={props.borde}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {' '}
                  {props.titulo}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.cifra}
                </div>
              </div>
              <div className="col-auto">
                <i className={props.icono}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

Cajas.propTypes = {
  borde: propTypes.string.isRequired,
  titulo: propTypes.string.isRequired,
  cifra: propTypes.number.isRequired,
  icono: propTypes.string.isRequired
};

Cajas.defaultProps = {
  borde: 'card border-left-primary shadow h-100 py-2',
  titulo: 'no hay',
  cifra: 0,
  icono: '',
};

export default Cajas
