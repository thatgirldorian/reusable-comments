import React from 'react';
var faker = require('faker');

//create a new component for our comments info
const CommentInfo = (props) => {

    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                    <span className="date">{props.date}</span>
                    </div>
                    <div className="text">
                        {props.text}
                    </div>
                    <div className="actions">
                    <a className="reply">Reply</a>
                    <a className="save">Save</a>
                </div>
                </div>  
            </div>
    )
} 

export default CommentInfo