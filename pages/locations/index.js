import Layout from "../../components/layout"
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import { getLocationNames } from '../../lib/api'

// getStaticProps

export async function getStaticProps() {

    const locationData = await getLocationNames()

    return{
        props: {locationData}
    }

}

export default function Locations ({ locationData }) {
    return (
        <Layout>
            <h1>Locations</h1>
            <p>This is the locations introduction.</p>
            <Section>
                <Row justifyContentCenter>
            {locationData.edges.map((edge, index) => {
                const {node} = edge;
                return <Col sm = {6} md = {4} lg = {3} key = {index}> 
                    <Card node = { node} parentPath = "locations" />
                </Col>
            })}
                 </Row>
            </Section>
        </Layout>
    )
}