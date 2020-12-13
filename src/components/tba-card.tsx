import React from "react"
import "twin.macro"

interface withContactHint {
  withContactHint?: boolean
}

const TBABand: React.FC<withContactHint> = ({ withContactHint }) => {
  return (
    <article tw="inline-block p-24 text-center border border-gray-700 border-dashed rounded-lg">
      {withContactHint ? (
        <>
          <p tw="mb-2 text-3xl text-gray-500">
            <span tw="font-display">Deine Band</span>?
          </p>
          <a tw="btn" href="mailto:vorstand@cwo-ev.de">
            Jetzt bewerben
          </a>
        </>
      ) : (
        <p tw="text-3xl text-gray-500 font-display">T.B.A.</p>
      )}
    </article>
  )
}

export default TBABand
