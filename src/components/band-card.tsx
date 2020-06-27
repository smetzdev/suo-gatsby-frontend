import React from "react"
import BandImageDummy from "@dummyImages/band-image-dummy.jpg"
import { Icon } from "@elements"

const BandCard = () => {
  return (
    <article className="relative max-w-sm inline-block rounded-md overflow-hidden">
      <img src={BandImageDummy} alt="The Band Bandtitle" />
      <div className="bg-gray-800 p-5 text-lg">
        <h3 className="text-3xl text-primary-400 leading-none mb-2">
          Metallica
        </h3>
        <p>
          <Icon
            name="genre"
            className="h-4 w-auto inline-block mr-2 text-gray-600"
          />
          Death Metal
        </p>
        <p>
          <Icon
            name="clock"
            className="h-4 w-auto inline-block mr-2 text-gray-600"
          />
          19:39 Uhr – 19:45 Uhr // <span className="">MainStage</span>
        </p>
        <hr className="mt-6 mb-4 border-gray-600" />
        <ul className="flex space-x-3 items-center text-gray-300">
          <li>
            <a href="https://google.com">
              <Icon
                className="h-6 w-auto"
                name="instagram"
                title="Metallica auf Instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://google.com">
              <Icon
                className="h-6 w-auto"
                name="youtube"
                title="Metallica auf YouTube"
              />
            </a>
          </li>
          <li>
            <a href="https://google.com">
              <Icon
                className="h-6 w-auto"
                name="globe"
                title="Website von Metallica"
              />
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default BandCard
