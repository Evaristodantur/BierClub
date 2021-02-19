import React from 'react'

function Filas(props) {
    const categories = ['Category 01', 'Category 02', 'Category 03'];
    const colors = [
      ['text-danger', 'Red'],
      ['text-primary', 'Blue'],
      ['text-success', 'Green'],
    ];
    return (
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.description}</td>
          <td>${props.price}</td>
          <td>
            <ul>
              {categories.map((category, i) => (
                <li key={i}>{category}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {colors.map((color, i) => (
                <li key={i}>
                  <span className={color[0]}>{color[1]}</span>
                </li>
              ))}
              
            </ul>
          </td>
          <td>{props.stock}</td>
        </tr>
      </tbody>
    );
}

export default Filas;
