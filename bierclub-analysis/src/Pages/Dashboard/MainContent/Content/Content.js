import React from 'react'
import Topbar from './TopBar/Topbar';
import Container_Fluid from './Container_Fluid/Container_Fluid'

function Content() {
    return (
      <div id="content">
        <Topbar></Topbar>
        <Container_Fluid></Container_Fluid>
      </div>
    );
}

export default Content
