import React from 'react'
import { Col, Image, Row } from 'antd'
import { LiaPhoneVolumeSolid } from 'react-icons/lia'
import srp from '../../assets/surps.png'
import { IoMailUnread } from 'react-icons/io5'
import { FaBattleNet } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
function Footer() {


    return (
        <div className=' w-full items-center p-4 flex justify-around'>
            <Row gutter={{ sm: 16, lg: 32 }} className=' max-w-5xl'>
                <Col className="gutter-row p-4" lg={6} md={8} sm={12} xs={24}>
                    <Image preview={false} style={{ maxWidth: 200 }}
                        height={140}
                        width={'auto'} src={srp} />
                    <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo reprehenderit veritatis officiis tempora incidunt iure quod velit vel!</p>
                </Col>
                <Col className="gutter-row p-4 " lg={6} md={8} sm={12} xs={24}>
                    <h2 className=' text-lg text-purple-900 font-bold'>Quick Links</h2>
                    <p>consectetur icing elit</p>
                    <p>Dehenderit veriis officiis</p>
                    <p>Kincidunt iure </p>
                    <p>Liure quod velit</p>
                    <p>Sit amet consectetur</p>
                </Col>
                <Col className="gutter-row p-4 " lg={6} md={8} sm={12} xs={24}>
                    <h2 className=' text-lg text-purple-900 font-bold'>For Students</h2>
                    <p>Liure quod velit</p>
                    <p>consectetur icing elit</p>
                    <p>Dehenderit veriis officiis</p>
                    <p>Sit amet consectetur</p>
                    <p>Kincidunt iure </p>
                </Col>
                <Col className="gutter-row p-4 space-y-3" lg={6} md={8} sm={12} xs={24}>
                    <h2 className=' text-lg text-purple-900 font-bold'>Contact Us</h2>
                    <p className=' flex items-center gap-2'><ImLocation2 color='purple' size={30} />421-425 S.M. Lodha Complex, Udaipur-313001 (Raj.)</p>
                    <p className=' flex items-center gap-2'><FaBattleNet color='orange' size={20} />https://surpass.academy/</p>
                    <a href='learn@surpass.co.in' target='blank' className=' flex items-center gap-2'><IoMailUnread color='orange' size={20} />learn@surpass.co.in</a>
                    <p className=' flex items-center gap-2'><LiaPhoneVolumeSolid color='orange' size={20} />+91-9636043246  +91-9636212273</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer