import PropTypes from 'prop-types';
import { StatsContainer, TitleStyled, SpanStyled } from "./Statistics.styled";
const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => {
  return (
      <StatsContainer className = "statsContainer" >
      <TitleStyled>{title}</TitleStyled>
      <SpanStyled>Good:{good}</SpanStyled>
      <SpanStyled>Neutral:{neutral}</SpanStyled>
      <SpanStyled>Bad:{bad}</SpanStyled>
      <SpanStyled>Total:{total}</SpanStyled>
      <SpanStyled>Positive feedback:{positivePercentage}</SpanStyled>
    </StatsContainer>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string.isRequired
}
export default Statistics;
