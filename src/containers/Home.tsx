// import { Pane, Code, Text, Flex, Link, Subhead } from "@saleae/ui-lib";

import { Pane, Heading, Link } from "evergreen-ui";

import React from "react";
// import styled from "styled-components";
// import { Github, Twitter, Mail, Headphones } from "react-feather";

const scales = {
  major: 8,
  minor: 4
} as const;

const scale = (scale: keyof typeof scales, multiplier: number) => {
  return scales[scale] * multiplier;
};

const Subhead: React.FC<any> = props => <Heading size={400} {...props} />;
const SubSubhead: React.FC<any> = props => <Heading size={300} {...props} />;
const SubSubSubhead: React.FC<any> = props => (
  <Heading size={200} fontStyle="italic" {...props} />
);

const SubCode: React.FC<any> = props => (
  <Heading
    size={200}
    tag="code"
    fontStyle="italic"
    marginRight={scale("major", 1)}
    {...props}
  />
);

// const FlexUnderline = styled(Flex)`
//   border-bottom: solid 1px #eee;
// `;

// const SubSubhead = styled(Subhead)`
//   font-size: 90%;
// `;

// const SubSubSubhead = styled(Subhead)`
//   font-size: 80%;
//   font-style: italic;
// `;

// const Pane = styled(Flex)`
//   border: solid 1px #eee;
// `;
// const SubCode = styled(Code)`
//   display: inline-block;
//   font-size: 80%;
//   font-style: italic;
//   margin-right: ${scale("major", 1)};
// `;

const Header = () => (
  <Pane
    display="flex"
    borderBottom="solid 1px #eee"
    flexDirection="row"
    flexWrap="wrap"
    paddingBottom={scale("major", 1)}
    marginBottom={scale("major", 1)}
    justifyContent="center"
    alignItems="center"
  >
    <Heading>theRebelRobot</Heading>
    <Pane flex={1} />
    <Pane>
      <Subhead>Aster Haven</Subhead>
    </Pane>
  </Pane>
);
const Software = () => (
  <Pane
    border="solid 1px #eee"
    margin={scale("major", 1)}
    padding={scale("major", 4)}
    width={[1, 1, "45%", 1 / 3]}
  >
    <Subhead>Software</Subhead>
    <SubSubSubhead marginTop={scale("major", 1)}>
      Full-stack Web Development, Node.js, React.js, Docker, Infrastructure,
      Systems Administration, DevOps and Scaling
    </SubSubSubhead>

    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      Saleae - Sr Software Engineer
    </SubSubhead>
    <SubSubSubhead>2017-Present</SubSubSubhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      Segment - Software Engineer
    </SubSubhead>
    <SubSubSubhead>2016-2017</SubSubSubhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      Code for San Francisco - Core Team
    </SubSubhead>
    <SubSubSubhead>2015-2017</SubSubSubhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      Mashape - Software Engineer
    </SubSubhead>
    <SubSubSubhead>2015-2016</SubSubSubhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      Node.js Website Working Group
    </SubSubhead>
    <SubSubSubhead>2014-2015</SubSubSubhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      Etcetera
    </SubSubhead>
    <SubSubSubhead>
      For additional information about employment history, including independent
      contracting, business ventures, or for a full resume, please reach out at
      <br />
      <SubCode>inquiries</SubCode>
      <SubCode>at</SubCode>
      <SubCode>therebelrobot.com</SubCode>
    </SubSubSubhead>
  </Pane>
);
const Music = () => (
  <Pane
    border="solid 1px #eee"
    margin={scale("major", 1)}
    padding={scale("major", 4)}
    width={[1, 1, "45%", 1 / 3]}
  >
    <Subhead>Music</Subhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      San Francisco Gay Men's Chorus
    </SubSubhead>
    <SubSubSubhead>
      The San Francisco Gay Men's Chorus provides community support through
      outreach, peformances, and anti-bullying curriculum to nearby schools.
      <br />
      Joined in 2017, Low Bass.
      <br />
      <Pane marginTop={scale("major", 2)} marginBottom={scale("major", 3)}>
        <iframe
          src="https://www.youtube.com/emarginBottomed/XuX7RLYxMVI"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </Pane>
    </SubSubSubhead>
    <SubSubhead marginTop={scale("major", 3)} marginBottom={scale("major", 2)}>
      theForgeProject
    </SubSubhead>
    <SubSubSubhead>
      A musical side-project, producing smooth rhythmic future-bass with a
      strong walking beat.
      <br />
      Started in 2016.
      <br />
      <br />
      For usage rights or booking, please reach out at
      <br />
      <SubCode>inquiries</SubCode>
      <SubCode>at</SubCode>
      <SubCode>therebelrobot.com</SubCode>
      <Pane marginTop={scale("major", 2)} marginBottom={scale("major", 3)}>
        <iframe
          src="https://open.spotify.com/emarginBottomed/user/1229875529/playlist/3MIgxg3v5FAYGpTg5aoD5c?theme=white"
          frameBorder="0"
          allowTransparency={true}
        />
      </Pane>
    </SubSubSubhead>
  </Pane>
);
const Contact = () => (
  <Pane
    display="flex"
    border="solid 1px #eee"
    margin={scale("major", 1)}
    padding={scale("major", 4)}
    width={[1]}
    align="center"
    justify="center"
    direction="column"
  >
    <Subhead>Contact</Subhead>
    <Pane
      display="flex"
      marginTop={scale("major", 1)}
      align="center"
      justify="center"
    >
      <Pane m={scale("major", 2)}>
        <Link href="https://github.com/therebelrobot">{/* <Github /> */}</Link>
      </Pane>
      <Pane m={scale("major", 2)}>
        <Link href="https://twitter.com/therebelrobot">
          {/* <Twitter /> */}
        </Link>
      </Pane>
      <Pane m={scale("major", 2)}>
        <Link href="https://theforgeproject.bandcamp.com">
          {/* <Headphones /> */}
        </Link>
      </Pane>
      <Pane m={scale("major", 2)}>
        <Link href="mailto:inquiries@therebelrobot.com">{/* <Mail /> */}</Link>
      </Pane>
    </Pane>
  </Pane>
);

const Root = () => (
  <Pane padding={scale("major", 4)}>
    <Header />
    <Pane display="flex" direction="row" wrap justify="center">
      <Software />
      <Music />
    </Pane>
    <Contact />
  </Pane>
);

export default Root;
