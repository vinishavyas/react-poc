import React , { Component } from 'react';
import '../Auth/Login.css';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import {connect} from 'react-redux';
import { history } from '../history';

class Register extends Component {


    constructor(props) {

        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
          name: '',
          email: '',
          password: '',
          accept_tc : '',
          country : '',
          phone : '',
          type : '',
          message : '',
          errorItems : [],
          registerState : 0
        };
    }

    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };

    render() {
        if (this.state.type && this.state.message) {
            var classString = 'alert alert-' + this.state.type;
            var status = <div id="status" className={classString} ref="status">
                           {this.state.message}
                         </div>;
          }
        return (
            <form onSubmit={this.handleSubmit} method="POST">
            <section className="login-page register-page">
                <div className="container">
                    <div className="login-title">
                    <h1>Sign<span>Up</span></h1>
                    </div>
                    <div className="login-box">
                    <div className="loginForm">
                        <div className="field-required">
                        <p>Please fill the detail given below</p>
                        </div>
                        {status}
                        <div className="form-fields clearfix">
                            <div className="login-form-row">
                        <div className="form-group">
                            <label>Name <span className="red-color">*</span></label>
                            <div className="form-icon-col"><i className="fa fa-user"></i>
                            <input onChange={this.handleInputChange} value={this.state.name} type="text" placeholder="Name" name="name" />
                            { this.validator.message('name', this.state.name, 'required|min:3|max:50') }
                            </div>
                        </div>
                        <div className="form-group last-input">
                            <label>Email <span className="red-color">*</span></label>
                            <div className="form-icon-col"><i className="fa fa-envelope"></i>
                            <input onChange={this.handleInputChange} value={this.state.email} type="text" placeholder="Email" name="email" />
                            { this.validator.message('email', this.state.email, 'required|email|max:50') }
                            </div>
                        </div>
                        </div>
                            <div className="login-form-row">
                        <div className="form-group">
                            <label>Password <span className="red-color">*</span></label>
                            <div className="form-icon-col"><i className="fa fa-lock"></i>
                            <input onChange={this.handleInputChange} value={this.state.password} type="password" placeholder="Enter Your Password" name="password" />
                            { this.validator.message('password', this.state.password, 'required|min:8|max:16') }
                            </div>
                        </div>
                        <div className="form-group last-input">
                            <label>Country</label>
                            <div className="form-icon-col">
                            <select onChange={this.handleInputChange} value={this.state.country} className="form-control" name="country">
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="UK">UK</option>
                            </select>
                            </div>
                        </div>
                        </div>
                            <div className="login-form-row">
                        <div className="form-group">
                            <label>Phone <span className="red-color"></span></label>
                            <div className="form-icon-col"><i className="fa fa-phone"></i>
                            <input onChange={this.handleInputChange} value={this.state.phone} type="text" placeholder="Enter Your Phone Number" name="phone" />
                            </div>
                        </div>
                        <div className="form-group last-input">
                            <label>&nbsp;</label>
                            <div className="checkbox abc-checkbox propertyCheck">
                            <input onChange={this.handleInputChange} value={this.state.accept_tc} type="checkbox" className="styled" id="checkbox1" name="accept_tc" />
                            <label htmlFor="checkbox1"> Accept <span>terms & conditions </span></label>

                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="full-btn-col">
                        <input type="submit" value="SignUp" name="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>    
            </form>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.validator.allValid()) {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        } else {
            const { name, email, password, accept_tc, country, phone } = this.state;
    
            const user_details = {
                name,
                email,
                password,
                accept_tc,
                country,
                phone
            };
        
            axios
              .post('http://127.0.0.1:5000/register', user_details)
              .then((response) => {
                    if(response.data.status === 'success') {
                        this.setState({type : 'success',
                        message : 'You have successfully registerd into system. Now you an login with your details'});
                        history.push('/login');
                        this.props.dispatch({
                            type:'REGISTERED_SUCCESS',
                            data : 1,
                            message : this.state.message    
                        });
                    } else {
                        this.setState({errorItems : response.data.errors});
                        this.setState({type : 'danger',
                                message : 'Email address already exists.'});
                    }
                })
              .catch(err => {
                console.error(err);
              });
        }
        
      };
    
        
}
// export default Register; // Don’t forget to use export default!
export default connect()(Register);
