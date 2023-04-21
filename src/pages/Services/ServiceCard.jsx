import classNames from 'classnames'
import React from 'react'

import { BsCheckAll } from "react-icons/bs"

function ServiceCard({ planName, price, contents, sugges }) {
  return (
    <div>

      <div className={classNames({
        "w-72 sm:w-80 p-4 border rounded-lg shadow-lg" : true,
        "bg-zinc-800 border-gray-600 shadow-2xl shadow-zinc-700" : sugges,
        "bg-white border-gray-200 sm:p-8 dark:clbg-gray-800 dark:border-gray-700 desktop:mt-6" : !sugges,
        
      })}>

        <h5 className={classNames({
          "mb-4 text-base sm:text-md md:text-lg font-medium " : true,
          "text-zinc-100" : sugges,
          "text-gray-500 dark:text-gray-400" : !sugges, 
        })}>{planName}</h5>

        <div className={classNames({
          "flex items-baseline " : true,
          "text-zinc-50" : sugges,
          "text-gray-900 dark:text-white" : !sugges
        })
        }>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold">₺</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">{price}</span>
        </div>

        <ul className="space-y-5 my-7">

          {contents.map((content, index) => (
            <li className="flex items-center space-x-3" key={index}>
              <BsCheckAll className={classNames({
                "text-xs sm:text-sm md:text-md" : true,
                "text-green-500" : content.visibility && !sugges,
                "text-green-400" : content.visibility && sugges,
                "text-zinc-500" : !content.visibility && !sugges,
                "text-zinc-300" : !content.visibility && sugges
              })}/>
              <span className={classNames({
                "text-xs sm:text-sm md:text-base font-normal leading-tight" : true,
                "text-zinc-50" : sugges,
                "text-gray-500 dark:text-gray-400" : !sugges,
                "line-through" : !content.visibility
              })}>{content.title}</span>
            </li>
          ))}

        </ul>

        <button type="button" className={classNames({
          "font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition-all duration-200 focus:ring-4 focus:outline-none" : true,
          "text-gray-800 bg-zinc-200 hover:bg-zinc-400 focus:ring-zinc-300" : sugges,
          "text-white bg-zinc-600 hover:bg-zinc-800 focus:ring-zinc-200" : !sugges,
        })}>Choose plan</button>

      </div>


    </div>
  )
}

export default ServiceCard