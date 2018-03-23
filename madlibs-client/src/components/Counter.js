import React from 'react';

// props from MadlibSentence
const Counter = (props) => {
  return (
    <div>
      <button onClick={props.handleOnLike}>
        <div className="counter">&hearts; </div>
        {props.counter}
      </button>
    </div>
  )
}

export default Counter
