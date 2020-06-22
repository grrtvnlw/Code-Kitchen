import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card, Button } from 'react-bootstrap'
import '../App.css';
import { Link } from 'react-router-dom'

export default class Recipes extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/recipes')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recipes: data,
        })
      })
  }
  
  incrementMe = (id) => {
    fetch(`/api/v1/recipes/${id}/like`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        let newRecipes = [...this.state.recipes];
        let index = newRecipes.findIndex(recipe => recipe.id === id);
        newRecipes.splice(index, 1, data)
        this.setState({
          recipes: newRecipes,
        })
      })
  }

  decrementMe = (id) => {
    fetch(`/api/v1/recipes/${id}/dislike`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        let newRecipes = [...this.state.recipes];
        let index = newRecipes.findIndex(recipe => recipe.id === id);
        newRecipes.splice(index, 1, data)
        this.setState({
          recipes: newRecipes,
        })
      })
  }

  deleteMe = (id) => {
    fetch(`/api/v1/recipes/${id}`, {
      method: 'DELETE'
    })
      // .then(res => res.json())
      // .then(data => {
        .then(res => {
          console.log(res)
          if (res.status === 204) {
            let newRecipes = [...this.state.recipes];
            newRecipes = newRecipes.filter(recipe => recipe.id !== id);
            this.setState({
              recipes: newRecipes,
            })
          }
      })
  }

  render() {
    return (
      <Container>
        { this.state.recipes.map( recipe => {
          return (
            <Card className="Card" key={ recipe.id }>
              <Card.Title className="Title">{ recipe.name }<span><Button onClick={ () => this.deleteMe(recipe.id) } className="p-1 ml-3">x</Button></span></Card.Title>
              <Card.Body>
                <Card.Text>{ recipe.description }</Card.Text>
                <Card.Text>Review: { recipe.review }</Card.Text>
                <Card.Text>Likes: { recipe.likes }</Card.Text>
                <Button onClick={ () => this.incrementMe(recipe.id) } className="p-1 m-1">Like</Button>
                <Button onClick={ () => this.decrementMe(recipe.id) } className="p-1 m-1">Dislike</Button><br />
                <Link to={`/recipes/${recipe.id}`} target="_blank" className="issueTitle">{recipe.name}</Link>
              </Card.Body>
            </Card>
          )
        })}
      </Container>
    )
  }
}
