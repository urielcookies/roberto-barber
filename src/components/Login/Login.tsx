import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'

// TODO Navigation bar
// TODO FORMIK NEXT FOR LOGIN/REGISTERING

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' textAlign='center'>
        Roberto Barbering
      </Header>
      <Header as='h3' color='grey' textAlign='center'>
        Log in
      </Header>
      <Message>
        New to us? <Link to='/roberto-barber/register'>Register</Link>
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
          <Button color='grey' fluid size='large' content="Login" />
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default Login;
