import React from 'react'

function Profile() {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="img/logo.png" className="h-8" alt="ISS Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Indonesia Student Survey</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/profil-lembaga" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
                            </li>
                            <li>
                                <a href="/faq" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Kebijakan Privasi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bg-gray-100">
                <div className="bg-gray-100 container mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Indonesian Student Survey
                    </h1>
                </div>
            </div>
            <div className="min-h-screen bg-gray-50 py-12 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Right column */}
                        <div className="flex justify-center">
                            <img
                                src="img/logo.png"
                                className="object-scale-down"
                            />
                        </div>
                        {/* Left column */}
                        <div className="text-juustify mb-8">
                            <p className="text-gray-600 mt-4">
                                The Indonesia Student Survey (ISS) is your chance to look back on your higher education experience and speak out on everything from the teaching on your course, access to resources and equipment, and even about the student voice.
                            </p>
                            <p className="text-gray-600 mt-4">
                                Your views can make a difference. With your feedback, your university or college could make changes to improve their courses for future students.
                            </p>
                            <p className="text-gray-600 mt-4">
                                And because ISS is a Indonesia-wide, official survey, anyone thinking about applying to university can see what students like you thought about your course via a platform called Discover Uni - so they can make better decisions about where to study.
                            </p>
                            <p className="text-gray-600 mt-4">
                                Remember, the ISS is anonymised, your university or college won't see your responses so you can give your open, honest feedback.
                            </p>
                            <p className="text-gray-600 mt-4">
                                We want your views. It's your ISS.
                            </p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-6">
                                The Survey Is Now Closed
                            </button>
                            <p className="text-gray-500 mt-4">Open from 8 January to 30 April 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
