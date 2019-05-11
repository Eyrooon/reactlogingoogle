import React from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';


class App extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      imgSrc: null,
      name: null,
      email: null
    };

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    const res = response.profileObj;
    this.setState({
      imgSrc: res.imageUrl,
      name: res.name,
      email: res.email
    });
  }

  render () {
    return (
      <div className="App">
        <GoogleLogin
          clientId="491004959702-3bgqo54pt777f77dgl7cqd6s7e7rii81.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <br />
        {this.state.name ? (
        <div>
          <img 
            src={this.state.imgSrc}
            height="100px"
            width="100px"
          />
          <p>{`Name: ${this.state.name}`}</p>
          <p>{`Email: ${this.state.email}`}</p>
        </div>
        ) : null }
      </div>
    );
  }
}

export default App;
