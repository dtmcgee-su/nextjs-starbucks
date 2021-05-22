import Layout from "../../components/layout"
import Image from "next/image"
import Link from "next/link"
import { getLocationSlugs, getLocationBySlug } from '../../lib/api'

import Row from "../../components/row"
import Col from "../../components/col"

// getStaticPaths
export async function getStaticPaths() {

    const allLocations = await getLocationSlugs()

    const paths = allLocations.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

//getStaticProps
export async function getStaticProps({ params }) {

    const locationData = await getLocationBySlug(params.id)

    return {
        props : {
            locationData
        }
    }

}
//initiliaze the componenet

export default function LocationItem({ locationData }) {

    const { title, featuredImage, content } = locationData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node; 

    const { width, height} = mediaDetails;
   

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href = "/locations">
                        <a>Back to Locations</a>
                    </Link>
                </Col>
            </Row>
             <Image 
                src = {sourceUrl}
                width = {width}
                height = {height}
                alt = {altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content}} />
        </Layout>
    )
}