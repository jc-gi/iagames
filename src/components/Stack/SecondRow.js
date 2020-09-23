import React, { Fragment, useContext } from "react"
import { ModeContext } from "../../context/ModeContext"
import { SECONDROW } from "../../data/secondrow"
import Card from "./CardComponent"

const SecondRow = () => {
  const { mode } = useContext(ModeContext)
  return (
    <Fragment>
      {SECONDROW.map(item =>
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
      {SECONDROW.map(item =>
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
      {SECONDROW.map(item =>
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
      {SECONDROW.map(item =>
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
      {SECONDROW.map(item =>
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
      {SECONDROW.map(item =>
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
    </Fragment>
  )
}

export default SecondRow
