/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

class Home extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await api.get('users');

    this.setState({ users: response.data });
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        <table>
          {users.map(user => (
            <tbody key={user.id}>
              <tr>
                <td>&nbsp;{user.id}</td>
                <td>&nbsp;{user.name}</td>
              </tr>
              <tr>
                <td>
                  <button>Delete</button>
                </td>
                <td>
                  &nbsp;
                  <button>Edit</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <Link to="/create" className="create">
          Create User
        </Link>
      </Container>
    );
  }
}

export default connect()(Home);
