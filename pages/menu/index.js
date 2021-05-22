import Layout from "../../components/layout"
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'


import { getMenuTypesandMenuItems } from '../../lib/api'


export async function getStaticProps () {

    const menuTypes = await getMenuTypesandMenuItems()

    return {
        props: { menuTypes }
    }
}

export default function Menu ({ menuTypes }) {
    return (
        <Layout>
            <h1>Menu</h1>
            <p>This is the menu introduction.</p>
            {menuTypes.edges.map(edge => {
                const {name, items} = edge.node;
                return <Section title = {name}>
                     <Row justifyContentCenter>
                    { items.edges.map((edge, index) => {
                        const {node} = edge;
                        return <Col sm = {6} md = {4} lg = {3} key = {index}> 
                            <Card node = { node} parentPath = "menu"/>
                        </Col>
                    }) }
                    </Row>
                </Section>
            })}

        </Layout>
    )
}

