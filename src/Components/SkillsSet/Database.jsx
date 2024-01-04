import React from "react";

function Database() {
  return (
    <div className="skillsbox">
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input">chetan://database.skills</div>
        </div>
        <div className="flex justify-center px-4 py-4 bg-base-200">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-3">
              <div>
                <div>MongoDB</div>
                <progress
                  className="progress progress-accent w-40"
                  value="90"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>MySQL</div>
                <progress
                  className="progress progress-secondary w-40"
                  value="80"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>Supabase</div>
                <progress
                  className="progress w-40"
                  value="50"
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div>SQLite</div>
                <progress
                  className="progress progress-primary w-40"
                  value="50"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>Redis</div>
                <progress
                  className="progress progress-warning w-40"
                  value="50"
                  max="100"
                ></progress>
              </div>

              <div>
                <div>PostgreSQL</div>
                <progress
                  className="progress progress-success w-40"
                  value="50"
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

export default Database;
