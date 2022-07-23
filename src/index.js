import React from "react";
import ReactDOM from "react-dom/client"
import CommentInfo from './CommentInfo'
var faker = require('faker');



const App = () => {
    return (
        <div className="ui container big comments">
            <h1>Comments</h1>
            <CommentInfo 
                    author="Bolaji"
                    date="Just now"
                    text="Hey, this is a great blog post! I like how you broke down all the technicalities."
                    image={faker.image.image()}
                    />
            <CommentInfo 
                    author="Debbie" 
                    date="Yesterday at 6:45 PM"
                    text="Nice post!"
                    image= {faker.image.image()}
                    />
            <CommentInfo 
                    author="Alex" 
                    date="Yesterday at 10:15 AM"
                    text="This was very helpful, thank you!"
                    image= {faker.image.image()}
                    />
            <CommentInfo 
                    author="Bim" 
                    date="2 days ago"
                    text="Can you please write about the new changes in React 18?"
                    image= {faker.image.image()}
                    />
            <CommentInfo 
                    author="Ekene" 
                    date="5 days ago"
                    text="Nice one, boss"
                    image= {faker.image.image()}
                    />
            <form className="ui reply form">
                    <div className="field">
                    <textarea></textarea>
                    </div>
                    <div className="ui primary submit labeled icon button">
                    <i className="icon edit"></i> Add Reply
                    </div>
            </form>
        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)