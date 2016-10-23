import React, {Component, propTypes}  from 'react'

export default class Card extends Component
{
    render()
    {        
        const { children, Id, TurnCard } = this.props
        return (
            <div className='Card' id={Id}>
               <button onClick={TurnCard}>{children}</button>
            </div>
        )
    }
}

