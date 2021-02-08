import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Button from "../Button";

function Dashboard(props) {
  const { user } = props.auth;

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <div className="w-full mt-20 text-center">
      <p className="mb-4 text-xl">Hello, {user.name.split(" ")[0]}</p>
      <p className="mb-12 text-lg">You are currently logged in 👏</p>

      <Button type="button" onClick={onLogoutClick}>
        Logout
      </Button>
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
