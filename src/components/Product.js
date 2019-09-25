import React, { Component } from '../../node_modules/react';
export default class Products extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { username, fullname } = this.props;
        return (
            <>
            <strong>{username} - <i>{fullname}</i></strong>
            <br/>
            </>
        )
    }
}