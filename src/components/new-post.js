import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index'

class NewPost extends Component {
    renderField(field) {
        const { meta } = field;
        const touched = meta.touched;
        const error = meta.error;

        return (
            <div className="form-group has-danger">
            <label>{field.label}</label>
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

    onSubmit(values) {
       this.props.createPost(values, () => {
        this.props.history.push('/');
       });
    }

    render() {
        const { handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h2>Create New Form</h2>
                    <Field 
                        label="Title"
                        name="title"
                        component={this.renderField} 
                         />
                    <h3>Content</h3>
                    <Field 
                        style={{width: "100%", minHeight: "200px"}}
                        component="textarea"
                        label="Text Content"
                        name="content"
                         />
                 <div style={{display: "flex"}}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </div>
            </form>
        ); 
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter Title"
    }
    if (!values.content) {
        errors.content = "Enter content"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm',
})(
    connect(null, { createPost })(NewPost)
);