import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = Object.values(this.state).reduce((a, b) => a + b, 0);
    return total > 0 ? `${Math.round((good / total) * 100)}%` : 0;
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onFeedback={this.onFeedback} />

          {this.countTotalFeedback() > 0 ? (
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification
              message="There is no feedback"
              total={this.countTotalFeedback()}
            />

          )}
          </Section>
      </>
    );
  }
}
