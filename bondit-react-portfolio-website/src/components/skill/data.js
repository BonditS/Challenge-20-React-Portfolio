import {SiJavascript} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiGraphql} from 'react-icons/si'
const data = [
    {
        id: 1, icon: <SiHtml5/>, title: 'HTML5', description: 'HTML5 is the latest version of the Hypertext Markup Language. I use HTML5 to structure web content with upgraded multimedia and semantic capabilites, and enhanced APIs for dynamic web experiences.'
    },
    {
        id: 2, icon: <SiCss3/>, title: 'CSS3', description: 'CSS3 is the most up to date version of Cascading Style Sheets language. CSS3 are used for styling and visualing web content layout. It offers updated features like animations, transitions, responsive design for multiple divices.'
    },
    {
        id: 3, icon: <SiJavascript/>, title: 'JavaScript', description: 'I used JavaScript to add interactivity to a web page. I used JavaScript to manipulate HTML and CSS, make dynamic updates to web content, handle user events, and perform asynchronous operations. JavaScript is an essential component of modern web development.'
    },
    {
        id: 4, icon: <FaNodeJs/>, title: 'Node.js', description: 'Node.js is an open-source, cross-platform JavaScript runtime environment for executing JavaScript code on the server-side. In another word, Node.js let me run JavaScript on my computer, making web applications fast and efficient. It is very crucial tool for a developer.'
    },
    {
        id: 5, icon: <SiMongodb/>, title: 'MongoDB', description: 'MongoDB is a popular NoSQL database. I like to use it to store data because I can store data as flexible documents in collections. It offers rich querying, sharding for scalability and high availability. It is easy to integrate into a fullstack applications.'
    },
    {
        id: 6, icon: <SiReact/>, title: 'React', description: 'React is a JavaScript library for building amazing user interfaces. I like to use React components and declarative syntax for fast, efficient, and scalable web application.'
    },
    {
        id: 7, icon: <SiGraphql/>, title: 'GraphQL', description: 'GraphQL is a flexible, efficient and scalable query language for APIs. When I used GraphQL, I can replace multiple REST endpoints with only a single endpoints and let clients to specify exactly what data they need.'
    },
]

export default data;