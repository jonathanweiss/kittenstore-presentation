// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    screenshot: require('../assets/screenshot.png'),
};

preloader(images);

const theme = createTheme(
    {
        primary: "#fff",
        secondary: '#212121',
        tertiary: '#00c6dc',
        quartenary: '#5adc1a'
    },
    {
        primary: "Josefin Sans",
        secondary: "Alegreya",
        tertiary: "Inconsolata"
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['slide']} transitionDuration={250} progress="number">
                    <Slide>
                        <Heading size={1} fit caps lineHeight={1} textColor="secondary">react-router</Heading>
                        <Heading size={1} fit caps>With Michael Jackson… and kittens!</Heading>
                        <Text textAlign="left">If you want to code with me:</Text>
                        <CodePane
                            lang="bash"
                            source={require("raw!../assets/install.sh")}
                            textSize="1.75rem"
                        />
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Jonathan Weiß</Heading>
                        <List>
                            <ListItem>Freelance JavaScript / front-end dev</ListItem>
                            <ListItem><Link textColor="tertiary" href="https://github.com/jonathanweiss">https://github.com/jonathanweiss</Link></ListItem>
                            <ListItem><Link textColor="tertiary" href="https://twitter.com/jonathan_weiss">@jonathan_weiss</Link></ListItem>
                            <ListItem><Link textColor="tertiary" href="https://linkedin.com/in/jonathanfweiss">LinkedIn</Link>, <Link textColor="tertiary" href="https://www.xing.com/profile/Jonathan_Weiss5">XING</Link></ListItem>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Demo project</Heading>
                        <List>
                            <ListItem>mimics a simple online shop</ListItem>
                            <ListItem>was created with <Link href="https://github.com/facebookincubator/create-react-app">create-react-app</Link></ListItem>
                            <ListItem>uses <Link href="https://github.com/picturepan2/spectre">Spectre.css</Link> and <Link href="https://icomoon.io/#icon-font">IconMoo</Link></ListItem>
                            <ListItem>contains (mostly) statless components</ListItem>
                            <ListItem>doesn't use a backend</ListItem>
                        </List>
                    </Slide>

                    <Slide bgImage={images.screenshot} bgDarken={0.50}>
                        <Heading size={2} lineHeight={1} textColor="tertiary">Demo</Heading>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Declarative routing</Heading>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Configuration</Heading>
                        <List>
                            <ListItem><Code>&lt;*Router /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;Match /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;Miss /&gt;</Code></ListItem>
                        </List>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Helper</Heading>
                        <List>
                            <ListItem><Code>&lt;Link /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;NavigationPrompt /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;Redirect /&gt;</Code></ListItem>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Setting up the router</Heading>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Installing</Heading>
                        <CodePane
                            lang="bash"
                            textSize="1.75rem"
                        >
                            npm install react-router@4.0.0-2 --save
                        </CodePane>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Using</Heading>
                        <CodePane
                            source={require("raw!../assets/using.example")}
                            lang="jsx"
                            textSize="1.75rem"
                        />
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Components for matches</Heading>
                        <CodePane
                            source={require("raw!../assets/match.example")}
                            lang="jsx"
                            textSize="1.75rem"
                        />

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Fallback component</Heading>
                        <CodePane
                            source={require("raw!../assets/miss.example")}
                            lang="jsx"
                            textSize="1.75rem"
                        />
                    </Slide>


                    <Slide>
                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Questions?</Heading>
                        <Text textAlign="left">Ask now or <Link textColor="tertiary" href="#/2">contact me</Link> later.</Text>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Everything is on Github</Heading>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore">Demo project without routing (master branch)</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore/tree/feature/add-routing">Finished project</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore-presentation">This presentation</Link></Text>
                    </Slide>


                </Deck>
            </Spectacle>
        );
    }
}
