import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

import './MenDetail.css'
import { BsFillStarFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import status from '../image/status.jpg'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/action'
import { useSelector } from 'react-redux'
import ViewProduct from '../Sliders/ViewProduct'
import menSize from '../image/men_size.png'
import womenSize from '../image/women_size.png'
import kidsSize from '../image/kids_size.png'
import unisexSize from '../image/unisex_size.png'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'


export default function MenDetail() {
    // const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [obj, setObj] = useState({})
    console.log(obj)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState("")
    const cartvalue = useSelector((store) => store.cart.cart.length)
    console.log({ "cartvalue": cartvalue })
    const [selectedValue, setSelectedValue] = React.useState("first");
    const handleChange = React.useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );

    //================================================================



    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://gray-dead-springbok.cyclic.app/products/${id}`)
            .then((res) => setObj(res.data[0]))
    }, [id])




    const user = JSON.parse(localStorage.getItem("user"))
    let token = user.token
    const addToCartFunc = () => {
        let cartPayload = {
            gender: obj.for_whome,
            category: obj.category,
            sub_category: obj.sub_category,
            color: obj.color,
            image: obj.image1,
            title: obj.title,
            price: obj.price,
            quntity: 1,
            brand: obj.brand,
            size: size
        }
        if (size == "") {
            alert('Please select size')
        } else {
            fetch(`https://gray-dead-springbok.cyclic.app/cart/add`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": localStorage.getItem('token')

                },
                body: JSON.stringify(cartPayload)
            })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }



    const checkAdminIsAuth = JSON.parse(localStorage.getItem("isAuthAdmin"))
    console.log(size)

    return (
        <div>
            <div className='men-detail-main-con'>
                <div className='men-detail-prod-box'>
                    <ViewProduct img1={obj && obj.image1} img2={obj && obj.image2} img3={obj && obj.image3} img4={obj && obj.image4} img5={obj && obj.image5} />
                </div>
                <div className='men-detail-second-child'>
                    <div className='men-detail-rating-div'>
                        <BsFillStarFill size='20px' />
                        <BsFillStarFill size='20px' />
                        <BsFillStarFill size='20px' />
                        <BsFillStarFill size='20px' />
                        <BsFillStarFill size='20px' />
                    </div>

                    <h1 className='men-detail-title'>{obj.title}</h1>
                    <p className='men-detail-price'>${obj.price}.00</p>
                    <div className='men-detail-info'>
                        Or 4 interest-free installments with <span>Klarna</span> or <span>afterpay</span><a href='' style={{ textDecoration: 'underline' }}>info</a>
                    </div>
                    <hr style={{ marginTop: '20px' }} />
                    <div className='men-detail-color'>
                        <div style={{ fontWeight: 'bold' }} >Color : {obj.color}</div>
                        <div id='men-color' style={{ backgroundColor: `${obj.color}` }}></div>
                    </div>
                    <div className='men-detail-size-div'>
                        <h1>Size</h1>
                        <Button onClick={onOpen}>Size Chart</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>SIZE CHART</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    {/* =========== */}
                                    <Tabs>
                                        <TabList>
                                            <Tab>MEN'S</Tab>
                                            <Tab>WOMEN'S</Tab>
                                            <Tab>KIDS'</Tab>
                                            <Tab>UNISEX</Tab>
                                        </TabList>

                                        <TabPanels>
                                            <TabPanel>
                                                <Heading size='md' marginBottom='10px'>MEN'S</Heading>
                                                <Text marginBottom='10px'>Tap on the image</Text>
                                                <a href={menSize} target="_blank">
                                                    <img src={menSize} alt="men size" />

                                                </a>
                                            </TabPanel>
                                            <TabPanel>
                                                <Heading size='md' marginBottom='10px'>WOMEN'S</Heading>
                                                <Text marginBottom='10px'>Tap on the image</Text>
                                                <a href={womenSize} target="_blank">
                                                    <img src={womenSize} alt="men size" />

                                                </a>
                                            </TabPanel>
                                            <TabPanel>
                                                <Heading size='md' marginBottom='10px'>KIDS'</Heading>
                                                <Text marginBottom='10px'>Tap on the image</Text>
                                                <a href={kidsSize} target="_blank">
                                                    <img src={kidsSize} alt="men size" />

                                                </a>
                                            </TabPanel>
                                            <TabPanel>
                                                <Heading size='md' marginBottom='10px'>UNISEX</Heading>
                                                <Text marginBottom='10px'>Tap on the image</Text>
                                                <a href={unisexSize} target="_blank">
                                                    <img src={unisexSize} alt="men size" />

                                                </a>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                    {/* =========== */}
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose} >
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>
                    <div className='men-detail-size-number'>
                        {
                            obj.size && obj.size.map((ele) => <div>
                                <button onClick={() => setSize(ele)} className={size == ele ? 'sizeBTN' : ""} >{ele}</button>
                            </div>)
                        }
                    </div>

                    <hr style={{ marginTop: "40px", marginBottom: "30px" }} />
                    <div className='men-detail-shipto-address'>
                        <input type="radio" name="group1"
                            value="first"
                            checked={selectedValue === "first"}
                            label="First"
                            onChange={handleChange} />
                        <h2>Store Pickup:</h2><span style={{ fontSize: '14px', textDecoration: 'underline' }}>Select Location </span><BiMap />
                    </div>
                    <p className='men-det-freeship'>FREE PICKUP</p>
                    <div className='men-detail-shipto-address'>
                        <input type="radio" name="group1"
                            value="first"
                            checked={selectedValue === "first"}
                            label="First"
                            onChange={handleChange} />
                        <h2>Ship to an address</h2>
                    </div>
                    <p className='men-det-freeship'>FREE SHIPPING</p>




                    <button className='men-detail-add-to-cart' onClick={addToCartFunc}>ADD TO BAG</button>
                    <div className='men-detail-status-des'>
                        <div>
                            <img src={status} alt="" />
                        </div>
                        <div>
                            <span tabindex="0" class="StatusRewardInfo RB-body2">GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.
                                <br />
                                Use your STATUS across our brand family, JD Sports and Finish Line.
                                <br />
                                <a href="/status" class="RB-link2">Join STATUS Now</a>
                            </span>
                        </div>
                    </div>
                    {checkAdminIsAuth ? <button>edit</button> : ""}
                </div>

            </div>
            <div className='men-detail-description-box'>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>
                        {

                            <p>{obj.product_detail_features}</p>

                        }
                        {
                            <p>* {obj.product_detail_size}</p>
                        }
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />
                <details>
                    <summary>
                        <Heading fontSize='18px' fontWeight='500'>Product Details</Heading>
                        <div><BsPlusLg /></div>
                    </summary>
                    <Text fontSize='md'>

                        <li>Silhouette inspired by the Air Jordan 4, 6, 11, 12, 13, 15, and 20</li>
                        <li>Laser-etched leather, nubuck and synthetic upper</li>
                        <li>Air-Unit cushioning for springy bounce and plenty of comfort</li>
                        <li>Rubber outsole for durability and traction</li>
                        <li>Mid-cut, lace-up construction</li>
                        <li>Padded tongue and collar</li>
                        <li>The Air Jordan Retro Dub Zero is imported.</li>

                        <Text>One of the most iconic hybrids of the Jordan Brand line, the Men's Air Jordan Retro Dub Zero Off-Court Shoes were originally released back in 2005. Now, it's back and better than ever, fracturing a commemorative insole.</Text>
                    </Text>
                </details>
                <hr className='men-detail-des-summary-line' />

            </div>
        </div>
    )
}
