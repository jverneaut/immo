import React, { useEffect } from "react"
import Header from "../components/Header"
import GoogleMapReact from "google-map-react"

import "../styles/main.scss"

const Layout = props => {
  useEffect(() => {
    console.log("Mounted")
    return () => {
      console.log("Unmounted")
    }
  }, [])

  if (props.pageContext.layout === "map") {
    return (
      <div className="layout">
        <div className="layout__top">
          <Header />
        </div>
        <div className="layout__bottom">
          <div className="layout__left">
            <GoogleMapReact
              // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
              defaultCenter={{ lat: 10, lng: 30 }}
              defaultZoom={11}
            >
              {/* <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                /> */}
            </GoogleMapReact>
          </div>
          <div className="layout__right">{props.children}</div>
        </div>
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
