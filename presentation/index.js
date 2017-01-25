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

import CodeSlide from 'spectacle-code-slide';

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
    something: require('../assets/something.png'),
    tea: require('../assets/tea.jpg'),
    jackson: require('../assets/jackson.png'),
    florence: require('../assets/florence.png'),
    redux: require('../assets/redux.png'),
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
                        <Heading size={1} fit caps lineHeight={1} textColor="secondary">react-router v4</Heading>
                        <Heading size={1} fit caps>With Michael Jackson… and kittens!</Heading>
                        <Text textAlign="left">If you want to code with me:</Text>
                        <CodePane lang="bash" source={require("raw!../assets/install.sh")} textSize="1.75rem" />
                        <Text textAlign="left">Open <Code>App.jsx</Code> and toggle <Code>SHOW_ALL_COMPONENTS</Code>.</Text>
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
                        <Heading textAlign="left" size={1} lineHeight={1} textColor="secondary">Live coding</Heading>

                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Demo project</Heading>
                        <List>
                            <ListItem>mimics a simple online shop</ListItem>
                            <ListItem>was created with <Link href="https://github.com/facebookincubator/create-react-app">create-react-app</Link></ListItem>
                            <ListItem>uses <Link href="https://github.com/picturepan2/spectre">Spectre.css</Link> and <Link href="https://icomoon.io/#icon-font">IconMoo</Link></ListItem>
                            <ListItem>contains (mostly) statless components</ListItem>
                            <ListItem>doesn't use a backend (all data in <Code>mockData.js</Code>)</ListItem>
                        </List>
                        <Text textAlign="left">Use <strong>tags</strong> <Code>step-*</Code> if you're stuck or have a look at <strong>branch</strong> <Code>feature/add-routing</Code> to see finished project.</Text>
                    </Slide>

                    <Slide bgImage={images.screenshot} bgDarken={0.50}>
                        <Heading size={2} lineHeight={1} textColor="tertiary">Demo</Heading>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Declarative routing</Heading>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Configuration</Heading>
                        <List>
                            <ListItem><Code>&lt;*Router /&gt;</Code>: Browser, Hash, Memory, Server</ListItem>
                            <ListItem><Code>&lt;Match /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;Miss /&gt;</Code></ListItem>
                        </List>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Action</Heading>
                        <List>
                            <ListItem><Code>&lt;Link /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;NavigationPrompt /&gt;</Code></ListItem>
                            <ListItem><Code>&lt;Redirect /&gt;</Code> - not covered in this talk</ListItem>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">#1 Setting up the router</Heading>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Installing (done in project)</Heading>
                        <CodePane lang="bash" textSize="1.75rem">
                            npm install --save react-router@4.0.0-alpha.6
                        </CodePane>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Using</Heading>
                        <CodePane source={require("raw!../assets/using.example")} lang="jsx" textSize="1.75rem" />
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/missAndMatch.example')}
                        ranges={[
                            { loc: [0, 54], title: "#2 Simple routes"},
                            { loc: [3, 4], note: "Import the router components"},
                            { loc: [22, 28], note: "Render the component 'About' for path '/about'"},
                            { loc: [29, 34], note: "... 'Cart' for path '/cart'"},
                            { loc: [35, 40], note: "... and  'Contact' for path '/contact'"},
                            { loc: [41, 42], note: "Render this component when NO Match is active"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/markActiveAlternative.example')}
                        ranges={[
                            { loc: [0, 0], title: "#3a Add the navigation"},
                            { loc: [8, 10], note: "Place the navigation on top of all other components"},
                            { loc: [34, 37], note: "Define the contextTypes"},
                            { loc: [0, 1], note: "Pass in 'context' to App()"},
                            { loc: [4, 5], note: "Grab 'location.pathname' from 'history'"},
                            { loc: [10, 11], note: "The second part of the path to is the active item"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/addLinksToNavigation.example')}
                        ranges={[
                            { loc: [0, 0], title: "#3b Make links work"},
                            { loc: [1, 2], note: "Import <Link />"},
                            { loc: [11, 13], note: "Use it instead of the anchor"},
                            { loc: [18, 19], note: "close the tag"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Text>We can navigate through our shop.</Text>
                        <Image src={images.something} width={339} height={490} />
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/matchWithRender.example')}
                        ranges={[
                            { loc: [0, 0], title: "#4 More routes / views"},
                            { loc: [0, 10], note: "Display a component with props"},
                            { loc: [3, 9], note: "Gain flexibility with render()"},
                            { loc: [10, 20], note: "The first category also uses props"},
                            { loc: [15, 17], note: "Can we improve this?"},
                            { loc: [20, 30], note: "Yes we can!"},
                            { loc: [30, 40], note: "render() gets called with useful payload"},
                            { loc: [43, 47], note: "Reading query parameters from location.query"},
                            { loc: [49, 58], note: "Combining URL and query parameters"},
                            { loc: [60, 70], note: "There can more more than one URL parameter"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/category.example')}
                        ranges={[
                            { loc: [0, 0], title: "#5 Quick win: Category"},
                            { loc: [1, 2], note: "Import <Link /> ..."},
                            { loc: [5, 11], note: "... and use it"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/listFinal.example')}
                        ranges={[
                            { loc: [0, 0], title: "#6 Finishing the list view"},
                            { loc: [1, 2], note: "You know the drill. ;)"},
                            { loc: [20, 25], note: "Add a sort link to the header; use a question mark and let the browser do the work"},
                            { loc: [43, 52], note: "Link to the product"},
                            { loc: [73, 80], note: "Link to the category"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/recursive.example')}
                        ranges={[
                            { loc: [0, 0], title: "#7 Detail view"},
                            { loc: [119, 120], note: "Let us change a default prop first (sorry!)"},
                            { loc: [1, 2], note: "We'll need Match and Link"},
                            { loc: [114, 117], note: "Instead of passing in the pathname as a prop, we'll use context here"},
                            { loc: [5, 6], note: "Passing in the context as a second argument"},
                            { loc: [14, 19], note: "Let's replace the <a href> with a <Link /> using context.history"},
                            { loc: [71, 73], note: "Adding a <Match /> to <Detail />"},
                            { loc: [81, 91], note: "Calling <Detail /> inside of <Detail />"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Text>Still motivated and following?</Text>
                        <Image src={images.tea} width={528} height={440} />
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/programmatically.example')}
                        ranges={[
                            { loc: [0, 59], title: "#8 Navigate w/o <Link />"},
                            { loc: [28, 29], note: "We grab 'transitionTo()' from 'context.router'..."},
                            { loc: [22, 23], note: "...and use it with the search term"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/prevent.example')}
                        ranges={[
                            { loc: [0, 51], title: "#9 Preventing navigation"},
                            { loc: [1, 2], note: "We need <NavigationPropmt />"},
                            { loc: [23, 27], note: "It will be active when 'when' is truthfully"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">react-router + Redux?</Heading>
                        <Appear>
                            <div>
                                <Link textColor="tertiary" href="https://www.youtube.com/watch?v=kp-NOggyz54">
                                    <Image src={images.florence} width={858} height={478} />
                                </Link>
                                <Link textColor="tertiary" href="https://www.youtube.com/watch?v=kp-NOggyz54">
                                    <p>Ryan Florence - &lsaquo;Rethinker stop=&#123;false&#125;/&nbsp;&rsaquo;</p>
                                </Link>
                            </div>
                        </Appear>

                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Options to using it</Heading>
                        <List>
                            <ListItem><Link textColor="tertiary" href="https://github.com/ReactTraining/react-router-addons-controlled">react-router-addons-controlled</Link> - experimental</ListItem>
                            <ListItem><Link textColor="tertiary" href="https://github.com/timdorr/react-router-redux/tree/5.0.x">react-router-redux</Link> on 5.0.x - inactive for months</ListItem>
                            <ListItem><Link textColor="tertiary" href="https://github.com/supasate/connected-react-router">connected-react-router</Link> - experimental</ListItem>
                        </List>
                        <Appear>
                            <Text textAlign="left">Tip: use <Code>connected-react-router</Code> if you're brave!</Text>
                        </Appear>
                        <Appear>
                            <Text textAlign="left">Check out the branch <Code>/feature/add-redux</Code> on the demo project.</Text>
                        </Appear>
                    </Slide>


                    <Slide>
                        <Text>We saw the kittens, but where is <em>Michael Jackson</em>?</Text>
                        <Appear>
                            <Image src={images.jackson} width={965} height={638} />
                        </Appear>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1.5} textColor="secondary">Questions?</Heading>
                        <Text textAlign="left">Ask now or <Link textColor="tertiary" href="#/2">contact me</Link> later.</Text>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1.5} textColor="secondary">Everything is on Github...</Heading>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore">Demo project without routing (master branch)</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore/tree/feature/add-routing">Finished project</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore/tree/feature/add-redux">Finished project (with Redux)</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore-presentation">Code of the presentation</Link></Text>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1.5} textColor="secondary">Or online...</Heading>
                        <Text textAlign="left"><Link textColor="tertiary" href="http://react-router-v4.surge.sh">Presentation</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="http://jonathanweiss.net/kittenstore/">Finished project</Link></Text>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
