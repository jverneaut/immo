import React, { useEffect } from "react"
// import { graphql } from "gatsby"
// import { Link } from "gatsby"
import Header from "../components/Header"

const Layout = props => {
  useEffect(() => {
    console.log("Mounted")
    return () => {
      console.log("Unmounted")
    }
  }, [])

  if (props.pathContext.layout === "map") {
    return (
      <div>
        <Header />
        <div>Faites comme si j'étais une carte</div>
        <img src="https://picsum.photos/500/300" alt="" />
        {props.children}
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        {props.children}
      </div>
    )
  }
}

export default Layout
