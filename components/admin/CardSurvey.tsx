import React from 'react'
interface Survey {
    id: number;
    name: string;
    startDate : string;
    endDate: string;
    isPublished : boolean;
}

export default function CardSurvey(data: Survey) {
  
    return (
    <div>
        {/* HeadName */}
        <div>
            <p>{data.name}</p>
            {data.isPublished? <p>PUBLISHED</p> : <></>}
        </div>
        <div>
            <div>
                <p>Start Date</p>
                <p>{data.startDate}</p>
            </div>
            <div>
                <p>End Date Date</p>
                <p>{data.endDate}</p>
            </div>
        </div>
    </div>
  )
}
