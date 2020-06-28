import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import VideoHero from "@components/video-hero"
import AllBands from "@modules/all-bands"
import Map from "@modules//map"
import { twelveFakeBands } from "@fakeData"

const IndexPage = () => (
  <Layout>
    <VideoHero />
    <AllBands bands={twelveFakeBands} />
    <Map />
  </Layout>
)

export default IndexPage
