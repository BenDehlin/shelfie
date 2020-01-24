import React, {Component} from 'react'
import axios from 'axios'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      id: ''
    }
    // this.getInventory = this.getInventory.bind(this)
  }
  // componentDidMount(){
  //   this.getInventory()
  // }

  // getInventory(){
  //   axios.get('/api/inventory').then(results => {
  //     this.setState({inventory: results.data})
  //   }).catch(err => console.log(err))
  // }

  // deleteProduct = (id) => {
  //   axios.delete(`/api/product/${id}`).then(results => {
  //     this.setState({inventory: results.data})
  //   }).catch(err => console.log(err))
  // }

  // productToEdit=(id)=>{
  //   this.setState({id: id})
  // }

  render(){
    const {inventory, id} = this.state
    return(
      <HashRouter>
        <div>
          <Header />
          {routes}
          {/* <Dashboard 
            getInventory={this.getInventory} 
            inventory={inventory}
            productToEdit={this.productToEdit} />
          <Form getInventory={this.getInventory} id={id} /> */}
        </div>
      </HashRouter>
    )
  }
}