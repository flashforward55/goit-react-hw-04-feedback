import PropTypes from 'prop-types';
import {
  ButtonContainer,
  FeedbackButton,
  FeedbackLI,
} from './FeedbackOptions.styled';
import { capitalizeFirstLetter } from './CapitalizeFirstLetter';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(option => (
      <FeedbackLI key={option}>
        <FeedbackButton type="button" onClick={() => onLeaveFeedback(option)}>
          {capitalizeFirstLetter(option)}
        </FeedbackButton>
      </FeedbackLI>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
