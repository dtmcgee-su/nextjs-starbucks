import Image from 'next/image'
import Heading from './heading'

import Link from 'next/link';

export default function Card({ node, parentPath }) {
   
   const { title, slug, featuredImage } = node;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node; 

    const { width, height} = mediaDetails;
   
    return (
        <div className = 'card'>
            <Image 
                src = {sourceUrl}
                width = {width}
                height = {height}
                alt = {altText}
            />
            <Heading type="h3">
               <Link href = {`/${parentPath}/${slug}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Heading>
        </div>
    )
}
