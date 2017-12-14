import {
  Box,
  Code,
  Text,
  Flex,
  Link,
  Subhead,
  Heading,
  majorScale,
} from '@saleae/ui-lib';

import React from 'react';
import styled from 'styled-components';
import { Github, Twitter, Mail, Headphones } from 'react-feather';

const FlexUnderline = styled(Flex)`
  border-bottom: solid 1px #eee;
`;

const SubSubhead = styled(Subhead)`
  font-size: 90%;
`;

const SubSubSubhead = styled(Subhead)`
  font-size: 80%;
  font-style: italic;
`;

const BorderBox = styled(Box)`
  border: solid 1px #eee;
`
const BorderFlex = styled(Flex)`
  border: solid 1px #eee;
`
const SubCode = styled(Code)`
  display: inline-block;
  font-size: 80%;
  font-style: italic;
  margin-right:${majorScale(1)};
`

const Header = () => (
  <FlexUnderline
    direction="row"
    wrap
    pb={majorScale(1)}
    mb={majorScale(1)}
    justify="center"
    align="center"
  >
    <Heading>theRebelRobot</Heading>
    <Box flex={1} />
    <Box>
      <Subhead>Oz Haven</Subhead>
      <SubSubSubhead>(Trent Oswald)</SubSubSubhead>
    </Box>
  </FlexUnderline>
)
const Software = () => (
  <BorderBox m={majorScale(1)} p={majorScale(4)} w={[1, 1, "45%", 1/3]}>
    <Subhead>Software</Subhead>
    <SubSubSubhead mt={majorScale(1)}>
      Full-stack Web Development, Node.js, React.js, Docker, Infrastructure,
      Systems Administration, DevOps and Scaling
    </SubSubSubhead>

    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      Saleae - Sr Software Engineer
    </SubSubhead>
    <SubSubSubhead>2017-Present</SubSubSubhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      Segment - Software Engineer
    </SubSubhead>
    <SubSubSubhead>2016-2017</SubSubSubhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      Code for San Francisco - Core Team
    </SubSubhead>
    <SubSubSubhead>2015-2017</SubSubSubhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      Mashape - Software Engineer
    </SubSubhead>
    <SubSubSubhead>2015-2016</SubSubSubhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      Node.js Website Working Group
    </SubSubhead>
    <SubSubSubhead>2014-2015</SubSubSubhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      Etcetera
    </SubSubhead>
    <SubSubSubhead>
      For additional information about employment history, including independent contracting,
      business ventures, or for a full resume, please reach out at<br/>
      <SubCode>inquiries</SubCode><SubCode>at</SubCode><SubCode>therebelrobot.com</SubCode>
    </SubSubSubhead>
  </BorderBox>
);
const Music = () => (
  <BorderBox m={majorScale(1)} p={majorScale(4)} w={[1, 1, "45%", 1/3]}>
    <Subhead>Music</Subhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      San Francisco Gay Men's Chorus
    </SubSubhead>
    <SubSubSubhead>
      The San Francisco Gay Men's Chorus provides community support
      through outreach, peformances, and anti-bullying curriculum to nearby schools.
      <br />
      Joined in 2017, Low Bass.
      <br />
      <Box mt={majorScale(2)} mb={majorScale(3)}>
        <iframe
          src="https://www.youtube.com/embed/XuX7RLYxMVI"
          frameborder="0"
          gesture="media"
          allow="encrypted-media"
          allowfullscreen />
      </Box>
    </SubSubSubhead>
    <SubSubhead mt={majorScale(3)} mb={majorScale(2)}>
      theForgeProject
    </SubSubhead>
    <SubSubSubhead>
      A musical side-project, producing smooth rhythmic future-bass with a strong walking beat.
      <br />

      Started in 2016.
      <br/>
      <br/>
      For usage rights or booking, please reach out at<br/>
      <SubCode>inquiries</SubCode><SubCode>at</SubCode><SubCode>therebelrobot.com</SubCode>
      <Box mt={majorScale(2)} mb={majorScale(3)}>
        <iframe
          src="https://open.spotify.com/embed/user/1229875529/playlist/3MIgxg3v5FAYGpTg5aoD5c?theme=white"
          frameborder="0"
          allowtransparency="true"
        />
      </Box>
    </SubSubSubhead>
  </BorderBox>
);
const Contact = () => (
  <BorderFlex m={majorScale(1)} p={majorScale(4)} w={[1]} align="center" justify="center" direction="column">
    <Subhead>Contact</Subhead>
    <Flex mt={majorScale(1)} align="center" justify="center" >
      <Box m={majorScale(2)}>
        <Link href="https://github.com/therebelrobot"><Github /></Link>
      </Box>
      <Box m={majorScale(2)}>
        <Link href="https://twitter.com/therebelrobot"><Twitter /></Link>
      </Box>
      <Box m={majorScale(2)}>
        <Link href="https://theforgeproject.bandcamp.com"><Headphones /></Link>
      </Box>
      <Box m={majorScale(2)}>
        <Link href="mailto:inquiries@therebelrobot.com"><Mail /></Link>
      </Box>
    </Flex>
  </BorderFlex>
);

const Root = () => (
  <Box p={majorScale(4)}>
    <Header />
    <Flex direction="row" wrap justify="center">
      <Software />
      <Music />
    </Flex>
    <Contact />
  </Box>
);

export default Root;
