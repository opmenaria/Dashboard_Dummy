import React, { useState } from 'react';
import { Menu, Button, Avatar, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import srp from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav style={{ zIndex: 100 }} className="bg-blue-100 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex-shrink-0">
                            <Link to="/" className="hover:text-gray-400">
                                <Image preview={false} style={{ maxWidth: 200 }}
                                    className="rounded-lg border border-gray-500 shadow-lg"
                                    height={40}
                                    width={'auto'} src={srp} />
                            </Link>
                        </div>
                        <Link to="/" className="hover:text-gray-400">Dashboard</Link>
                        <Link to="/add" className="hover:text-gray-400">Add User</Link>
                        <Link to="/courses" className="text-gray-400">Courses</Link>
                        <Link to="/instructors" className="text-gray-400">Instructors</Link>
                        <Link to="/placements" className="text-gray-400">Placements</Link>
                        <Link to="/faq" className="text-gray-400">FAQ</Link>
                        <Link to="/contact" className="text-gray-400">Contact Us</Link>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Avatar />
                        <div>
                            <p className="mb-1 font-bold text-sm ">Ralands R</p>
                            <p className="mb-1 text-xs">Student</p>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Button icon={<MenuOutlined />} onClick={toggleMenu} />
                    </div>

                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Menu theme="dark" mode="vertical" className="bg-gray-700 text-white">
                        <Menu.Item key="1">
                            <Link to="/" onClick={toggleMenu}>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/add" onClick={toggleMenu}>Add User</Link>
                        </Menu.Item>
                        <Menu.Item disabled key="1">
                            <Link to="/courses" onClick={toggleMenu}>Courses</Link>
                        </Menu.Item>
                        <Menu.Item disabled key="2">
                            <Link to="/instructors" onClick={toggleMenu}>Instructors</Link>
                        </Menu.Item>
                        <Menu.Item disabled key="3">
                            <Link to="/placements" onClick={toggleMenu}>Placements</Link>
                        </Menu.Item>
                        <Menu.Item disabled key="4">
                            <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
                        </Menu.Item>
                        <Menu.Item disabled key="5">
                            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
