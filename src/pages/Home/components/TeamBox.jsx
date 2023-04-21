import React from 'react'

function TeamBox({photo, name, job}) {
    return (
        <div className="lg:w-96 w-80">
            <img src={photo} className="h-72 w-full object-cover object-center rounded-t-md" alt="woman in black dress" />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
                <p className="text-base font-medium leading-6 text-gray-600">{name}</p>
                <p className="text-base leading-6 mt-2 text-gray-800">{job}</p>
            </div>
        </div>
    )
}

export default TeamBox