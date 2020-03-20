// @flow
import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import { hot } from 'react-hot-loader';
import PlayerControls from '../../components/PlayerControls';
import Transcript from './components/Transcript/index';

const Root = () => (
  <Flex flexDirection="column">
    <PlayerControls />
    <Transcript />
  </Flex>
);

export default hot(module)(Root);
