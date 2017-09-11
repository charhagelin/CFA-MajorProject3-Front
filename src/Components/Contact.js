import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <p> Here you will be able to contact us</p>

          <form>
            <lable>Name</lable>
            <input type="text"></input>
            <lable>email</lable>
            <input type="email"></input>
            <lable>phone number</lable>
            <input type="text"></input>
            <lable>message</lable>
            <input type="text"></input>
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    );
  }
}

export default Contact;
