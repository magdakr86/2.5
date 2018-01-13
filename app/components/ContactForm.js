var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (

      React.createElement('div', {className: 'ConContactForm'},
    
          React.createElement('form', {className: 'contactForm form-inline'},
            React.createElement('input', {
              className: 'form-control mb-2 mr-sm-2 mb-sm-0',
              type: 'text',
              placeholder: 'Imię',
              value: this.props.contact.firstName,
            }),
            React.createElement('input', {
              className: 'form-control mb-2 mr-sm-2 mb-sm-0',
              type: 'text',
              placeholder: 'Nazwisko',
              value: this.props.contact.lastName,
            }),
            React.createElement('input', {
              className: 'form-control mb-2 mr-sm-2 mb-sm-0',
              type: 'email',
              placeholder: 'Email',
              value: this.props.contact.email,
            }),
            React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, "Dodaj kontakt")
          )
        )
      ) 
  
  },
})