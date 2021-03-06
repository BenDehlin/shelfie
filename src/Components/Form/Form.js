import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
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

  componentDidUpdate(prevProp){
    const {id} = this.props.match.params
    if(!id && this.props !== prevProp){
      this.setState({id: '', name: '', price: '', img: '', edit: false})
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
      <section className="list">
        <section className="product form">
        <img src={img || 'https://via.placeholder.com/200'} />
        <h2>Image Url:</h2> 
        <input
          name='img'
          value={img}
          placeholder='Enter Img'
          onChange={(e) => this.handleChange(e.target)}
        />
        <h2>Name:</h2>
        <input
          name='name'
          value={name}
          placeholder='Enter Name'
          onChange={(e) => this.handleChange(e.target)}
        />
        <h2>Price: </h2>
        <input
          name='price'
          type='number'
          value={price}
          placeholder='Enter Price'
          onChange={(e) => this.handleChange(e.target)}
        />
        <div className="buttons">
        <button className="form-button"
          onClick = {() => {
            this.clearInputs()}}
        >Cancel</button>
        {edit ?
        <button className="form-button"
          onClick = {() => this.updateProduct()}
        >Save Changes</button> :
        <button className="form-button"
          onClick = {() => this.postProduct()}
        >Add to Inventory</button>
        }
        </div>
      </section>
    </section>
    )
  }
}

export default withRouter(Form)