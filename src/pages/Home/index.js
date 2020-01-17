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

  async handleDelete(user) {
    try {
      await api.delete(`/users/${user.id}`, user);
      this.props.deleteUserList(user);
    } catch (error) {
      console.log(error);
    }
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
                  <button onClick={() => this.handleDelete(user)} type="button">
                    Delete
                  </button>
                </td>
                <td>
                  &nbsp;
                  <Link to="/edit">
                    <button>Edit</button>
                  </Link>
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
  deleteUserList: payload => {
    dispatch({ type: 'DELETE_USER_LIST', payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
