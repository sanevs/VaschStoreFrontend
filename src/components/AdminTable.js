import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import PersonClient from '../http_client/PersonClient'
import ProductClient from "../http_client/ProductClient";
import { IoAdd } from "react-icons/io5";

export class AdminTable extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            products: [],
            users: []
        }
    }

    componentDidMount()
    {
      ProductClient.getProducts()
        .then(response =>{
          this.setState({
            products: response.data
          })
      })
      PersonClient.getPersons(this.props.userId)
        .then(response =>{
          this.setState({
            users: response.data
          })
      })
    }
    priceFormatter = data =>{
        return <>
            {data} $
        </>
    }
    imageFormatter = data =>{
        return <>
            <img className='table-img' src={data}></img>
        </>
    }
    usersColumns = [
        {
            dataField: "id",
            text: "Id",
            sort: true
        },
        {
            dataField: "name",
            text: "Name",
            sort: true
        },
        {
            dataField: "email",
            text: "Email",
            sort: true
        },
        {
            dataField: "role.name",
            text: "Role",
            sort: true
        }
    ]
    productColumns = [
        {
            dataField: "id",
            text: "Id",
            sort: true
        },
        {
            dataField: "image",
            text: "Image",
            sort: true,
            formatter: this.imageFormatter
        },
        {
            dataField: "name",
            text: "Name",
            sort: true
        },
        {
            dataField: "price",
            text: "Price",
            sort: true,
            formatter: this.priceFormatter
        },
        {
            dataField: "category.name",
            text: "Category",
            sort: true
        }

    ]
  render() {
    return (<>
        <div className='table-header'>Users: <p><IoAdd/></p></div> 
    { this.state.users.length !== 0 &&
      <BootstrapTable keyField={"id"}
        columns={this.usersColumns}
        data={this.state.users} 
        striped hover 
      />}
      <br/>
      <div className='table-header'>Products: <p><IoAdd/></p></div> 
      <br/>
      { this.state.products.length !== 0 &&
      <BootstrapTable keyField={"id"}
        columns={this.productColumns}
        data={this.state.products} 
        striped hover 
      />}
    </>
    )
  }
}

export default AdminTable