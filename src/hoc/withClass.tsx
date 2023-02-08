import React from "react";

const withClass = (Component: any, className: any) => {
return (props: any) => {
return (
    <div className={className}>
        <Component {...props} />
    </div>
)
}
}

export default withClass