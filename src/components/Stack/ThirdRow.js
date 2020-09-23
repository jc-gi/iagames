import React, { Fragment } from "react"
import Card from "./CardComponent"
import { THIRDROW } from "../../data/thirdrow"

const ThirdRow = () => {
  return (
    <Fragment>
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      {THIRDROW.map(item => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </Fragment>
  )
}

export default ThirdRow
