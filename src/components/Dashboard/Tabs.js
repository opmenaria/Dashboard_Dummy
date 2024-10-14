import React from 'react'
import { Avatar, Col, Row } from 'antd'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

function Tabs({ dataTab }) {
    const style = { background: 'white', padding: '8px', marginBottom: '1.5em', borderRadius: '.5rem' };

    return (
        <div className=' w-full bg-gray-200 items-center p-4 flex justify-around'>
            <Row gutter={{ sm: 16, lg: 32 }}>
                {dataTab.map(el => {
                    return (
                        <Col className="gutter-row " lg={6} md={12} sm={12} xs={24}>
                            <div className=' hover:shadow-lg hover:shadow-gray-500/50 gap-6 cursor-pointer mb-0 items-center' style={{ ...style, display: 'flex' }}>
                                <Avatar size={80} style={{ color: `${el.col}`, background: `${el.fil}`, padding: 20 }} icon={el.icon} />
                                <div className='w-1/2 flex flex-col justify-center items-center'>
                                    <p style={{ fontSize: '1.4em', fontWeight: 600, width: 120 }}>{el.title}</p>
                                    <p style={{ fontSize: 20 }}><MdOutlineArrowRightAlt /></p>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Tabs