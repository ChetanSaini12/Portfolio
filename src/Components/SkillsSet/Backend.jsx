import React from "react";

function Backend() {
  return (
    <div className="skillsbox">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">chetan://backend.skills</div>
        </div>
        <div className="flex justify-center px-4 py-4 bg-base-200">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-3">
              <div>
                <div>Node Js</div>
                <progress
                  className="progress progress-accent w-40"
                  value="70"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>Express Js</div>
                <progress
                  className="progress progress-secondary w-40"
                  value="70"
                  max="100"
                ></progress>
              </div>              

              <div>
                <div>GraphQL</div>
                <progress
                  className="progress w-40"
                  value="70"
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div>Web Socket</div>
                <progress
                  className="progress progress-primary w-40"
                  value="70"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>JWT</div>
                <progress
                  className="progress progress-warning w-40"
                  value="70"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>Next Auth</div>
                <progress
                  className="progress progress-success w-40"
                  value="70"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
