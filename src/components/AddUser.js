import { Card, Col, Input, Row, Table, Space, Tag, Avatar, Image, Popover, Dropdown, Button, Tooltip, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { TbCube, TbDevicesDollar, TbUserSquareRounded } from "react-icons/tb";
import { IoIosArrowRoundUp } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiFileList3Line } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuBadgePercent, LuMenuSquare } from "react-icons/lu";
import { MdDelete, MdOutlineLiveHelp, MdOutlineSettingsBackupRestore } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import RowForm from './RowForm';
import SiderComp from './Sider';
import '../styles/header.css'
import { BiEdit } from 'react-icons/bi';

const AddUser = () => {

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU'
  //   },
  // ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john.brown@example.com',
      mobile: '123-456-7890',
      roles: ['admin', 'developer'],
      username: 'john.brown.dev',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      mobile: '987-654-3210',
      roles: ['editor', 'designer'],
      username: 'jane.doe.design',
      status: 'Inactive',
    },
    {
      key: '3',
      name: 'Sam Smith',
      email: 'sam.smith@example.com',
      mobile: '456-789-1234',
      roles: ['manager', 'tester'],
      username: 'sam.smith.mgr',
      status: 'Active',
    },
  ];



  const style = { background: 'white', padding: '8px', marginBottom: '1.5em', borderRadius: '.5rem' };

  const columns = [
    {
      title: 'Sr. No.',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Roles',
      key: 'roles',
      dataIndex: 'roles',
      render: (_, { roles }) => {
        const clrs = ['pink', 'cyan', 'green', 'yellow', 'purple']
        return (
          <>
            {roles?.map((tag, ind) => {
              let color = clrs[ind]
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <BiEdit style={{ color: 'blue' }} disabled size={22} />
          <MdDelete style={{ color: 'red', cursor: 'pointer' }} onClick={(eve) => {
            setTablRow(row => row.filter(row => row.key !== record.key))
          }} size={22} />
        </Space>
      ),
    },
  ];


  const data2 = [
    { title: "Earning", icon: <GiTakeMyMoney size={70} />, earn: '$198K', rate: '37.8% This month', col: "red", fil: '#ffd5d5' },
    { title: "Orders", icon: <RiFileList3Line size={70} />, earn: '$198K', rate: '37.8% This month', col: "green", fil: '#cbffc7' },
    { title: "Balance", icon: <SlWallet size={70} />, earn: '$198K', rate: '37.8% This month', col: "blue", fil: '#d8d5ff' },
    { title: "Total Sales", icon: <HiOutlineBriefcase size={70} />, earn: '$198K', rate: '37.8% This month', col: "#ffbc00", fil: '#f4ffb4' },
  ]
  const [tablRow, setTablRow] = useState(data);
  const [srchTab, setTrchTab] = useState("")
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onChange = (ev) => {
    setTrchTab(ev.target.value)
  };
  useEffect(() => {
    setTablRow(srchTab.length < 1 ? data : data.filter((el, i) => {
      return el.name.toLowerCase().includes(srchTab.toLowerCase())
        || el.age.toString().includes(srchTab.toString())
        || el.age.toString().includes(srchTab.toString())
        || el.tags.toString().includes(srchTab.toString())
        || el.address.toLowerCase().includes(srchTab.toLowerCase())
    }))
  }, [srchTab])
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/" className='flex gap-2'>
          <div style={{ border: '2px solid gray', height: '20px', width: '20px', borderRadius: '6px', padding: '1.6px' }}><TbCube size={13} /></div> Product
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/" className='flex gap-2'>
          <TbUserSquareRounded size={20} />
          Customers
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/" className='flex gap-2'>
          <TbDevicesDollar size={20} />
          Income
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/" className='flex gap-2'>
          <LuBadgePercent size={20} />
          Promote
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/" className='flex gap-2'>
          <MdOutlineLiveHelp size={20} /> Help
        </a>
      ),
    },
  ];
  return (
    <div className="flex ">
      <SiderComp />

      <div className='userRt bg-zinc-200 w-screen h-screen  md:px-10 px-5 py-5' >
        <div className='flex justify-between align-middle pb-4 sticky top-6 z-10'>
          <div style={{ background: 'rgb(255 255 255 / 76%)' }} className=' w-full flex text-center items-center px-3 rounded-md border border-gray-300 justify-between'>
            <h3 className=' p-1 ' style={{ fontSize: '1.3rem' }}>Hello User 👋</h3>
            <div className=' flex gap-2 items-center'>
              <Input.Search className='md:flex hidden ' disabled value={srchTab} placeholder="Search here" allowClear onChange={onChange} style={{ width: 200 }} />
              <Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight" arrow>
                <LuMenuSquare
                  className='md:hidden flex cursor-pointer'
                  size={28}>Click me</LuMenuSquare>
              </Dropdown>
            </div>
          </div>
        </div>

        <Row className=' my-4' gutter={{ sm: 16, lg: 32 }}>
          {data2.map(el => {
            return (
              <Col className="gutter-row" lg={6} md={12} sm={12} xs={24}>
                <div className=' hover:shadow-lg hover:shadow-gray-500/50 cursor-pointer' style={{ ...style, height: '10rem', display: 'flex', }}>
                  <div className='w-1/2 h-full flex items-center '>
                    <Avatar size={100} style={{ color: `${el.col}`, background: `${el.fil}` }}
                      icon={el.icon}
                    />
                  </div>
                  <div className='w-1/2 h-full flex flex-col justify-center'>
                    <p style={{ fontSize: '1em' }}>{el.title}</p>
                    <p style={{ fontSize: '1.4em', fontWeight: 600 }}>{el.earn}</p>
                    <p style={{ fontSize: '.8em', color: 'gray' }} className=' flex'><IoIosArrowRoundUp size={18} /> {el.rate}</p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>


        <Card title="Product Sell" style={{ overflow: "scroll" }}
          headStyle={{ background: '#010b70', color: 'white' }} extra={
            <div className=' items-center gap-3 md:flex hidden'>
              <Tooltip title="Revoke">
                <Button disabled={tablRow.length === data.length} type="primary">
                  <MdOutlineSettingsBackupRestore onClick={() => setTablRow(data)} className=' text-white text-2xl cursor-pointer' />
                </Button>
              </Tooltip>

              <Tooltip title="Add Row">
                <Button disabled={open} type="primary">
                  <FaPlus onClick={() => setOpen(true)} className=' text-white text-2xl cursor-pointer' />
                </Button>
              </Tooltip>
              <Modal
                open={open}
                destroyOnClose
                title="Title"
                onCancel={() => setOpen(false)}
                footer={null}
              >
                <RowForm setTablRow={setTablRow} tablRow={tablRow} setOpen={setOpen} />
              </Modal>

              <Input.Search value={srchTab} placeholder="Search here" allowClear onChange={onChange} style={{ width: 200 }} />
            </div>
          }>
          <Table
            style={{ minHeight: '40vh' }}
            pagination={false}
            columns={columns} dataSource={tablRow}
          />
        </Card>
      </div>
    </div>
  )
}
export default AddUser




//       <Row gutter={{ sm: 16, lg: 32 }}>
//         <Col className="gutter-row" lg={18} md={24} sm={24} xs={24}>
//           <div style={{ ...style, height: '20rem' }}>
//             <Image
//               width={"100%"}
//               height={300}
//               src={'https://wcs.smartdraw.com/chart/img/clustered-bar-chart.png?bn=15100111913'}
//             />
//           </div>
//         </Col>
//         <Col className="gutter-row " lg={6} md={12} sm={24} xs={24}>
//           <div style={{ ...style, height: '20rem' }}>
//             <Image
//               style={{ borderRadius: '1em' }}
//               width={"100%"}
//               height={300}
//               src={'https://media.istockphoto.com/id/471906116/vector/modern-vector-abstract-pie-chart-infographic.jpg?s=612x612&w=0&k=20&c=Q9zu-PJWzTpoSoNFWQ4GdDNd1lsJigGhv329lyMvZDI='}
//             /></div>
//         </Col>
//       </Row> 