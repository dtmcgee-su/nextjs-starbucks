// next.js components
import Head from 'next/head'

//custom components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Button
         label='View Menu'
         path='/menu'
         type='primary'
          />
          <Button
         label='View Locations'
         path='/locations'
         type='primary'
          />
          <Button
         label='View Employees'
         path='/people'
         type='primary'
          />
          <Button
         label='About Me'
         path='/about'
         type='secondary'
          />
        
      </section>
      <Link href = "/menu">
          <a>
              <Image 
              src = '/images/showcase.jpg'
              width={1000}
              height = {500}
              alt = "Showcase"
              />
          </a>
      </Link>
      <Link href = '/menu'>
        <a>
          <h1>Menu</h1>
        </a>
      </Link>
      <h3>The highest quality coffees from farms around the world. Freshly roasted by hand to bring out every nuance, so you can taste the craft in very cup.</h3>
      <Button
        label='View Menu'
         path='/menu'
         type='primary'
       />
      <Link href = "/locations">
          <a>
              <Image 
              src = '/images/location.jpg'
              width={1000}
              height = {500}
              alt = "Starbucks Building"
              />
          </a>
      </Link>
      <Link href = '/locations'>
        <a>
          <h1>Locations</h1>
        </a>
      </Link>
      <h3>Find a Starbucks location near you and pick up your favorite coffee & food items today.</h3>
      <Button
        label='View Locations'
         path='/locations'
         type='primary'
       />
    </Layout>
  )
}