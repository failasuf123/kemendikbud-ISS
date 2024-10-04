import Image from "next/image";
import logo from "../../public/img/iss_logo.png"
import dashboardIcon from "../../public/img/dashboard_icon.png"

export default function HomeAdmin() {
  return (
    <div className="h-screen w-screen bg-blue-50">
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
        <div className="px-80 py-10">
            <p className="text-xl font-bold">Active Survey Statistics</p>
            <div className="flex gap-4 mt-5">
                <div className="p-4 border rounded-md bg-white	">
                    <p className="text-lg">Student Participant</p>
                    <p className="text-xl font-bold">100.000</p>
                </div>
                <div className="p-4 border rounded-md bg-white	">
                    <p className="text-lg">University Converage</p>
                    <p className="text-xl font-bold">50%</p>
                </div>
                <div className="p-4 border rounded-md bg-white	">
                    <p className="text-lg">Student Coverage</p>
                    <p className="text-xl font-bold">1%</p>
                </div>
            </div>
        </div>

        <div>
            <p>Survey Performances</p>
            {/* Show Graph data statistic */}
        </div>
    </div>
  )
}