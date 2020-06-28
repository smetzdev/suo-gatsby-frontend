import React from "react"

interface withContactHint {
  withContactHint?: boolean
}

const TBABand: React.FC<withContactHint> = ({ withContactHint }) => {
  return (
    <article className="border border-gray-700 border-dashed inline-block p-24 rounded-lg text-center">
      {withContactHint ? (
        <>
          <p className="text-3xl text-gray-500 mb-2">
            <span className="font-display">Deine Band</span>?
          </p>
          <a className="btn" href="mailto:vorstand@cwo-ev.de">
            Jetzt bewerben
          </a>
        </>
      ) : (
        <p className="text-3xl text-gray-500 font-display">T.B.A.</p>
      )}
    </article>
  )
}

export default TBABand