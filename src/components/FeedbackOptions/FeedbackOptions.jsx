import PropTypes from "prop-types";
import { ButtonContainer, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onFeedback }) => {
  const options = [
    { value: 'good', label: 'Good' },
    { value: 'neutral', label: 'Neutral' }, 
    { value: 'bad', label: 'Bad'}
  ]
    return (
      <ButtonContainer className="buttonContainer">{options.map(button => 
        <Button key={button.value} onClick={() => onFeedback(`${button.value}`)} type="button">
            {button.label}
          </Button>
      )}
        </ButtonContainer>
    )
}
FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;