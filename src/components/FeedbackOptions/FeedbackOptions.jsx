import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options, key }) => {
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};