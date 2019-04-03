import React, { Component } from "react";

class Contact extends Component {
constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(e) {
    e.preventDefault()
    fetch('https://7lo7dsdyyc.execute-api.us-east-1.amazonaws.com/dev/email/send', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": this.name.value,
        "email": this.email.value,
        "content": this.content.value
        })
    })
    this.name.value ='';
    this.email.value='';
    this.content.value='';
}


render() {
    return (
    <div className="group">
        <div className="container">
        <div className="main-header" >
            </div>                    
                <div className="email-message">
                    <h1 className="contact-header">Contact</h1>
                <div className="formBody">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="contact-name-header">Name:</h2>
                        <br />
                        <input ref={(ref) => {this.name = ref}} className="fullname" type="text" name="name" placeholder="First and Last Name"/>
                        <br />
                        <h2  className="contact-email-header">Email:</h2>
                        <br />
                        <input ref={(ref) => {this.email = ref}} className="email" type="email" name="email" placeholder="example@email.com" />
                        <br />
                        <h2 className="contact-message-header">Message:</h2>
                        <br />
                        <div className="">
                        <textarea ref={(ref) => {this.content = ref}} className="custom-message" type="textarea" name="content" placeholder="Insert Message"/>
                        </div>
                        <br />
                        <button className="email-button" type="submit" value="submit" onClick={this.showAlert}>Email</button>
                    </form>
                    </div>
                </div>
            
            <footer className="contact-footer">
                <h6>Made by Zachary Coursen</h6>
            </footer>
        </div>
    </div>

    );
  }
}

export default Contact;