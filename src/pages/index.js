import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <h1>Style Décor</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to about page</Link>
  </Layout>
)

export default () => (
  <div style={{ color: `purple` }}>
  <h1>Hello Gatsby!</h1>
  <p>What a world.</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  <Link to="/about/">Go to about page</Link>
  <Link to="/contact/">Contact</Link>
  </div>
)
