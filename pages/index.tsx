import config from "../config";
const CosmosClient = require('@azure/cosmos').CosmosClient;

interface Props {
    name: string;
}
const Home = (props: Props) => <h1>Hello {props.name}! </h1>;

Home.getInitialProps = async function() {
    return { name: 'Unknown'};
}

export default Home;