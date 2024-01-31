import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div>
                    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-medium tracking-wide text-white">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-white">Fashion</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-white">Mental Health</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-white">Contact</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</Link>
                                </li>

                                <li>
                                <Link to="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Footer;