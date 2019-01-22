import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/userActions';

//The value that the counter will increase/decrease per click

class UsersComponent extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (!this.props.users.length) {
            return <h4>Loading...</h4>;
        }
        return this.props.users.map(user => <h4 key={user.id}>{user.name}</h4>);
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);
