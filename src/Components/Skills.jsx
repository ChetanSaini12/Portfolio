import React from "react";
import Frontend from "./SkillsSet/Frontend";
import Backend from "./SkillsSet/Backend";
import Database from "./SkillsSet/Database";
import CSFundamentals from "./SkillsSet/CSFundamentals";
import DSA from "./SkillsSet/DSA";
import Otherskills from "./SkillsSet/Otherskills";

function Skills() {
  return (
    <div className="skills">
      <div className="flex justify-center miv-h-screen text-6xl">Skills</div>
      <div className="flex flex-row justify-evenly mt-10">

        <div className="flex flex-col gap-16">
          <DSA/>
          <Frontend />
          <Database />
        </div>

        <div className="flex flex-col gap-16 mt-36">
          <CSFundamentals />
          <Backend />
          <Otherskills/>
        </div>

      </div>
    </div>
  );
}

export default Skills;
