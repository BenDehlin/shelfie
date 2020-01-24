import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      price: 0,
      img: '',
      edit: false
    }
    this.postProduct = this.postProduct.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    console.log(this.props)
    if(id){
      console.log('hit')
      axios.get(`/api/product/${id}`).then(results => {
        const {name, price, img} = results.data[0]
        console.log(results.data)
        this.setState({id, name, price, img, edit: true})
      })
    }
  }

  // componentDidUpdate(prevProp){
  //   const {id} = this.props
  //   if(id && prevProp.id !== id){
  //     axios.get(`/api/product/${id}`).then(results => {
  //       const {name, price, img} = results.data[0]
  //       this.setState({name: name, price: price, img: img, edit: true})
  //     })
  //   }
  // }

  handleChange=({name, value})=> {
    this.setState({[name]: value})
  }

  postProduct(){
    const {name, price, img} = this.state
    axios.post('/api/product', {name, price, img}).then(results => {
      this.clearInputs()
      this.props.history.push('/')
    }).catch(err => console.log(err))
  }

  updateProduct(){
    const {id} = this.state
    const {name, price, img} = this.state
    axios.put(`/api/product/${id}`, {name, price, img}).then(results => {
      this.clearInputs()
      this.props.history.push('/')
    })
  }

  clearInputs(){
    this.props.history.push('/')
    this.setState({name: '', price: 0, img: '', edit: false})
  }

  render(){
    const {edit, name, price, img} = this.state
    return(
      <section className="form">
        <input
          name='name'
          value={name}
          placeholder='Enter Name'
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name='price'
          value={price}
          placeholder='Enter Price'
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name='img'
          value={img}
          placeholder='Enter Img'
          onChange={(e) => this.handleChange(e.target)}
        />
        <div className="buttons">
        <button
          onClick = {() => {
            this.clearInputs()}}
        >Cancel</button>
        {edit ?
        <button
          onClick = {() => this.updateProduct()}
        >Update</button> :
        <button
          onClick = {() => this.postProduct()}
        >Add to Inventory</button>
        }
        </div>
      </section>
    )
  }
}

export default withRouter(Form)