import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'

const Register = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' textAlign='center'>
        Roberto Barbering
      </Header>
      <Header as='h3' color='grey' textAlign='center'>
        Register
      </Header>
      <Message>
        Have an account? <Link to='/roberto-barber/login'>Log in</Link>
      </Message>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Confirm Password'
            type='confirmPassword'
          />
          <Button color='grey' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default Register;
