import { PiNutBold } from "react-icons/pi";
import '../styles/Sider.css'
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { TbCube } from "react-icons/tb";
import { TbUserSquareRounded } from "react-icons/tb";
import { TbDevicesDollar } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import React, { useState } from 'react';
// import { MailOutlined } from '@ant-design/icons';
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";


const SiderComp = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['']);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }
  const children = [
    {
      key: '1',
      icon: <PiNutBold />,
      label: 'Route-1',
      type: 'group',
    },
    {
      key: '2',
      icon: <PiNutBold />,
      label: 'Route-2',
      type: 'group',
    },
  ]

  const items = [
    getItem('Dashboard', '1', <div style={{ border: '2px solid gray', height: '20px', borderRadius: '6px', padding: '1.6px' }}><TbCube size={13} /></div>, children),
    getItem('Master', '2', <TbUserSquareRounded size={20} />, children),
    getItem('Student', '3', <TbDevicesDollar size={20} />, children),
    getItem('Course', '4', <LuBadgePercent size={20} />, children),
    getItem('Videos', '5', <MdOutlineLiveHelp size={20} />, children),
    getItem('Manage Course', '6', <MdOutlineLiveHelp size={20} />, children),
    getItem('Live Chat', '7', <MdOutlineLiveHelp size={20} />, children),
    getItem('Activities', '8', <MdOutlineLiveHelp size={20} />, children),
  ];
  //  <Link to="/" className="hover:text-gray-400">Dashboard</Link>
  //  <Link to="/add" className="hover:text-gray-400">Add User</Link>
  //  <Link to="/courses" className="text-gray-400">Courses</Link>
  //  <Link to="/instructors" className="text-gray-400">Instructors</Link>
  //  <Link to="/placements" className="text-gray-400">Placements</Link>
  //  <Link to="/faq" className="text-gray-400">FAQ</Link>
  //  <Link to="/contact" className="text-gray-400">Contact Us</Link>
  const items2 = [
    {
      key: '1',
      label: (
        <a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href="/">
          1st item
        </a>
      ),
    },

    {
      key: '2',
      label: (
        <a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href="/">
          2nd item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" href="/">
          3rd item
        </a>
      ),
    },
  ]
  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          return func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <div style={{ minWidth: '20rem', maxWidth: '20rem', height: '100vh' }} className='md:flex hidden fixed top-16 overflow-hidden flex-col justify-between  align-middle text-slate-50 bg-indigo-950 w-3/12 side px-4 py-6'>
      <div >
        <div className=' flex'>
          <PiNutBold size={20} style={{ margin: '5px' }} color='white' /><p>DashBoard</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['231']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256, background: 'rgb(30 27 75 )', marginTop: '15px' }}
          items={items}
        />
      </div >
      <div className="flex justify-between" style={{ width: '100%', marginBottom: "3rem", background: "#ffffff17", padding: '.5em', borderRadius: '.5em' }}>
        <Dropdown
          menu={{ items: items2, style: { background: 'rgb(23 23 23 / 65%)', fill: 'white', marginBottom: '.5rem' } }} trigger={['hover']}>
          <Link to={'/'} onClick={(e) => e.preventDefault()}>
            <Space >
              <Avatar icon={<PiUserCircleDuotone size={40} color="cyan" />} />
              <div>
                <h3 style={{ width: '12rem' }}>User</h3>
                <h5 style={{ fontSize: '.8em', color: 'gray' }}>Project Manager</h5>
              </div>
              <FaChevronDown width={20} size={20} />
            </Space>
          </Link>
        </Dropdown>
      </div>
    </div>

  )
}
export default SiderComp