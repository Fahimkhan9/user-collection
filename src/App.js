import React from 'react';

import './App.css';
import fakeData from  './fakeData/shuffle'
import { useState } from 'react';
import User from './Comp/User';
import Friends from './Comp/Friends';
function App() {
  const firstTenUser = fakeData.slice(1,11)
  // console.log(firstTenUser);
  const [user,setUser] = useState(firstTenUser)
  const [list,setList] = useState([])

  const handleAdd = (friend) => {
    setList([...list,friend])
    console.log(list);
  }

  return (
    <div >
      <div className="header">
        <h1>User collection</h1>
        
      </div>
<div className="body">
<div className="users">
{user.map((data) => {
  return (
  <User  user={data}   handleAdd={handleAdd} />

  )
})}
      </div>
      <div className="friends">
<Friends list={list} />
      </div>
</div>
    
    </div>
  );
}

export default App;
