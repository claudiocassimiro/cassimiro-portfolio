import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Main, { SectionLogin, Form, Title, Input, Button } from './styles/LoginStyle';

function Login({ history }) {
 
  const { setName } = useContext(AppContext);
  const [userName, setUserName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const setVisitantName = ({ target }) => {
    setUserName(target.value);
    if (target.value.length > 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    setName(userName);
    setUserName('');
    history.push('/home');
  }

  return (
    <Main>
      <SectionLogin>
        <Form method="post" onSubmit={(e) => submitForm(e)}>
          <Title>Olá, como você se chama?</Title>
          <Input
            type="text"
            placeholder="Seu nome"
            name="userName"
            value={userName}
            onChange={(e) => setVisitantName(e)}
          />
          <Button
            disabled={buttonDisabled}
            type="submit"
          >
            Entrar
          </Button>
        </Form>
      </SectionLogin>
    </Main>
  );
}

export default Login;
