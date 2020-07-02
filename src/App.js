import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      tasks: []
    }  // esta es la fuente de info. 
  }

  handleChange(e) { // uno de los actores que actualiza el estado
    this.setState({ // la funcion que voy a usar para actualizar el estado.
      inputValue: e.target.value //actualizame la propiedad inputValue con el valor e.target.value
    })
    console.log(e.target.value)
  }

  handleClick() { // aca leemos la info   //aca tratamos al objeto como un objeto de javaScript

    //leemos la propiedad inputValue de nuestro estado.
    const newValue = this.state.inputValue

    //leemos la propiedad tasks de nuestro estado 
    const newTasks = this.state.tasks

    //agregamos el nuevo valor
    newTasks.push(newValue)

    //ahora actualizo el estado

    this.setState({
      tasks: newTasks,
      inputValue:""
    })

  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h2>To do list</h2>
          <input value={this.state.inputValue} onChange={(e) => this.handleChange(e)} type='text' />
          <button onClick={() => this.handleClick()}>Add</button>
        </div>

        <ul>
          {this.state.tasks.map((task, key) => {
            return (
            <li key={key}>{task}</li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }

}

export default App;
