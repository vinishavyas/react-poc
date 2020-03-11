import React, {Component} from 'react';
import '../Auth/Login.css';
import {fbIcon, loginLeftPanel, googlePlus} from '../images';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

class Login extends Component {

    constructor(props) {
        super(props)
        this.validator = new SimpleReactValidator();
        this.state = {
            email : "",
            password : "",
            alert : 0,
            message : "",
            alertType : ""
        }
    }

    render () {
        if (this.props.type === 1 || this.state.alert === 1) {
            var classString = (this.state.alert === 1) ? 'alert alert-'+this.state.alertType : 'alert alert-success'
            var status = <div id="status" className={classString} ref="status">
                           {(this.state.message === "") ? this.props.message : this.state.message}
                         </div>;
        }
        return (
            <section className="login-page">
                <div className="container">
                    <div className="login-title"><h1>Log<span>In</span></h1>
                    </div>
                    <div className="login-box">
                        <div className="row">
                            <div className="col-md-6 left-log-bar">
                                <div className="left-log">
                                    <h2>Login with</h2>
                                    <div className="or-icon">or</div>
                                    <div className="login-social-icons">
                                        <a href="/"><img src={fbIcon} alt="" /></a>
                                        <a href="/"><img src={googlePlus} alt="" /></a>
                                    </div>
                                    <div className="login-left-bg"><img src={loginLeftPanel} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 right-log-bar">
                                <form onSubmit={this.handleSubmit} method="POST">
                                    <div className="loginForm">
                                        {status}
                                        <div className="form-group">
                                            <label>Email address <span className="red-color">*</span></label>
                                            <div className="form-icon-col"><i className="fa fa-envelope"></i> <input type="text" placeholder="Email address" name="email" onChange={this.changeInput} />
                                            { this.validator.message('email', this.state.email, 'required') }
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password <span className="red-color">*</span></label>
                                            <div className="form-icon-col"><i className="fa fa-lock"></i> <input type="password" placeholder="Password" name="password" onChange={this.changeInput}/>
                                            { this.validator.message('password', this.state.password, 'required') }
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Login" name="" />
                                            <div className="forgotPassword"><a href="/">Forgot Password?</a> 
                                            </div>
                                        </div>
                                        <div className="form-group margin-B-0 login-note-text">If your are not an exiting customer, you need to <Link to={`/register`}>Register</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.validator.allValid()) {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        } else {
            const {email, password} = this.state;
            const login_details = {
                email,
                password
            }
            axios.post("http://127.0.0.1:5000/login", login_details)
            .then((response) => {
                if(response.data.status === 'error') {
                    console.log(response);
                    this.setState({
                        message : response.data.message,
                        alert : 1,
                        alertType : 'danger'
                    })
                } else {
                    this.setState({
                        message : response.data.message,
                        alert : 1,
                        alertType : 'success'
                    })
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
        
}

const mapStateToProps = (state) => {
    return {
        type: state.data,
        message : state.message
    }
}

export default connect(mapStateToProps)(Login);
