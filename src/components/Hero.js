import React from "react"
import Image from "./Image"

export default ({ audience }) => {
  let filename
  if (audience === "residents") {
    filename = "residents.jpg"
  } else if (audience === "business") {
    filename = "business.jpg"
  } else if (audience === "council-and-mayor") {
    filename = "council-and-mayor.jpg"
  }
  return <Image filename={filename} />
}
