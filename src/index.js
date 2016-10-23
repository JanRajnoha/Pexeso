import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import Card from './components/Card'
import CardState from './reducers/index'

const store = createStore(CardState)

const render = () => ReactDOM.render(
  <div><h1>Pexeso</h1><div>
     {store.getState().CardSource.map(card =>
       <Card key={card.Id} Id={card.Id} TurnCard={() => 
         store.dispatch({
           type: 'TurnCard',
           Id: card.Id
         })}>
       {(card.Turned || card.Completed) ? card.Value : "\u00a0"}</Card>)
     }
  </div>
  <div>
     <button className='NewGame' onClick={() => store.dispatch({ type: 'GenerateState' })}>Generate new game</button>
  </div></div>,
  document.getElementById('root')
)

render(store) 
store.subscribe(render)

/* 

"\u00a0"


  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  /><Card TurnCard={() => store.dispatch({ type: 'TurnCard' })}>
  {store.getState()}</Card>
  {store..map(Card => <Card TurnCard={() => store.dispatch({ type: 'TurnCard' })}>
  {Card.Value}</Card>)}
  <div>

//import App from './App';
//import Counter from './components/Counter'
//const rootEl = document.getElementById('root')
  <App /></div>
  */