import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import Button from '../Button';

const Dashboard = ({ user, logoutUser }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <div className="w-full mt-20 text-center">
      <p className="mb-4 text-xl">Hello, {user.name.split(' ')[0]}</p>
      <p className="mb-12 text-lg">You are currently logged in 👏</p>

      <Button type="button" clickHandler={onLogoutClick}>
        Logout
      </Button>
    </div>
  );
};

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Dashboard));
