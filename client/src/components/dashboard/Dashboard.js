import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

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
      <button
        onClick={onLogoutClick}
        className="block mx-auto py-2 px-8 rounded-lg text-gray-100 bg-indigo-600 hover:bg-indigo-800"
      >
        Logout
      </button>
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
