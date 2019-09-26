import React, { useEffect } from "react"
import Header from "../components/Header"
import GoogleMapReact from "google-map-react"
import { Link } from "gatsby"

import "../styles/main.scss"

const Indicator = ({ slug }) => (
  <Link to={"/" + slug} className="indicator"></Link>
)

const Layout = props => {
  const [center, setCenter] = React.useState({
    lat: null,
    lng: null,
  })

  useEffect(() => {
    setCenter({
      lat: parseFloat(props.data.product.lat),
      lng: parseFloat(props.data.product.lng),
    })
  }, [props.data.product])

  if (props.pageContext.layout === "map") {
    return (
      <div className="layout">
        <div className="layout__top">
          <Header />
        </div>
        <div className="layout__bottom">
          <div className="layout__left">
            <GoogleMapReact
              defaultCenter={{ lat: 7.7461514, lng: 7.7461514 }}
              center={center}
              defaultZoom={13}
            >
              {props.data.allProduct.nodes.map(product => (
                <Indicator
                  key={product.id}
                  lat={parseFloat(product.lat)}
                  lng={parseFloat(product.lng)}
                  slug={product.slug}
                />
              ))}
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
