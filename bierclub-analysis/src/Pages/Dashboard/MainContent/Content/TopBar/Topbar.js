import React from 'react'
import imgAvatar from '../../../../../assets/images/avatar.png';

function Topbar() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        

        <ul className="navbar-nav ml-auto">
      

          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Administrador
              </span>
              <img
                className="img-profile rounded-circle"
                src={imgAvatar}
                width="60"
              />
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Topbar
