import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.isLoading
        ? "Loading Village..."
        : props.smurfs.map((smurf) => {
            return <SmurfCard smurf={smurf} />;
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    errors: state.errors,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
