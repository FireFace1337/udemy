import {Component} from "react";


import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: 'Увеличить возраст'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }


  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years} </h1>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <br/>
        <a href={link}>My profile</a>
      </div>
      )
    }
  }

function App() {
  return (
    <div className="App">
      <WhoAmI name="Max" surname="Lavrov" link="facebook.com"/>
      <WhoAmI name="Andrey" surname="Bagrov" link="vk.com"/>
    </div>
  );
}

export default App;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  increment = () => {
    this.setState(state => ({
        counter: state.counter < 50 ? state.counter + 1 : state.counter
    }))
  }

  decrement = () => {
    this.setState(state => ({
      counter: state.counter > -50 ? state.counter - 1 : state.counter
    }))
  }
  
  random = () => {
    this.setState(state => ({
      counter: Math.floor(Math.random() * 50)
    }))
  }
  
  render() {
    const {counter} = this.props;
    return (
      <div class="app">
        <div class="counter">{this.state.counter}</div>
        <div class="controls">
          <button onClick={this.increment}>INC</button>
          <button onClick={this.decrement}>DEC</button>
          <button>RND</button>
          <button>RESET</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App counter={-48}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props 
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов