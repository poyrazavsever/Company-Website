import React, {useState} from 'react'

// Flowbite
import { Sidebar } from 'flowbite-react'

// Icon
import { HiOutlineHome, HiOutlineInformationCircle, HiOutlineMoon, HiOutlineSun } from "react-icons/hi"
import { MdOutlineWorkOutline, MdOutlineArticle, MdLogin, MdLanguage } from "react-icons/md"
import { FiGitlab } from "react-icons/fi"
import { RiContactsLine } from "react-icons/ri"
import { VscColorMode } from "react-icons/vsc"
import {Turkey, Germany, USA} from "../Icons"

// React Router Dom

import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const SidebarMenu = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="w-fit">

      <button className={classNames({
        "absolute top-10 right-10 transition-all !z-50" : true,
        "flex flex-col justify-center items-center gap-1" : !open,
      })}
       onClick={() => open === true ? setOpen(false) : setOpen(true)}>
        <div className={classNames({
          "w-7 h-[2px] bg-black rounded transition-all" : true,
          "hidden" : open
        })}></div>
        <div className={classNames({
          "w-7 h-[2px] bg-black rounded transition-all" : true,
          "rotate-45" : open
        })}></div>
        <div className={classNames({
          "w-7 h-[2px] bg-black rounded transition-all" : true,
          "-rotate-45" : open
        })}></div>
      </button>

      <div className={classNames({
        "transition-all border-r border-b shadow-xl h-screen fixed bg-white" : true,
        "-translate-x-full" : !open,
        "translate-x-0" : open
      })}>
        <Sidebar aria-label="Sidebar with content separator example">

          <Sidebar.Items>

            <Sidebar.ItemGroup>

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

              <NavLink to="/repos">
                <Sidebar.Item
                  icon={FiGitlab}
                >
                  Repos
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

            <Sidebar.ItemGroup>

              <NavLink to="/login">
                <Sidebar.Item
                  icon={MdLogin}
                >
                  Login
                </Sidebar.Item>
              </NavLink>

              <Sidebar.Collapse
                icon={MdLanguage}
                label="Change Language"
              >
                <Sidebar.Item
                  icon={Turkey}>
                  Turkish
                </Sidebar.Item>
                <Sidebar.Item
                  icon={USA}>
                  Engilish
                </Sidebar.Item>
                <Sidebar.Item
                  icon={Germany}>
                  German
                </Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse
                icon={VscColorMode}
                label="Color Mode"
              >
                <Sidebar.Item
                  icon={HiOutlineMoon}>
                  Dark
                </Sidebar.Item>
                <Sidebar.Item
                  icon={HiOutlineSun}>
                  Light
                </Sidebar.Item>
              </Sidebar.Collapse>

            </Sidebar.ItemGroup>

          </Sidebar.Items>

        </Sidebar>
      </div>

    </div>
  )
}

export default SidebarMenu