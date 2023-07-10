import React from "react"; 

const Footer: React.FC<{}> = () => {
    const date = new Date()

    return(
        <div className="shadow-md bg-white">
        <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 py-8">
            <div>
                Copyright {date.getFullYear()} Ralph Nazombe. All Rights Reserved
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer