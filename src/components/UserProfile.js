import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "ab",
      lastname: "xyz",
      email: "hello@gmail.com",
      store: "R",
      name:""
    };
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {

    let config = {
      method: "GET",
    };

    fetch("https://viewb.carrotid.com/api/v0/users/59fd471173327c6ea8b8d8d4", config)
      .then(response =>response.json().then(payload => ({ payload, response })))
      .then(({ payload, response }) => {
        if (!response.ok) {
          return Promise.reject(payload);
        } else {
            console.log(payload);
            this.setState({
                firstname: payload.firstName,
                lastname: payload.lastName,
                email: payload.email,
                store: payload.store_name,
            })
        }
      })
      .catch(err=>{
          console.log('ERROR',err)
      })
  }

  handleChange(e, name){
      let state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    
  }
  handleSubmit(){
      console.log('SUBMITTED', this.state.name, this.state.email);
  }
  render() {
    console.log("render");
    return (
      <div style={{ border: "1px solid #000" }}>
        <div>{this.state.firstname}</div>
        <div>{this.state.lastname}</div>
        <div>{this.state.email}</div>
        <div>{this.state.store}</div>
        <input type="text" value={this.state.name} onChange={(e)=>this.handleChange(e,'name')}/>
        <input type="text" value={this.state.email} onChange={(e)=>this.handleChange(e,'email')}/>
        <button onClick={()=>this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default UserProfile;
