import React from 'react';

class UsersList extends React.Component {
    render() {
        return (
            <div>
                {this.props.dataUser.map((v) => {
                    return (
                        <li>{v.name}</li>
                    )
                })}
            </div>
        )
    }
}

export default UsersList