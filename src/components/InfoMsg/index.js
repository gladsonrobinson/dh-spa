import React from "react";
import "./info-msg.css";
import PropTypes from "prop-types";

export default function InfoMsg({ fetchStatus, errorMessage }) {
  return (
    <div className="info-msg">
      {fetchStatus && <span className="info-msg__fetching">fetching...</span>}
      {!fetchStatus && errorMessage && (
        <span className="info-msg__error">{errorMessage}</span>
      )}
    </div>
  );
}

InfoMsg.propTypes = {
  fetchStatus: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};
