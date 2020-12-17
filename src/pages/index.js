import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [val, setVal] = useState({})

  useEffect(() => {
    fetch("/.netlify/functions/hello?name=server less func")
      .then(res => res.json())
      .then(obj => setVal(obj))
  }, [])
  console.log(val.message)
  return (
    <Layout>
      <div>{val.message}</div>
    </Layout>
  )
}

export default IndexPage
