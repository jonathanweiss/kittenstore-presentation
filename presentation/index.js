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
                        <CodePane lang="bash" textSize="1.75rem">
                            npm install --save react-router@next --save
                        </CodePane>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Using</Heading>
                        <CodePane source={require("raw!../assets/using.example")} lang="jsx" textSize="1.75rem" />
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/missAndMatch.example')}
                        ranges={[
                            { loc: [0, 0], title: "Using <Miss /> and <Match />"},
                            { loc: [3, 4], note: "Import the router components"},
                            { loc: [22, 26], note: "Define the component 'About' for path '/about'"},
                            { loc: [27, 28], note: "Render this component when NO Match is active"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Text>We've added a single route and a 404 page.</Text>
                        <Image src={images.something} width={339} height={490} />
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/addNavigation.example')}
                        ranges={[
                            { loc: [0, 0], title: "Adding navigation"},
                            { loc: [22, 23], note: "Place the navigation on top of all other components"},
                            { loc: [23, 38], note: "We can add more static pages while we are here"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/addLinksToNavigation.example')}
                        ranges={[
                            { loc: [0, 0], title: "Let's enable those links"},
                            { loc: [1, 2], note: "Import the <Link /> component"},
                            { loc: [11, 16], note: "And use it anstead of <a href>"},
                            { loc: [18, 19], note: "Don't forget the closing tag"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />
                    <CodeSlide
                        code={require('raw!../assets/markActiveNavigationItem.example')}
                        ranges={[
                            { loc: [0, 9], title: "Mark nav item as active"},
                            { loc: [0, 1], note: "'children' function has useful arguments"},
                            { loc: [1, 6], note: "First part of 'location' is the active entry"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/markActiveAlternative.example')}
                        ranges={[
                            { loc: [0, 21], title: "Use 'context' instead"},
                            { loc: [18, 21], note: "define the contextTypes"},
                            { loc: [0, 1], note: "Use the 'context' parameter"},
                            { loc: [4, 5], note: "Get the 'pathname' from it"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/matchWithRender.example')}
                        ranges={[
                            { loc: [0, 48], title: "What about props?"},
                            { loc: [3, 9], note: "Gain flexibility with render()"},
                            { loc: [15, 17], note: "Can we improve this?"},
                            { loc: [24, 28], note: "Yes we can!"},
                            { loc: [31, 44], note: "Accessing URL parameters"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Text textAlign="left">We have to adjust <Code>Homepage.jsx</Code></Text>
                        <CodePane lang="js" textSize="1.75rem">
                            const catData = props.data.products.cats;
                        </CodePane>
                        <Text textAlign="left">into</Text>
                        <CodePane lang="js" textSize="1.75rem">
                            const catData = props.data;
                        </CodePane>
                        <Text textAlign="left">and</Text>
                        <CodePane lang="js" textSize="1.75rem">
                            data: React.PropTypes.object,
                        </CodePane>
                        <Text textAlign="left">into</Text>
                        <CodePane lang="js" textSize="1.75rem">
                            data: React.PropTypes.array,
                        </CodePane>
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/addLinksToCategory.example')}
                        ranges={[
                            { loc: [0, 43], title: "Adding <Link />s"},
                            { loc: [1, 2], note: "First import it"},
                            { loc: [15, 17], note: "We add a new var here..."},
                            { loc: [24, 31], note: "... and pass it to renderProduct()"},
                            { loc: [3, 6], note: "Use 'type' and 'slug' to create the target"},
                            { loc: [10, 11], note: "Closing it"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/lastRoutes.example')}
                        ranges={[
                            { loc: [0, 24], title: "Only two more routes"},
                            { loc: [1, 11], note: "There can be more than one parameter"},
                            { loc: [13, 22], note: "The search will be simple"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/lastRoutes.example')}
                        ranges={[
                            { loc: [0, 14], title: "Only two more routes"},
                            { loc: [1, 11], note: "There can be more than one parameter"},
                            { loc: [13, 22], note: "The search will be simple"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/listFinal.example')}
                        ranges={[
                            { loc: [0, 106], title: "Finalizing <List />"},
                            { loc: [1, 2], note: "You know the drill. ;)"},
                            { loc: [101, 102], note: "Defining the contextTypes"},
                            { loc: [75, 76], note: "Getting the pathname..."},
                            { loc: [88, 89], note: "...and passing it to renderProducts()"},
                            { loc: [41, 46], note: "Adding a link to the cat name"},
                            { loc: [18, 19], note: "Adding links to all headers for sorting"},
                            { loc: [19, 20], note: "Show an arrow if it's sorted after this header"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/requestParams.example')}
                        ranges={[
                            { loc: [0, 22], title: "Request parameters"},
                            { loc: [3, 10], note: "Accessing 'location.query'"},
                            { loc: [15, 17], note: "Passing it in as a prop"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Text>Still motivated and following?</Text>
                        <Image src={images.tea} width={528} height={440} />
                    </Slide>

                    <CodeSlide
                        code={require('raw!../assets/recursive.example')}
                        ranges={[
                            { loc: [0, 123], title: "recursive rendering"},
                            { loc: [1, 2], note: "We'll need Match and Link"},
                            { loc: [16, 19], note: "Let's replace the <a href> while we're here..."},
                            { loc: [71, 75], note: "Adding a <Match /> to <Detail />"},
                            { loc: [83, 88], note: "Calling <Detail /> inside of <Detail />"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/programmatically.example')}
                        ranges={[
                            { loc: [0, 59], title: "Navigate programatically"},
                            { loc: [28, 29], note: "We grab 'transitionTo()' from 'context.router'..."},
                            { loc: [22, 23], note: "...and use it with the search term"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <CodeSlide
                        code={require('raw!../assets/prevent.example')}
                        ranges={[
                            { loc: [0, 51], title: "Preventing navigation"},
                            { loc: [1, 2], note: "We need <NavigationPropmt />"},
                            { loc: [23, 27], note: "It will be active when 'when' is truthful"},
                        ]}
                        lang="jsx"
                        transition={[]}
                    />

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">react-router + Redux?</Heading>
                        <Appear>
                            <Image src={images.redux} width={739} height={483} />
                        </Appear>
                    </Slide>

                    <Slide>
                        <Heading textAlign="left" size={2} lineHeight={1} textColor="tertiary">Options to using it</Heading>
                        <List>
                            <ListItem><Link textColor="tertiary" href="https://github.com/timdorr/react-router-redux/tree/5.0.x">react-router-redux</Link> on 5.0.x - inactive for months</ListItem>
                            <ListItem><Link textColor="tertiary" href="https://github.com/supasate/connected-react-router">connected-react-router</Link> - experimental project</ListItem>
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
                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Questions?</Heading>
                        <Text textAlign="left">Ask now or <Link textColor="tertiary" href="#/2">contact me</Link> later.</Text>

                        <Heading textAlign="left" size={3} textFont="primary" lineHeight={1} textColor="secondary">Everything is on Github</Heading>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore">Demo project without routing (master branch)</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore/tree/feature/add-routing">Finished project</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore/tree/feature/add-redux">Finished project (with Redux)</Link></Text>
                        <Text textAlign="left"><Link textColor="tertiary" href="https://github.com/jonathanweiss/kittenstore-presentation">This presentation</Link></Text>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
