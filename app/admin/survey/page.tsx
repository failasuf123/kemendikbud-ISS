"use client"
import { useState } from "react"
import Image from "next/image"
import logo from "../../../public/img/iss_logo.png"
import dashboardIcon from "../../../public/img/dashboard_icon.png"

export default function DashboardSurvey() {
    const [data, setData] = useState(1)
  return (
    <div className="w-screen h-screen bg-blue-50">

    <div
        className="
            bg-blue-500 px-10 py-4 flex justify-between">
            {/* Navbar Admin */}
            <Image
                src={logo}
                height={40}
                alt="logo"
            />

            <div className="flex">
                <div className="flex gap-4">
                    <Image 
                        src={dashboardIcon}
                        width={24}
                        height={24}
                        alt = "icon_dashboard"
                    />
                    <p className="text-lg text-white">
                        Dashboard
                        </p>
                </div>
                <div className="flex gap-4">
                    <Image 
                        src={dashboardIcon}
                        width={24}
                        height={24}
                        alt = "icon_dashboard"
                    />
                    <p className="text-lg text-white">
                        Survey
                    </p>
                </div>
            </div>
        </div>

        <div className="px-60 py-10">
            <div className="flex w-full justify-between">
                <p className="text-2xl">Surveys</p>
                <div>Create New Survey</div>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-10">
                {/* List Of Survey */}
                {data == null ? <p>Saat ini tidak ada survey yang tersedia</p>:
                    <div className="bg-white w-auto p-5 rounded-lg border">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl">2025</p>
                            <p>Published</p>
                        </div>
                        <div className="mt-4 grid grid-cols-2">
                            <div>
                                <p>Start Date</p>
                                <p>1 Januari 2024</p>
                            </div>
                            <div>
                                <p>End Date</p>
                                <p>1 Januari 2024</p>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    </div>
  )
}
