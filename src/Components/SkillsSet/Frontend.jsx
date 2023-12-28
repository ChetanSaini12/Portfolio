import React from 'react'

function Frontend() {
  return (
    <div className="skillsbox">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">chetan://frontend.skills</div>
          </div>
          <div className="flex justify-center px-4 py-4 bg-base-200">
            <div className="flex flex-row gap-16">

              <div className="flex flex-col gap-3">

                <div>
                  <div>HTML</div>
                  <progress
                    className="progress progress-accent w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div>CSS</div>
                  <progress
                    className="progress progress-secondary w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div>Tailwind</div>
                  <progress
                    className="progress progress-success w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div>Typescript</div>
                  <progress
                    className="progress w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

              </div>


              <div className="flex flex-col gap-3">

                <div>
                  <div>Javascript</div>
                  <progress
                    className="progress progress-primary w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div>React</div>
                  <progress
                    className="progress progress-warning w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div>Next</div>
                  <progress
                    className="progress progress-error w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div>Figma</div>
                  <progress
                    className="progress progress-info w-40"
                    value="70"
                    max="100"
                  ></progress>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Frontend
