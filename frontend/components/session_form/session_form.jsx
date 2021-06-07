import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  demoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: "test@example.com",
      password: "password",
    };
    this.props.processForm(demoUser).then(() => this.props.history.push("/"));
  }

  insertDemoUser() {
    if (this.props.formType === "login") {
      return (
        <div className="demo-login">
          <h2>No Account? Try a demo!</h2>
          <button onClick={this.demoUser}>demo</button>
        </div>
      );
    }
    return null;
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === "login") {
      return (
        <>
          <header className="session-header">
            <h1 className="logo-header">
              <a href="/"> TableToppers </a>
            </h1>
          </header>

          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="sign-log-tabletoppers">
                Log in to TableToppers
              </div> 
              <br />
              New here? {this.props.navLink}
              {this.renderErrors()}
              <div className="login-form">
                <br />
                <label>
                  <input
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.update("email")}
                    className="login-input"
                  />
                </label>
                <br />
                <label>
                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update("password")}
                    className="login-input"
                  />
                </label>
                <br />
                <input
                  className="session-submit"
                  type="submit"
                  value="Log In"
                />
              </div>
              {this.insertDemoUser()}
            </form>
            <img
              src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
              className="log-sign-pic"
            ></img>
          </div>
        </>
      );
    } else {
      return (
        <>
          <header className="session-header">
            <h1 className="logo-header">
              <a href="/"> TableToppers </a>
            </h1>
          </header>
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit} className="signup-form-box">
              <div className="sign-log-tabletoppers">
                Sign Up for TableToppers
              </div> 
              <br />
              {this.renderErrors()}
              <div className="signup-form">
                <br />
                <label>
                  <input
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.update("username")}
                    className="login-input"
                  />
                </label>
                <br />
                <label>
                  <input
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.update("email")}
                    className="login-input"
                  />
                </label>
                <br />
                <label>
                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update("password")}
                    className="login-input"
                  />
                </label>
                <br />
                <input
                  className="session-submit"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="bottom-signup">
                Already on TableToppers? {this.props.navLink}
              </div>
            </form>
            <img
              src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
              className="log-sign-pic"></img>
          </div>
        </>
      );
    }
  }
}

export default SessionForm;
