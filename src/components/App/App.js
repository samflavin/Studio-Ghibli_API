import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Card, CardContent } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
const axios = require('axios');


class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    this.handleClick()
  }


  handleClick = () => {
    //get movies
    axios.get('/random')
      .then(response => {
        //send to index to store in redux
        this.props.dispatch({ type: 'SET_RANDOM', payload: response.data });
      })
      .catch(err=> {
        alert('Myizaki doesnt like you', err)
      })
    
  }





  render() {
    return (
      <div>
        <header className="App-header">
          <h1 align="center">Studio Ghibli API</h1>
          < br/>
        </header>
        <Card.Group itemsPerRow={4}>
          {this.props.storeInstance.random && this.props.storeInstance.random.length > 0 ?
            this.props.storeInstance.random.map(item => {
              console.log(item)
              return (
                <Card color='blue' fluid='true' raised='true'>
                  <h4>{item.title}</h4>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              )
            }) :
            <>no info</>
          }
        </Card.Group>
       
         

        <button onClick={this.handleClick}>Get a Giphy</button>
      </div>
    );
  }
}

const mapStateToProps = (storeInstance) => ({
  storeInstance
})

export default connect(mapStateToProps)(App);
