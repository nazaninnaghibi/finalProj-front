import axios from 'axios';
import React, { useState } from 'react';

const DisplayFlight = ({ id, from, to, no , removeTask })  => {

  return (
    <div className='task'>
      <div className='task-name'>

        {/* <button className='remove-task' onClick={() => removeTask(id)}>
        Delete
        </button> */}
       
        <select>
          <option>{from}</option>
        </select>
      </div>
    </div>
  );
}

export default DisplayFlight;
