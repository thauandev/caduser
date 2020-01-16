import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

class Home extends Component {
  async componentDidMount() {
    const response = await api.get('users');

    this.props.addUsersList(response.data);
  }

  render() {
    const { users } = this.props;
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

const mapStateToProps = state => ({
  users: state.list,
});

const mapDispatchToProps = dispatch => ({
  addUsersList: payload => {
    dispatch({ type: 'ADD_USERS_LIST', payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
