import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText,Form, FormGroup, Label, Input } from 'reactstrap';


class MessageForm extends Component {
    state = { 
        userMessage: {
            name: '',
            message: ''
          }
     }

    formSubmitted = (event) => {
        event.preventDefault();
        console.log(this.state.userMessage);
      }
      
      valueChanged= (event) => {
        const {name,value} = event.target;
        this.setState((prevState)=> ({
          userMessage:{
            ...prevState.userMessage,
            [name]: value
          }
        }))
      }

    render() { 
        return ( 
            <Card body className='message-form'>
            <CardTitle>Welcome to ViaSafe!</CardTitle>
            <CardText>Leave your message</CardText>
            <Form onSubmit={this.formSubmitted}>
            <FormGroup>
              <Label for="name">Name</Label>
                <Input 
                onChange = {this.valueChanged}
                type="text" 
                name="name" 
                id="name" 
                placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
                <Input
                 onChange = {this.valueChanged}
                 type="textarea"
                  name="message" 
                  id="message" 
                  placeholder="Enter your message" />
            </FormGroup>
            <Button type='submit' color="info">Send</Button>{' '}
            </Form>
          </Card>
            
         );
    }
}
 
export default MessageForm;



