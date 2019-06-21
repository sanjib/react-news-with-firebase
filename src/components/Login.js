import React from "react";
import { Form, Button } from "semantic-ui-react";

const Login = () => {
  const [login, setLogin] = React.useState(true);
  return (
    <div>
      <h3>{login ? "Login" : "Create Account"}</h3>
      <Form>
        {!login && (
          <Form.Field>
            <Form.Input
              label="Name"
              placeholder="Enter your name"
              type="text"
            />
          </Form.Field>
        )}
        <Form.Field>
          <Form.Input
            label="Email"
            placeholder="Enter your email"
            type="text"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input label="Enter Password" type="password" />
        </Form.Field>
        <Form.Field />
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => setLogin(prevLogin => !prevLogin)}>
          {login ? "Need to create account?" : "Already have an account?"}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
