import Layout from "../../components/layout"
import Section from "../../components/section"
import Row from "../../components/row"
import Col from "../../components/col"
import Card from "../../components/card"
import { getPeopleNames } from "../../lib/api"
// getStaticProps

export async function getStaticProps() {

    const peopleData = await getPeopleNames()

    return{
        props: {peopleData}
    }

}


export default function People({ peopleData }) {
    return (
        <Layout>
            <h1>People</h1>
            <p>This is the People introduction.</p>
            <Section>
                <Row justifyContentCenter>
            {peopleData.edges.map((edge, index) => {
                const {node} = edge;
                return <Col sm = {6} md = {4} lg = {3} key = {index}> 
                    <Card node = { node} parentPath = "people" />
                </Col>
            })}
                 </Row>
            </Section>
        </Layout>
    )
}

