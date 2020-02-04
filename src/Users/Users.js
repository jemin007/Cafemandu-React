
import React from 'react'
import Axios from 'axios'
import {
	Table
} from 'react-bootstrap'

class Users extends React.Component{
	construtor(){

		this.state={
			token:'',
			notLoggedIn: false
		}

	}

componentWillMount(){ // before component mounts 

if(localStorage.getItem('user_token')){

	this.setState({token:localStorage.getItem('user_token')})

}

else{

	this.setState({notLoggedIn:true})

}

}

componentDidMount(){

	// headers = {

	// }

	Axios.get('http://localhost:3023/users',{headers:{ Authorization: 'Bearer '+this.state.token}})
	.then((respone) => {


	})
	.catch((err) => {

	})

}






	render(){

		if(this.state.notLoggedIn){
			// return()
			<Redirect to='/login' />
		}


return(

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</Table>




	)

	
}
}

export default Users