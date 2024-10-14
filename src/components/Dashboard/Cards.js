import React from 'react'
import { Avatar, Card, Col, Image, Row } from 'antd'
import { MdMenuBook } from 'react-icons/md'

function Cards({ dataCard }) {
    return (
        <div className=' w-full bg-gray-200 p-4 flex justify-around'>
            <Row className='max-w-6xl' gutter={{ sm: 16, lg: 32 }}>
                {dataCard.map(el => {
                    return (
                        <Col className="gutter-row mb-4" lg={6} md={12} sm={12} xs={24}>
                            <Card className='p-5'
                                style={{ maxWidth: 300, margin: 'auto' }}
                                cover={
                                    <Image preview={false} style={{ borderRadius: 10, overflow: 'hidden' }} src={el?.img} height={150} width={'auto'} />
                                }
                            // extra={[]}
                            // tabBarExtraContent={[<IoSettingsOutline key="setting" />]}
                            >
                                <Card.Meta
                                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                    title={el?.title}
                                    description={el?.description}
                                />
                                <p className='pt-4 flex gap-4'><MdMenuBook size={20} color='red' />{el?.lessons}+ Lessons</p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
export default Cards
