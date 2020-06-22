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
    console.log('like')
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
    console.log('dislike')
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

  render() {
    return (
      <Container>
        { this.state.recipes.map( recipe => {
          return (
            <Card className="Card" key={ recipe.id }>
              <Card.Title className="Title">{ recipe.name }</Card.Title>
              <Card.Body>
                <Card.Text>{ recipe.description }</Card.Text>
                <Card.Text>Review: { recipe.review }</Card.Text>
                <Card.Text>Likes: { recipe.likes }</Card.Text>
                <Button onClick={ () => this.incrementMe(recipe.id) }>Like</Button>
                <Button onClick={ () => this.decrementMe(recipe.id) }>Dislike</Button><br />
                <Link to={`/recipes/${recipe.id}`} target="_blank" className="issueTitle">{recipe.name}</Link>
              </Card.Body>
            </Card>
          )
        })}
      </Container>
    )
  }
}
