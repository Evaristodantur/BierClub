import React, { Component } from 'react';
import axios from 'axios';
import Category from './Category';

class CategoriesInDb extends Component {

  state = {
    categories: []
  }
  

  getRequest = () => {
    axios
      .get('http://localhost:3000/api/bierclub/getCategoryList')
      .then(({ data: info }) => {
        this.setState({ categories: info.data });
      })
      .catch((err) => {
        console.log(err.message);
      }); 
  }

  componentDidMount() {
    this.getRequest()
  }


  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Categories in Data Base
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {this.state.categories.map((category) => (
                <Category key={category.id} name={category.name}></Category>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesInDb;