//export default (state = 0, action) => {
//  switch (action.type) {
//    case 'INCREMENT':
//      return state + 1
//    case 'DECREMENT':
//      return state - 1
//    default:
//    console.log('asdfsdf');
//      return state
//  }
//}

const CardsChars = ['a', 'b', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 'a', 'b', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's'];

const GetState = () => 
{
  let NewState = [];

  for (let i = 0; i < 32; i++)
  {
    let SelectedId = CheckId(NewState);

    NewState = [...NewState, {
      Id: i,
      Value: CardsChars[SelectedId],
      Turned: false,
      Completed: false
    }];
  }

  return NewState;
}

const CheckId = (States) =>
{
  let NewId = 0;
  let CheckResult = true;

  while (CheckResult)
  {
    CheckResult = false;
    
    NewId = Math.floor(Math.random() * 32)
    let pexeso = false;

    States.map(t => 
    {
      if (t.Value === CardsChars[NewId])
      {
        if (pexeso === true)
          CheckResult = CheckResult || true;
        else
          pexeso = true;
      }
    })
  }

  return NewId;
}

const TurnCard = (state, action) =>
{
//  switch (action.type)
  //{
    //case 'TurnCard':
    if (state.Id !== action.Id || state.Turned === true || state.Completed === true)
      return state;
      
    return {...state,
          Turned: !state.Turned}
//  }
}

const CheckTurnedCards = (state) =>
{
  let TurnedCards = [];
  state.map(t => 
  {
    if (t.Turned && !t.Completed)
    {
      TurnedCards = [...TurnedCards, t];
    }
  })

  if (TurnedCards.length === 2)
    state.map(t => (t.Turned && !t.Completed) ? t.Turned = !t.Turned : t.Turned)
  return state;
}

const CheckEndGame = (state) =>
{
  let RestedCards = 0;
  let TurnedCards = []
  state.map(t => 
  {
    if (!t.Completed)
    {
      RestedCards++
      
      if (t.Turned)
      {
        TurnedCards = [...TurnedCards, t];
      }
    } 
  })

  if (TurnedCards.length === 2)
    if (TurnedCards[0].Value === TurnedCards[1].Value)
    {
      state.map(t => (t.Turned && !t.Completed) ? t.Completed = !t.Completed : t.Turned)
      RestedCards = RestedCards -2
    }

  if (RestedCards === 0)
    alert("Game is over")
    
  return state;
}

export default (state = [], action) => 
{
  switch (action.type)
  {
    case 'TurnCard':
      state = CheckTurnedCards(state);
      state = state.map(t => TurnCard(t, action))
      state = CheckEndGame(state);
      return state
    case 'pok':
    console.log('what the fuck am i doing?');
      break;
    case 'GenerateState':
      return GetState(); //{ 
        //Attempts: 0, 
        /*CardSource:*/ 
      //}
    default:
      return GetState();//{ 
  //      Attempts: 0, 
    //    CardSource: GetState()
      //};
  }
}