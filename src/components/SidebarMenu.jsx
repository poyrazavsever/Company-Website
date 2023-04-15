import React, { useState } from 'react'

// Flowbite
import { Sidebar } from 'flowbite-react'

// Icon
import { HiOutlineHome, HiOutlineInformationCircle, HiOutlineMoon } from "react-icons/hi"
import { MdOutlineWorkOutline, MdOutlineArticle } from "react-icons/md"
import { RiContactsLine } from "react-icons/ri"
import { VscColorMode } from "react-icons/vsc"
import { AiOutlineInstagram, AiOutlineGithub, } from "react-icons/ai"

// React Router Dom

import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const SidebarMenu = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="w-fit">


      <div className='flex items-center justify-center gap-8 fixed top-9 right-24'>

        <button className='flex items-center justify-center gap-2 text-xl text-zinc-700'>
          <VscColorMode />
        </button>

        <button className='flex items-center justify-center gap-2 text-xl text-zinc-700'>
          <HiOutlineMoon />
        </button>

      </div>



      <button className={classNames({
        "fixed top-10 right-10 transition-all !z-50": true,
        "flex flex-col justify-center items-center gap-1": !open,
      })}
        onClick={() => open === true ? setOpen(false) : setOpen(true)}>
        <div className={classNames({
          "w-7 h-[2px] bg-black rounded transition-all": true,
          "hidden": open
        })}></div>
        <div className={classNames({
          "w-7 h-[2px] bg-black rounded transition-all": true,
          "rotate-45": open
        })}></div>
        <div className={classNames({
          "w-7 h-[2px] bg-black rounded transition-all": true,
          "-rotate-45": open
        })}></div>
      </button>

      <div className={classNames({
        "transition-all border-r border-b shadow-xl h-screen fixed bg-white": true,
        "-translate-x-full": !open,
        "translate-x-0": open
      })}>

        <Sidebar aria-label="Sidebar with content separator example">

          <Sidebar.Items>

            <Sidebar.ItemGroup className='relative top-6'>

              <NavLink to="/">
                <Sidebar.Item
                  icon={HiOutlineHome}
                >
                  Home

                </Sidebar.Item>
              </NavLink>

              <NavLink to="/about">
                <Sidebar.Item
                  href="#"
                  icon={HiOutlineInformationCircle}
                >
                  About
                </Sidebar.Item>
              </NavLink>

              <NavLink to="/portfolio">
                <Sidebar.Item
                  icon={MdOutlineWorkOutline}
                >
                  Portfolio
                </Sidebar.Item>
              </NavLink>

              <NavLink to="/portfolio">
                <Sidebar.Item
                  icon={AiOutlineGithub}
                >
                  Github
                </Sidebar.Item>
              </NavLink>

              <NavLink to="/portfolio">
                <Sidebar.Item
                  icon={AiOutlineInstagram}
                >
                  Instagram
                </Sidebar.Item>
              </NavLink>

              <NavLink to="/blog">
                <Sidebar.Item
                  icon={MdOutlineArticle}
                  label="Soon"
                >
                  Blog
                </Sidebar.Item>
              </NavLink>

              <NavLink to="/contact">
                <Sidebar.Item
                  icon={RiContactsLine}
                >
                  Contact
                </Sidebar.Item>
              </NavLink>

            </Sidebar.ItemGroup>

          </Sidebar.Items>

        </Sidebar>

      </div>

    </div>
  )
}

export default SidebarMenu