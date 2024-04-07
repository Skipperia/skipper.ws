import React from "react";
import '../styles/pagecontent.css';
import { title } from "process";

interface CoolPageTitleProps {
    title: string
}

const CoolPageTitle = (props: CoolPageTitleProps) => {
    return (
        <div id="page-title-wrapper">
            <div className="CoolPageTitle">
                {props.title}
            </div>
        </div>
    )
}

export default CoolPageTitle;