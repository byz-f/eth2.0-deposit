import React, { useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Heading } from '../../components/Heading';
import { Paper } from '../../components/Paper';
import { Text } from '../../components/Text';
import { TerminalUI } from './TerminalUI';
import { Link } from '../../components/Link';
import { CHAIN_NAME, IS_MAINNET } from '../../utils/envVars';

interface Props {
  validatorCount: number | string;
}

const Section = styled.div`
  background-color: ${(p: any) => p.theme.gray.light};
  padding: 20px;
  margin: 20px 0;
  border-radius: ${(p: any) => p.theme.borderRadius};
  border: ${(p: any) => `1px solid ${p.theme.blue.light}`};
`;

export const WindowsInstructions = ({ validatorCount }: Props) => {
  const [animateTerminal, setAnimateTerminal] = useState<boolean>(false);
  const terminalCommands = [
    'git clone https://github.com/ethereum/eth2.0-deposit-cli.git',
    'cd eth2.0-deposit-cli',
    'sh deposit.sh',
    `sh deposit.sh ${
      validatorCount > 0 ? `--num_validators ${validatorCount}` : ''
    } ${IS_MAINNET ? '' : `--chain ${CHAIN_NAME.toLowerCase()}`}`,
  ];

  return (
    <div style={{ animation: 'fadeIn 1s' }}>
      <Paper className="mt20">
        <Heading level={3} size="small" color="blueMedium" className="mb20">
          3. Install developer libraries
        </Heading>
        <Section>
          <Heading level={4} size="small" color="blueMedium" className="mb10">
            Install Python 3.7+
          </Heading>
          <Text>
            Download python3 from{' '}
            <Link
              primary
              inline
              external
              to="https://docs.python.org/3/using/windows.html"
            >
              python.org
            </Link>{' '}
            or via{' '}
            <Link
              primary
              inline
              external
              to="https://chocolatey.org/packages/python"
            >
              Chocolatey
            </Link>{' '}
            and follow the installation instructions.
          </Text>
        </Section>
        <Section>
          <Heading level={4} size="small" color="blueMedium" className="mb10">
            Install Python Package Installer (PIP)
          </Heading>
          <Text>
            The latest version of pip3 should have been installed with python
            3.x.x. For more information about pip, you can visit the windows
            install{' '}
            <Link
              inline
              external
              primary
              to="https://pip.pypa.io/en/stable/installing/"
            >
              guide{' '}
            </Link>
            or install the pip package via{' '}
            <Link
              inline
              external
              primary
              to="https://chocolatey.org/packages/pip"
            >
              Chocolatey
            </Link>
            .
          </Text>
        </Section>
        <Section>
          <Heading level={4} size="small" color="blueMedium" className="mb10">
            Install Git
          </Heading>
          <Text>
            If git is not already installed on your machine, you can find
            install instructions{' '}
            <Link
              inline
              external
              primary
              to="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
            >
              here{' '}
            </Link>
            or install the pip package via{' '}
            <Link
              inline
              external
              primary
              to="https://chocolatey.org/packages/git"
            >
              Chocolatey
            </Link>
            .
          </Text>
        </Section>
      </Paper>

      <Paper className="mt20">
        <Heading level={3} size="small" color="blueMedium">
          4. Generate deposit keys using the Ethereum Foundation deposit tool
        </Heading>
        <Text className="mt20 mb20">
          Type the following lines into the terminal window.
        </Text>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce
          // @ts-ignore
          afterAnimatedIn={() => setAnimateTerminal(true)}
        >
          <TerminalUI commands={terminalCommands} animate={animateTerminal} />
        </ScrollAnimation>
      </Paper>
    </div>
  );
};
