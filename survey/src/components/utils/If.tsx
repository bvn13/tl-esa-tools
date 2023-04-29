import * as React from "react";

interface MyProps {
    condition: boolean,
    children: any
}

const If = (props: MyProps) => {
    return (
            <div>
                {props.condition === true ? props.children: (<></>)}
            </div>
    )
}

export default If;