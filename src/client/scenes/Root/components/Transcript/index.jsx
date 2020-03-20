import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMilliseconds, format } from 'date-fns';
import { Box, Flex } from 'reflexbox/styled-components';
import styled from 'styled-components';
import transcript from '../../../../../../data/transcript.json';
import mapperTranscript from '../../../../services/mapperTranscript/index';
import { setPosition } from '../../../../reducers/sound';

const data = mapperTranscript(transcript);

const getBorderColor = (kind, theme) =>
  kind === 'even' ? theme.colors.lightBlue : theme.colors.lightPurple;

const getColor = (kind, theme) => (kind === 'even' ? theme.colors.primary : theme.colors.secondary);
const getBackgroundColor = (active, theme) => (active ? theme.colors.lightBlue2 : 'initial');

const formatTime = timeMillis =>
  format(addMilliseconds(new Date().setHours(0, 0, 0, 0), timeMillis), 'mm:ss');

const TimeIndiciator = styled(Flex)`
  color: ${({ theme, kind }) => getColor(kind, theme)};
  border-right: 2px solid ${({ theme, kind }) => getBorderColor(kind, theme)};
  min-width: 70px;
`;

const WordText = styled.span`
  white-space: pre-wrap;
  display: inline-block;
  background-color: ${({ theme, active }) => getBackgroundColor(active, theme)};
  transition: background-color 0.2s ease-out;
  :hover {
    cursor: pointer;
  }
`;

const BlockWrapper = styled(Box)`
  transition: background-color 0.2s ease-out;
  :hover {
    background-color: #f6fbfe;
  }
`;

// eslint-disable-next-line react/prop-types
const Transcript = ({ position, setPositionAction }) => (
  <Flex variant="container" flexDirection="column" mt={4}>
    {data.paragraphs.map((par, i) => {
      const kind = i % 2 === 0 ? 'even' : 'odd';
      return (
        // eslint-disable-next-line react/no-array-index-key
        <BlockWrapper key={i}>
          <Flex py={3} ml={kind === 'odd' ? 70 : 0}>
            <TimeIndiciator kind={kind} px={2} py={2} flexDirection="column">
              {formatTime(par[0].startTime)}
            </TimeIndiciator>
            <Box px={2} py={2}>
              {par.map((word, j) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={`${j}-${word}`}>
                  <WordText
                    active={
                      (position >= word.startTime && position <= word.endTime) ||
                      (position === word.startTime && position === word.endTime)
                    }
                    onClick={() =>
                      setPositionAction(
                        word.startTime !== word.endTime ? word.startTime + 1 : word.startTime,
                      )
                    }
                  >
                    {word.word}
                  </WordText>
                  {j < par.length - 1 ? ' ' : ''}
                </span>
              ))}
            </Box>
          </Flex>
        </BlockWrapper>
      );
    })}
  </Flex>
);

export default connect(
  state => ({ status: state.sound.status, position: state.sound.position }),
  dispatch => ({
    setPositionAction: bindActionCreators(setPosition, dispatch),
  }),
)(Transcript);
