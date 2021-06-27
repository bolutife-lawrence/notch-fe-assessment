import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default propTypes;
