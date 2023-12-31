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
      <div className="flex flex-row justify-evenly gap-10 mt-10 m-48 origin-top overflow-visible pb-4 backdrop-blur will-change-auto [--rtl-reverse:1] [transform:rotateX(7deg)rotateZ(-7deg)skewY(4deg)scale(1)] rtl:[--rtl-reverse:-1] rtl:[transform:rotateX(7deg)rotateZ(7deg)skewY(-4deg)scale(1)] max-[1279px]:![transform:translate3d(0,0,0)] xl:-end-20 xl:-me-10 xl:h-[32rem] xl:w-[50rem] xl:rounded-e-none xl:pe-4 xl:shadow-[-0.05rem_0.1rem_0rem_#00000014] xl:backdrop-blur-0">
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
