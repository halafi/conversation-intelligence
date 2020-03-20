// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import {
  PauseCircleFilled,
  PlayCircleFilled,
  RotateLeft,
  RotateRight,
  Reply,
} from '@styled-icons/material';
import Theme from '../../records/Theme';
import { setStatus, setPosition } from '../../reducers/sound';

const Button = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

const Share = styled(Reply)`
  transform: rotate(180deg) scaleY(-1);
  transform-origin: center;
  margin-bottom: 4px;
`;

const ButtonBar = styled(Flex)`
  padding: 0 4px;
  cursor: pointer;
`;

const Select = styled.select`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 5px;
`;

type Props = {
  status: any,
  position: number,
  setStatusAction: string => void,
  setPositionAction: number => void,
};

// eslint-disable-next-line react/prop-types
const PlayerControls = ({ status, position, setStatusAction, setPositionAction }: Props) => (
  <Flex bg="gray" height={65}>
    <Flex px={2} variant="container" width={1} alignItems="center" justifyContent="space-between">
      <ButtonBar alignItems="center">
        <Box px={1}>
          <RotateLeft
            size={24}
            color={Theme.colors.tertiary}
            onClick={() => setPositionAction(position - 10000)}
          />
        </Box>
        <Box px={1}>
          {status === Sound.status.STOPPED || status === Sound.status.PAUSED ? (
            <PlayCircleFilled
              size={38}
              color={Theme.colors.primary}
              onClick={() => setStatusAction(Sound.status.PLAYING)}
            />
          ) : (
            <PauseCircleFilled
              size={38}
              color={Theme.colors.primary}
              onClick={() => setStatusAction(Sound.status.PAUSED)}
            />
          )}
        </Box>
        <Sound
          url="https://zenprospect-production.s3.amazonaws.com/uploads/phone_call/uploaded_content/59e106639d79684277df770d.wav"
          playStatus={status}
          onPlaying={ev => setPositionAction(ev.position)}
          onFinishedPlaying={() => setStatusAction(Sound.status.STOPPED)}
          position={position}
        />
        <Box px={1}>
          <RotateRight
            size={24}
            color={Theme.colors.tertiary}
            onClick={() => setPositionAction(position + 10000)}
          />
        </Box>
        <Box px={3}>
          <Select id="speed" value="1">
            <option value="0.5">0.5x</option>
            <option value="1">1.0x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2.0x</option>
            <option value="2.5">2.5x</option>
            <option value="3">3.0x</option>
          </Select>
        </Box>
      </ButtonBar>
      <Button color={Theme.colors.tertiary} bg="white" alignItems="center" px={2} py={1}>
        <Share size={20} /> Share
      </Button>
    </Flex>
  </Flex>
);

// $FlowFixMe
export default connect(
  state => ({ status: state.sound.status, position: state.sound.position }),
  (dispatch: Dispatch<any>) => ({
    setStatusAction: bindActionCreators(setStatus, dispatch),
    setPositionAction: bindActionCreators(setPosition, dispatch),
  }),
)(PlayerControls);
