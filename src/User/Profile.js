import React, { Component } from 'react';

import '../User/assets/Profile.css';

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="innerpage-banner">
                    <div className="container">
                        <div className="innerpage-banner-text">
                            <h1>My <span>Account</span></h1>
                        </div>
                    </div>
                </div>

                <div className="breadcrumb-sec">
                    <div className="container">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>My Account</li>
                        </ul>
                    </div>
                </div>

                <section className="middle-part dashboard-page">
                    <div className="dashboard-tabs full-wdth clearfix">
                        <div className="container">
                            <ul className="nav nav-tabs">
                                <li>
                                    <div className="profile-pic"><img src="images/user1.png" alt="" /></div>
                                    <div className="user-name2 dis-block">Cathy D’Cruze</div>
                                </li>
                                <li><a className="active" data-toggle="tab" href="#tab1"><i className="fa fa-user"></i> My Profile</a></li>
                                <li><a data-toggle="tab" href="#tab2"><i className="fa fa-pencil"></i> Edit Profile</a></li>
                                <li><a data-toggle="tab" href="#tab3"><i className="fa fa-list-alt"></i> Applied Jobs</a></li>
                                <li><a data-toggle="tab" href="#tab4"><i className="fa fa-users"></i> My Employer</a></li>
                                <li><a data-toggle="tab" href="#tab5"><i className="fa fa-lock"></i> Change Password</a></li>
                                <li><a data-toggle="tab" href="#tab6"><i className="fa fa-sign-out"></i> Logout</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab1" className="tab-pane active">
                                    <div className="tab-inr2 dis-block clearfix">
                                        <h3>My Profile</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <label>Name</label>
                                                    <input type="text" placeholder="Enter Name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <label>Email Address</label>
                                                    <input type="text" placeholder="Enter Email Address" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cmn-btn-block dis-block clearfix text-right">
                                            <button type="button" className="btn btn-custom">Save</button>
                                            <button type="button" className="btn btn-custom black-btn mrg-l10">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab2" className="tab-pane">
                                    <div className="tab-inr2 dis-block clearfix">
                                        <h3>Edit Profile</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <label>Name</label>
                                                    <input type="text" placeholder="Enter Name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group clearfix">
                                                    <label>Email Address</label>
                                                    <input type="text" placeholder="Enter Email Address" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cmn-btn-block dis-block clearfix text-right">
                                            <button type="button" className="btn btn-custom">Save</button>
                                            <button type="button" className="btn btn-custom black-btn mrg-l10">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab3" className="tab-pane">
                                    <div className="tab-inr2 dis-block clearfix">
                                        <h3>Applied Jobs</h3>
                                        <div className="current-job-list applied-job-list">

                                        </div>
                                    </div>
                                </div>
                                <div id="tab4" className="tab-pane">
                                    <div className="tab-inr2 dis-block clearfix">
                                        <h3>My Employer</h3>
                                    </div>
                                </div>
                                <div id="tab5" className="tab-pane">

                                </div>
                                <div id="tab6" className="tab-pane">
                                    <div className="tab-inr2 dis-block clearfix">
                                        <h3>Logout</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clearfix"></div>
            </React.Fragment>
        );
    }
}

export default Profile;