import React from "react";
import ReactDOM from "react-dom/client"
import CommentInfo from './CommentInfo'
import ApprovalCard from "./ApprovalCard";
import './App.css'
var faker = require('faker');



const App = () => {
    return (
        <div className="ui container big comments">
          {/* <h1>Comments</h1> */}
            <ApprovalCard>
              <CommentInfo 
                      author="Bolaji"
                      date="Just now"
                      text="Hey, this is a great blog post! I like how you broke down all the technicalities."
                      image={faker.image.image()}
                      />
            </ApprovalCard>

        
            <ApprovalCard>
                  <CommentInfo 
                          author="Toria" 
                          date="Yesterday at 6:45 PM"
                          text="Nice post!"
                          image= {faker.image.image()}
                          />
            </ApprovalCard>
            
            <ApprovalCard>
                  <CommentInfo 
                          author="Alex" 
                          date="Yesterday at 10:15 AM"
                          text="This was very helpful, thank you!"
                          image= {faker.image.image()}
                          />
            </ApprovalCard>
            

            <ApprovalCard>
                  <CommentInfo 
                          author="Bim" 
                          date="2 days ago"
                          text="Can you please write about the new changes in React 18?"
                          image= {faker.image.image()}
                          />
            </ApprovalCard>
            
            

        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
