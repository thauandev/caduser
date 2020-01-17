import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';
import { Container } from './styles';

const schema = Yup.object().shape({
  id: Yup.number().required('O id é obrigatório'),
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  street: Yup.string(),
  suite: Yup.string(),
  city: Yup.string(),
  zipcode: Yup.string(),
  phone: Yup.number(),
});

function Create() {
  const dispatch = useDispatch();

  const handleSubmit = async user => {
    try {
      await api.post('/users', user);

      dispatch({
        type: 'ADD_TO_LIST',
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h2>Formulário</h2>
      <Form className="formulario" schema={schema} onSubmit={handleSubmit}>
        <Input name="id" placeholder="ID" size="40" />
        <Input name="name" placeholder="Name" size="40" />
        <Input name="email" placeholder="Email" size="40" />

        <Input name="street" placeholder="Street" size="40" />
        <Input name="suite" placeholder="Suite" size="40" />
        <Input name="city" placeholder="City" size="40" />
        <Input name="zipcode" placeholder="Zip-Code" size="40" />

        <Input name="phone" placeholder="Phone" size="40" />
        <button type="submit">Validar</button>
      </Form>
    </Container>
  );
}

export default Create;
