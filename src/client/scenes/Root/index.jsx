import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import { hot } from 'react-hot-loader';
import Navbar from '../../components/Navbar';
import Transcript from './components/Transcript/index';

const Root = () => (
  <Flex flexDirection="column">
    <Navbar />
    <Transcript />
  </Flex>
);

export default hot(module)(Root);
