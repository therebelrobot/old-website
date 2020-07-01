import { Code, Heading, Link, Pane, Text } from 'evergreen-ui';
import React from 'react';
import { GitHub, Headphones, Mail, Twitter } from 'react-feather';
import { Helmet } from 'react-helmet';
import YouTube from 'react-youtube';
const Spacer = ({ size = 1 }) => (
  <Pane width={size * 8} height={size * 8} flexShrink={0} />
);

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          aster haven (@therebelrobot) - software, hardware, gardenware
        </title>
      </Helmet>
      <style global jsx>{`
        @import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);
        @import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');
        * {
          font-family: 'Cabin', sans-serif !important;
        }
        body,
        html {
          background: white;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          font-family: 'Cabin', sans-serif !important;
          background: url(/static/what-the-hex.png);
        }
      `}</style>
      <Pane textAlign="center">
        <Spacer size={5} />
        <Heading size={900}>aster haven</Heading>
        <Heading size={300}>they/them or she/her</Heading>
        <Spacer size={3} />
        <Pane
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Pane
            border="default"
            padding={8}
            width="100%"
            maxWidth={300}
            maxHeight="75vh"
            overflowY="auto"
          >
            <Heading>software</Heading>
            <Spacer size={3} />
            <Text>
              full-stack web development, node.js, react.js, docker,
              infrastructure, systems administration, devops and scaling
            </Text>
            <Spacer size={3} />
            <Heading>medium.com</Heading>
            <Heading size={300}>sr software engineer</Heading>
            <Text>2019-present</Text>
            <Spacer size={3} />
            <Heading>san francisco gay men's chorus</Heading>
            <Heading size={300}>archive team</Heading>
            <Text>2018-present</Text>
            <Spacer size={3} />
            <Heading>saleae</Heading>
            <Heading size={300}>sr software engineer</Heading>
            <Text>2017-2019</Text>
            <Spacer size={3} />
            <Heading>segment</Heading>
            <Heading size={300}>software engineer</Heading>
            <Text>2016-2017</Text>
            <Spacer size={3} />
            <Heading>code for san francisco</Heading>
            <Heading size={300}>core team</Heading>
            <Text>2015-2017</Text>
            <Spacer size={3} />
            <Heading>mashape</Heading>
            <Heading size={300}>software engineer</Heading>
            <Text>2015-2016</Text>
            <Spacer size={3} />
            <Heading>node.js website working group</Heading>
            <Text>2014-2015</Text>
            <Spacer size={3} />

            <Text>
              contact for additional information about employment history,
              including independent contracting, business ventures, or for a
              full resume, please reach out at <Code>inquiries</Code>
              <Code>at</Code>
              <Code>therebelrobot.com</Code>
            </Text>
          </Pane>
          <Spacer size={3} />
          <Pane
            border="default"
            padding={8}
            maxWidth={300}
            width="calc(100vw - 32px)"
            maxHeight="75vh"
            overflowY="auto"
          >
            <Heading>music</Heading>
            <Spacer size={3} />
            <Heading size={400}>san francisco gay men's chorus</Heading>
            <Spacer />
            <Text>
              providing community support through outreach, performances, and
              anti-bullying curriculum to nearby schools.
            </Text>
            <Spacer />
            <Text>2017-2018, low bass.</Text>
            <br />
            <Text>2018-present, archive project lead.</Text>
            <Spacer />
            <YouTube
              videoId="XuX7RLYxMVI"
              opts={{ width: '284', height: '159.75' }}
            />
            <Spacer size={3} />
            <Heading size={400}>the forge project</Heading>
            <Spacer />
            <Text>
              a musical side-project, producing smooth rhythmic future-bass with
              a strong walking beat.
            </Text>
            <Spacer />
            <Text>started in 2016.</Text>
            <Spacer />
            <iframe
              src="https://open.spotify.com/embed/artist/76zOPgY1LiqJjT19OteunL"
              width="284"
              height="175"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/artist/4a56tUWRygifILXCoXAcoP"
              width="284"
              height="330"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            <Text>
              for usage rights or booking, please reach out at{' '}
              <Code>inquiries</Code>
              <Code>at</Code>
              <Code>therebelrobot.com</Code>
            </Text>
          </Pane>
        </Pane>
      </Pane>
      <Spacer size={3} />
      <Pane
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        maxWidth={624}
        width="100%"
        border="default"
        padding={16}
      >
        <Link href="https://github.com/therebelrobot">
          <GitHub />
        </Link>
        <Spacer size={3} />
        <Link href="https://twitter.com/therebelrobot">
          <Twitter />
        </Link>
        <Spacer size={3} />
        <Link href="https://theforgeproject.bandcamp.com/">
          <Headphones />
        </Link>
        <Spacer size={3} />
        <Link href="mailto:inquiries@therebelrobot.com">
          <Mail />
        </Link>
      </Pane>
    </React.Fragment>
  );
}

export default Home;
