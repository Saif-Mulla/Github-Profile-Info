import React,{Component} from 'react';

class Search extends Component{
    state = {
        username : '',
    }
    render(){
        this.handleChange=(e)=>{
            console.log(e.target.value);
            this.setState({
                username : e.target.value,
            });
        }
        this.handleSubmit=(e)=>{
            e.preventDefault();
            this.props.SearchUser(this.state);
            this.setState({
                username : '',
            });
        }
        return(
            <div id="search_bar" className="container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Search Github User</label>
                    <input type="text" onChange={this.handleChange} name="username" className="form-control" value={this.state.username} />
                </form>
            </div>
        )
    }       
}

export default Search