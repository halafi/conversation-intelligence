import React from 'react';
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import { PauseCircleFilled, RotateLeft, RotateRight, Reply } from '@styled-icons/material';
import Theme from '../../records/Theme';

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

const Navbar = () => (
  <Flex bg="gray" height={65}>
    <Flex px={2} variant="container" width={1} alignItems="center" justifyContent="space-between">
      <ButtonBar alignItems="center">
        <Box px={1}>
          <RotateLeft size={24} color={Theme.colors.tertiary} />
        </Box>
        <Box px={1}>
          <PauseCircleFilled size={38} color={Theme.colors.primary} />
        </Box>
        <Box px={1}>
          <RotateRight size={24} color={Theme.colors.tertiary} />
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

export default Navbar;
