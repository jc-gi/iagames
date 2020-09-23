import React, { Fragment, useContext } from "react"
import { ModeContext } from "../../context/ModeContext"
import { FOURTHDROW } from "../../data/fourthrow"
import Card from "./CardComponent"

const FourthRow = () => {
  const { mode } = useContext(ModeContext)
  return (
    <Fragment>
      {FOURTHDROW.map(item =>
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
      {FOURTHDROW.map(item =>
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
      {FOURTHDROW.map(item =>
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
      {FOURTHDROW.map(item =>
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
      {FOURTHDROW.map(item =>
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
      {FOURTHDROW.map(item =>
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

export default FourthRow
