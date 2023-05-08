import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0, 
    bad: 0
  });
  
  const onFeedback = type => {
    setValue((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(value).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = (a, b) => {
    const total = Object.values(value).reduce((a, b) => a + b, 0);
    return total > 0 ? `${Math.round((value.good / total) * 100)}%` : 0;
  };
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onFeedback={onFeedback} />

          {countTotalFeedback() > 0 ? (
            <Statistics
              title="Statistics"
               good={value.good}
               neutral={value.neutral}
               bad={value.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification
              message="There is no feedback"
              total={countTotalFeedback()}
            />

          )}
          </Section>
      </>
    );
}
