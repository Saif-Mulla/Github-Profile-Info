import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import $ from 'jquery';
import Profile from './Components/github/Profile';
import Search from './Components/github/Search';
import Repo from './Components/github/Repo';


class App extends Component{
  state = {  
    username : "Saif-Mulla",
    userdata : [],
    userRepos : [],
  }

  getuserdata = () =>{
    $.ajax({
      url : 'https://api.github.com/users/'+this.state.username ,
      dataType : 'json',
      success : function(data){
        this.setState({
          userdata : data,
        });
        console.log(data);
        

      }.bind(this),
      error : function(xhr,status,err){
        this.setState({username : null});
        alert(err);
      }.bind(this)
    });
  }

  getuserRepos = () =>{
    $.ajax({
      url : 'https://api.github.com/users/'+this.state.username+'/repos',
      dataType : 'json',
      success : function(data){
        const repoInfo = data.map((data) => {
          return{
            repoid : data.id,
            reponame : data.name,
            repodesc : data.description,
            repourl : data.html_url,
          }
        })
        this.setState({
          userRepos : repoInfo,
        })
        console.log("State",this.state);
      }.bind(this),
      error : function(xhr,status,err){
        this.setState({username : null});
        alert(err);
      }.bind(this)
    })
  }

  componentDidMount = () =>{
    this.getuserdata()
    this.getuserRepos()
  }

  searchUser = (user) =>{
    console.log(user);
    this.setState({
      username : user.username,
    },function(){
      this.getuserdata();
      this.getuserRepos();
    });
  }

  render(){

    return (
      <div className="App">
        <Navbar />
        <Search SearchUser={this.searchUser} />
        <Profile userData= {this.state.userdata} />
        <Repo RepoInfo = {this.state.userRepos} />
      </div>
    );
  }
}

export default App;
