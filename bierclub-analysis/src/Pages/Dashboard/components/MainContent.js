import React from 'react'

import Footer from './Footer'
import Content from './Content'

function MainContent() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <Content></Content>
        <Footer></Footer>
      </div>
    );
}

export default MainContent
