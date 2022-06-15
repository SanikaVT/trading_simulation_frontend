import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class simpleForm extends Component {
    
  render() {
    return (
      <div>
        
        <ChatBot
        steps={[
            {
             id:'intro', 
             message:'Hi! What can I help you with?', 
             trigger:'intro-user'
            },
            {
             id:'intro-user', 
             options:[
               {value:'ti', label:'Technical Issue', trigger:'tech-issue'},
               {value:'mps', label:'Most Popular Stock', trigger:'popular-stock'},
               {value:'book',label:'Book appointment with expert',trigger:'book-appointment'}
             ] 
            },
            {
             id:'tech-issue',
             message:'Please refresh the page and try again', 
             end:true
            },
            {
             id:'popular-stock', 
             message:'The most bought stock is AAPL', 
             end:true
            },
            {
             id:'book-appointment', 
             message:'Please click on the book appointments page to book an appointment with the expert', 
             end:true
               }
           ]}
            />
      </div>
    );
  }
       
}

export default simpleForm;