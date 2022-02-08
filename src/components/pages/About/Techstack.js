import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJsBadge,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiJava,
    DiGit,
} from "react-icons/di";
import { SiHandlebarsdotjs } from "react-icons/si";

function Techstack() {
    return (
        <div className='row' style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className="col tech-icons">
                <div className='card'>
                    <CgCPlusPlus />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <DiJsBadge />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <DiNodejs />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <DiReact />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <DiMongodb />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <DiJava />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <DiGit />
                </div>
            </div>
            <div className="col tech-icons">
                <div className='card'>
                    <SiHandlebarsdotjs />
                </div>
            </div>
        </div>
    );
}

export default Techstack;