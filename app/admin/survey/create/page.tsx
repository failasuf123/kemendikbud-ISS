import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../../public/img/iss_logo.png"
import dashboardIcon from "../../../../public/img/dashboard_icon.png"


export default function CreateSurvey() {
  return (
    <div className="h-screen w-screen">
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
        <div className="py-10 px-60 bg-blue-50 h-full">
            <p className="text-2xl font-bold">Create Survey</p>
            <form action="">
                <div>
                    <p className="">Display Name</p>
                    <input
                        className="bg-white rounded p-2"
                        type="text"
                        id="name"
                        required
                    />
                    {/* INPUT HERE */}
                </div>
                <div>
                    <p>Schedule Survey</p>
                    <div className="grid grid-cols-2">
                        <div>
                            <p>Start Date</p>
                            <input
                            type="date"
                            id="dateInput"
                            />
                        </div>
                        <div>
                            <p>end Date</p>
                            <input
                            type="date"
                            id="dateInput"
                            />
                        </div>
                    </div>
                    {/* Input Here */}
                </div>
                <div>
                    <p>Description</p>
                    <input
                        className="bg-white rounded p-2"
                        type="text"
                        id="name"
                        required
                    />
                    {/* Description Here */}
                </div>
                {/* Button here */}
                <Button
                    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  opacity-50 cursor-not-allowed}`}>
                    Create
                </Button>
            </form>
        </div>
    </div>
  )
}
