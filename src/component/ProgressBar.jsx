import React, { useEffect, useState } from "react";

export default function ProgressBar({ value = 0 }) {

    const[percent, setPercent] = useState(value);
    
    useEffect(() => {
        if(percent < 100)
        {
            setTimeout(() => setPercent(newval => newval + 1), 200);
        }
    },[percent]);

    return(
        <>
        <div className="progressbar">
            <div className="progressbarfill" 
                    style={{ width: `${percent}%` }}>
               { percent } %
            </div>
            <br />
            {percent < 100 ? 'Loading...' : 'Completed!'}

        </div>
        </>
    );
}