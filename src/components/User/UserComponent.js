import React from 'react';
import UserService from '../../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        // this.login = this.login.bind(this);
    }

    componentDidMount() {
        UserService.getUsers().then(response => this.setState({ users: response.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
        
    }

    // login(e){
    //     e.preventDefault();
        // if (this.state.text.length === 0) {
        //     return;
        // }
        // const account = {text: this.state.text};
        // console.log(account);
		// userAccount = document.getElementById("account").value
		// let userPassword = document.getElementById("password").value
        // UserService.userLogin(userAccount,userPassword).then(response => this.setState({ users: response.data }))
        //     .catch(error => {
        //         this.setState({ errorMessage: error.message });
        //         console.error('There was an error!', error);
        //     });
		// alert(userAccount +"  \n "+ userPassword)
	// }

	// createAccount(){
	// 	window.location.href="CreateAccount.html"
	// }

	// forgetPassword(){
	// 	window.location.href="ForgetPassword.html"
	// }

    render() {
        return (
            <div>
                <h1 className="text-center">UserList</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Account</td>
                            <td>User PassWord</td>
                            <td>User Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.userAccount}>
                                        <td> {user.userAccount}</td>
                                        <td> {user.userPassword}</td>
                                        <td> {user.userName}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                
                {/* <label>??????</label>
                <input 
                id="account" 
                onChange={this.handleChange}
                value={this.state.text} 
                />
                <br/>
                <label>??????</label>
                <input 
                id="password" 
                onChange={this.handleChange}
                value={this.state.text} 
                />
                <br/>
                <button onclick={this.login()}>??????</button> */}
                {/* <span >??????</span>
                <input id="account" type="text" />
                <br />
                <span >??????</span>
                <input id="password" type="password" />
                <br />
                <button onclick={this.login()}>??????</button>
                <button onclick={this.createAccount()}>????????????</button>
                <button onclick={this.forgetPassword()}>????????????</button> */}
            </div>

        )
    }

}

// const test = 123;

export default UserComponent
// export default const test = 123
