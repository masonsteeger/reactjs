import React, { Component } from 'react';

class Course extends Component {
    state = {
        loadedCourse: {title: '', id: ''}
    }

    componentDidMount(){
        this.loadData()
    }

    componentDidUpdate(){
        this.loadData()
    }

    loadData() {
        if (this.props.match.params.id){
            if(!this.state.loadedCourse || this.state.loadedCourse && this.state.loadedCourse.id != this.props.match.params.id)
            this.setState({
                loadedCourse: this.props.location.state

            })
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.loadedCourse.title}</h1>
                <p>Course ID: {this.state.loadedCourse.id}</p>
            </div>
        );
    }
}

export default Course;