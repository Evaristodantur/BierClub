import React from 'react'

function Filas(props) {
    
    return (
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.suscription_status}</td>
          <td>{props.newsletter_status}</td>
          <td>{props.admin}</td>
          <td>{props.verify}</td>
        </tr>
      </tbody>
    );
}

Filas.defaultProps = {
  name: 'Sin nombre',
  email: '',
  suscription_status: 0,
  newsletter_status: 0,
  admin: 0,
  verify: 0
};

export default Filas;
