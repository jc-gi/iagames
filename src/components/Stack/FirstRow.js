import React, { Fragment, useContext } from "react"
import { ModeContext } from "../../context/ModeContext"
import { FIRSTROW } from "../../data/firstrow"
import Card from "./CardComponent"

const FirstRow = () => {

  const {mode} = useContext(ModeContext)
  return (
    <Fragment>
      {FIRSTROW.map(item =>
        item.darkmode && mode ? (
          <Card
            key={item.title}
            image={item.imageDark}
            title={item.title}
            description={item.description}
          />
        ) : (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
      {FIRSTROW.map(item =>
        item.darkmode && mode  ? (
          <Card
            key={item.title}
            image={item.imageDark}
            title={item.title}
            description={item.description}
          />
        ) : (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
      {FIRSTROW.map(item =>
        item.darkmode && mode  ? (
          <Card
            key={item.title}
            image={item.imageDark}
            title={item.title}
            description={item.description}
          />
        ) : (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
      {FIRSTROW.map(item =>
        item.darkmode && mode  ? (
          <Card
            key={item.title}
            image={item.imageDark}
            title={item.title}
            description={item.description}
          />
        ) : (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
      {FIRSTROW.map(item =>
        item.darkmode && mode  ? (
          <Card
            key={item.title}
            image={item.imageDark}
            title={item.title}
            description={item.description}
          />
        ) : (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
      {FIRSTROW.map(item =>
        item.darkmode && mode  ? (
          <Card
            key={item.title}
            image={item.imageDark}
            title={item.title}
            description={item.description}
          />
        ) : (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
    </Fragment>
  )
}

export default FirstRow
