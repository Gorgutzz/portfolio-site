import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      }

      return (
        <section id="contact">

           <div className="row">

              <aside className="four columns footer-widgets">
                 <div className="widget widget_contact">

  					   <h4>Contact Info</h4>
  					   <p className="address">
  						   {name}<br />
                 {email} <br />
                 <span>{phone}</span>
  					   </p>
  				   </div>

              </aside>
        </div>
     </section>
      );
    }
  }

  export default Contact;
