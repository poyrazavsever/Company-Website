import React from 'react'
import TeamBox from './components/TeamBox'

function Team() {

    const contents = [
        {photo: "https://www.cumhuriyet.com.tr/Archive//2021/10/23/233832858-1-2.jpeg", name: "Lorem, ipsum.", job : "Designer"},
        {photo: "https://www.cumhuriyet.com.tr/Archive//2021/10/23/233832858-1-2.jpeg", name: "Lorem, ipsum.", job : "Designer"},
        {photo: "https://www.cumhuriyet.com.tr/Archive//2021/10/23/233832858-1-2.jpeg", name: "Lorem, ipsum.", job : "Designer"},
        {photo: "https://www.cumhuriyet.com.tr/Archive//2021/10/23/233832858-1-2.jpeg", name: "Lorem, ipsum.", job : "Designer"},
    ]
    
    return (
        <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
            <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">Meet our team</h1>
            <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">

                {/* CO  */}

                <div className="lg:w-96 w-80">
                    <img src="https://www.cumhuriyet.com.tr/Archive//2021/10/23/233832858-1-2.jpeg" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                    <div className="bg-white shadow-md rounded-md py-4 text-center">
                        <p className="text-base font-medium leading-6 text-gray-600">Lorem, ipsum.</p>
                        <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
                    </div>
                </div>

                {/* About Part  */}

                <div className="bg-zinc-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
                    <h3 className="text-2xl font-semibold leading-6 text-center text-white">About Team</h3>
                    <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio iusto tenetur? Sapiente necessitatibus unde, esse consequatur quasi iure in tenetur vel quia similique odit ducimus totam reprehenderit, suscipit deserunt provident perferendis sint vero velit magnam ut beatae aut pariatur illo. Quo vitae expedita dignissimos est ut eos similique alias.</p>
                </div>

                {/* Team Member  */}

                {contents.map((content, index) => {
                    return(
                        <TeamBox photo={content.photo} name={content.name} job={content.job} key={index} />
                    )
                })}
    
            </div>
        </div>
    )
}

export default Team