import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions'

class User extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        {this.props.loading ? <p>Loading...</p>
          :
          <ul>
            {this.props.users.map((user, index) => (
              <li key={index}>{user.email}</li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    loading: state.users.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () =>  {
      return dispatch(fetchUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
