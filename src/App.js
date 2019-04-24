import React, { Component } from 'react';
import {connect } from 'react-redux'
import './App.css';
import {clearError} from './store/actions'

const mapStateToProps = (state,props) =>{
  return {
    total : state.allSkiDays.length,
    powder: state.allSkiDays.filter(day => day.powder).length,
    backcountry: state.allSkiDays.filter(day => day.backcountry).length,
    errors : state.errors,
    propFromParent : props.hi
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onClearError(index){
      dispatch(clearError(index))
    }
  }
}

class App extends Component {
 
  render() {
    console.log(this.props);
    let errorMessage = (this.props.errors.length > 0 )? (
      <p className="error" onClick={() => this.props.onClearError(0)} >{this.props.errors[0]}</p>
      ) : ""
    
      
    return (
      <div className="App">
        <header className="App-header">
          {errorMessage}
          <p> total Ski Days: {this.props.total}   </p>
          <p> powder Days: {this.props.powder}   </p>
          <p> backcountry Days: {this.props.backcountry}   </p>
          <p> propFromParent : {this.props.propFromParent}   </p>

        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
