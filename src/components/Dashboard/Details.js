import { Avatar, Card, Col, Image, Row } from 'antd'
import React from 'react'
import detail from '../../assets/detail.png'
import { GiBlackBook, GiEvilBook } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import { LiaAwardSolid } from 'react-icons/lia'
function Details() {
    const dataTab = [
        { title: "Lorem ipsum dolor  consectetur adipisicing elit.", icon: <GiBlackBook size={30} />, },
        { title: "Lorem consectetur adipisicing elit.", icon: <FiUsers size={30} />, },
        { title: "Lorem ipsum dolor sit amet consectetur a elit.", icon: <GiEvilBook size={30} />, },
        { title: "Lorem ipsum dolor sit amet  elit.", icon: <LiaAwardSolid size={30} />, }
    ]
    const style = { background: 'white', padding: '8px', marginBottom: '1.5em', borderRadius: '.5rem' };

    return (
        <div className=' w-full bg-gray-200 items-center p-4 flex justify-around'>
            <Card className=' max-w-5xl'>
                <h5 className=' text-md text-red-500'> What's New</h5>
                <Row gutter={{ sm: 16, lg: 32 }}>
                    <Col className="gutter-row" lg={14} md={12} sm={12} xs={24}>
                        <h5 className=' text-2xl'> Master the skills to drive your career.</h5>
                        <h5 className=' text-sm text-gray-500'>Edlkw Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque, quas non. Aut, sit ipsum! Quibusdam assumenda, architecto magni qui explicabo dolorem alias id odit doloremque harum corporis voluptates placeat dolores!                        </h5>
                        <Row gutter={{ sm: 16, lg: 32 }}>
                            {dataTab.map(el => {
                                return (
                                    <Col className="gutter-row " lg={12} md={12} sm={24} xs={24}>
                                        <div className=' shadow-lg gap-4 mb-0 items-center' style={{ ...style, display: 'flex' }}>
                                            <Avatar size={50} style={{ color: `#9d9dfd`, background: 'white' }} icon={el.icon} />
                                            <p style={{ fontSize: '.9em', fontWeight: 600, width: 160 }}>{el.title}</p>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                    <Col className="gutter-row flex justify-center " lg={10} md={12} sm={12} xs={24}>
                        <Image preview={false} style={{ borderRadius: 10, overflow: 'hidden', maxHeight: 400 }} src={detail} height={"auto"} width={'auto'} />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Details