import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for dropdown

const Navigation = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="navbar bg-white shadow-lg p-8">
            <div className="navbar-start">
                <Link to="/" className="normal-case">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        className="h-12 w-auto"
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {/* Services Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown on hover
                        onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown when mouse leaves
                    >
                        <div className="flex items-center text-lg font-semibold hover:text-blue-500 cursor-pointer">
                            Services
                            {isDropdownOpen ? (
                                <FaChevronUp className="ml-1 text-sm" />
                            ) : (
                                <FaChevronDown className="ml-1 text-sm" />
                            )}
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-gray-200 transform transition-all duration-300 ease-in-out">
                                <li>
                                    <Link
                                        to="/office-cleaning"
                                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                    >
                                        <span className="mr-2">🏢</span>
                                        Office Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/daycare-schools"
                                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                    >
                                        <span className="mr-2">🏫</span>
                                        Daycare Centers and Schools
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/churches-community"
                                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                    >
                                        <span className="mr-2">⛪</span>
                                        Churches and Community Centers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/move-in-out"
                                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                    >
                                        <span className="mr-2">🚚</span>
                                        Move In/ Move Out Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/airbnb-rentals"
                                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                    >
                                        <span className="mr-2">🏠</span>
                                        Airbnb & Short Term Rentals
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Other Nav Links */}
                    <li>
                        <Link to="/getaquote" className="text-lg font-semibold hover:text-blue-500">
                            Get a Quote
                        </Link>
                    </li>
                    <li>
                        <Link to="/testimonials" className="text-lg font-semibold hover:text-blue-500">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className="text-lg font-semibold hover:text-blue-500">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="text-lg font-semibold hover:text-blue-500">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactus" className="text-lg font-semibold hover:text-blue-500">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;