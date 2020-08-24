import React from 'react'

function Freinds(props) {
    const list =  props.list
console.log(list);
      const total= list.reduce((total,data) => total + data.salary,0)

console.log(total);

    return (
        <div>
    
    <p>Number  of freind : {list.length}</p>
    <p>Total Income of freiends: {total}</p>
    <h3>Friends</h3>
    {list.map((friend) => {
        return (
            <div style={{display: 'flex',margin: '5px', padding: '5px',background: "pink"}}>
            
                <img src={friend.imgurl} style={{height: '50px'}} alt=""/>
        <h4>{friend.name}</h4>
            </div>
        )
    })}
        </div>
    )
}

export default Freinds
