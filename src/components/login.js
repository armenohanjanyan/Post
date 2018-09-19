import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, singIn } from '../actions/index';
import _ from 'lodash';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        // this.props.logIn();
    }

    renderField(field) {
        const { meta } = field;
        const touched = meta.touched;
        const error = meta.error;

        return (
            <div className="form-group has-danger">
                <input
                    type="text"
                    className="form-control"
                    {...field.input} 
                    />
                <div className="text-help" style={{color: 'red'}}>    
                 {touched ? error : ''}
                </div> 
            </div>
        )
    }

    onSubmit(values, type) {
        if(type === 'signUp')
            this.props.signUp(values);
        else
            this.props.singIn(values);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        nextProps && !_.isEmpty(nextProps.user) && this.props.history.push('/posts/new');
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="login">
            <form >
                    <h3>Email</h3>
                    <Field 
                        name="email"
                        component={this.renderField} 
                         />
                    <h3>Password</h3>
                    <Field 
                        style={{width: "100%", minHeight: "200px"}}
                        component={this.renderField}
                        name="password"
                         />
                 <div style={{display: "flex"}}>
                    <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleSubmit(values => 
                        this.onSubmit({ 
                          ...values,
                          type: 'signUp'
                        }))}
                    >Signup</button>
                    <button className="btn btn-info" 
                     onClick={handleSubmit(values => 
                        this.onSubmit({ 
                          ...values,
                          type: 'signIn'
                        }))}>Login</button>
                </div>
            </form>
            </div>
        ); 
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter username"
    }
    if (!values.content) {
        errors.content = "Enter password"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewUser',
})(
    connect((state) => ({
        user: state.user
    }), {
        signUp,
        singIn
    })(Login)
);