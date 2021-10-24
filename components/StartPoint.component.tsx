import { FunctionComponent } from 'react';
import { testTypes } from './startPoint.type';
interface props {
  text: testTypes;
}

export const StartPoint: FunctionComponent<props> = ({ text }) => {
  return (
    <h1 data-testid="componentTestId">
      {text.name}&apos;s project {text.action} here !
    </h1>
  );
};
