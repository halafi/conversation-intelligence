import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import styled from 'styled-components';
import transcript from '../../../../../../data/transcript.json';
// import Navbar from '../../components/Navbar';
import mapperTranscript from '../../../../services/mapperTranscript/index';

const data = mapperTranscript(transcript);
console.log(data);

const getBorderColor = (kind, theme) =>
  kind === 'even' ? theme.colors.lightBlue : theme.colors.lightPurple;

const getColor = (kind, theme) => (kind === 'even' ? theme.colors.primary : theme.colors.secondary);

const TimeIndiciator = styled(Flex)`
  color: ${({ theme, kind }) => getColor(kind, theme)};
  border-right: 2px solid ${({ theme, kind }) => getBorderColor(kind, theme)};
  min-width: 70px;
`;

const Transcript = () => (
  <Flex variant="container" flexDirection="column">
    {data.paragraphs.map((par, i) => {
      const kind = i % 2 === 0 ? 'even' : 'odd';
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Flex key={i} py={2} ml={kind === 'odd' ? 70 : 0}>
          <TimeIndiciator kind={kind} px={2} py={2} flexDirection="column">
            {par[0].startTime}
          </TimeIndiciator>
          <Flex px={2} py={2}>
            {par.map((word, j) => `${word.word}${j < par.length - 1 ? ' ' : ''}`)}
          </Flex>
        </Flex>
      );
    })}
  </Flex>
);

export default Transcript;
