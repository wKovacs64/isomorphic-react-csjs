import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const styles = csjs`
  .blue {
    color: blue;
  }
`;

const BlueText = ({ classes }) => (
  <span className={classes.blue}>
    This should be blue!
  </span>
);

BlueText.propTypes = {
  classes: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
};

export default withStyles(styles)(BlueText);
