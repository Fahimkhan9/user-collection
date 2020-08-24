import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
function User(props) {
    const {name,age,imgurl,address,bio,salary} = props.user
    console.log(name);
    return (
        <div className="users">
      <div class="card mb-3" style={{maxWidth: "540px"}}  >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={imgurl}  class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Age:  {age}</p>
    <p class="card-text">Address:  {address}</p>
    <p class="card-text">Salary:  {salary}</p>
    {/* <p class="card-text">Bio:  {bio}</p> */}
        <p class="card-text"><button class="btn btn-primary" onClick={() => props.handleAdd(props.user)} ><FontAwesomeIcon icon={faPlusSquare} />Add</button></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default User
