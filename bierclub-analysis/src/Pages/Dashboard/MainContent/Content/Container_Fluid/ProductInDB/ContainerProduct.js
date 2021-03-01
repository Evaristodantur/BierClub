import React from 'react';

export default function ContainerProduct(props) {
    
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {props.titulo} <i class="fas fa-arrow-right"></i>{' '}
              {props.productName}
            </h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '25rem' }}
                src={props.imagen}
                alt={props.productName}
              />
            </div>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
}
