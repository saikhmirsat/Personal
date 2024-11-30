import { Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import './Styles/AddProducts.css'
import { Popover, useToast, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, Button } from '@chakra-ui/react'

export default function AddProducts() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [for_whom, setFor_whom] = useState("")
    const [category, setCategory] = useState("")
    const [sub_category, setSub_category] = useState("")
    const [brand, setBrand] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [color, setColor] = useState("")
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [image5, setImage5] = useState("")
    const [image6, setImage6] = useState("")
    const [video, setVideo] = useState("")
    const [now, setNow] = useState("")
    const [product_detail_size, setProduct_detail_size] = useState("")
    const [product_detail_features, setProduct_detail_features] = useState("")
    const [stock, setStock] = useState(0)
    const [rating, setRating] = useState(0)

    const toast = useToast()

    const handleCheckboxChange = (event) => {
        const checkedValue = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedItems([...checkedItems, checkedValue]);
        } else {
            setCheckedItems(checkedItems.filter((item) => item !== checkedValue));
        }
    };

    const ProductAddFunc = async () => {
        const obj = {
            quantity: 1, for_whom, category, sub_category, rating: +rating, brand, title, price: +price, color, image1, image2, image3, image4, image5, image6, video, size: checkedItems, now, product_detail_features, product_detail_size, stock: +stock
        }
        console.log(obj)
        try {
            await fetch('https://gray-dead-springbok.cyclic.app/add', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        toast({
                            position: 'top',
                            title: res.msg,
                            description: "",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })

                    } else {
                        toast({
                            position: 'top',
                            title: res.msg,
                            description: "",
                            status: 'warning',
                            duration: 5000,
                            isClosable: true,
                        })
                    }

                })
        } catch (err) {
            toast({
                position: 'top',
                title: err,
                description: "",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <div>
            <Heading size='lg' m="10px">AddProducts</Heading>
            <div className="admin-add-prod-parent-con">
                <div>
                    <Input placeholder='For Whom..' onChange={(e) => setFor_whom(e.target.value)} />
                    <Input placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                    <Input placeholder='Sub Category' onChange={(e) => setSub_category(e.target.value)} />
                    <Input placeholder='Brand' onChange={(e) => setBrand(e.target.value)} />
                    <Input placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder='Price' type="number" onChange={(e) => setPrice(e.target.value)} />

                    <Input placeholder='Product size Detail' onChange={(e) => setProduct_detail_size(e.target.value)} />
                    <Input placeholder='Product features detail' onChange={(e) => setProduct_detail_features(e.target.value)} />
                    <Input placeholder='Products Stock' type="number" onChange={(e) => setStock(e.target.value)} />
                    <Input placeholder='Products Ratings' type="number" onChange={(e) => setRating(e.target.value)} />
                </div>
                <div>

                    <Input placeholder='Image 1 url' onChange={(e) => setImage1(e.target.value)} />
                    <Input placeholder='Image 2 url' onChange={(e) => setImage2(e.target.value)} />
                    <Input placeholder='Image 3 url' onChange={(e) => setImage3(e.target.value)} />
                    <Input placeholder='Image 4 url' onChange={(e) => setImage4(e.target.value)} />
                    <Input placeholder='Image 5 url' onChange={(e) => setImage5(e.target.value)} />
                    <Input placeholder='Image 6 url' onChange={(e) => setImage6(e.target.value)} />
                    <Input placeholder='Video url' onChange={(e) => setVideo(e.target.value)} />
                    <Input placeholder='Color ' onChange={(e) => setColor(e.target.value)} />
                    <Input placeholder='Now' onChange={(e) => setNow(e.target.value)} />
                    <Popover placement='top-start'>
                        <PopoverTrigger>
                            <Button className='sizeChat' >Size</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>Size Chart</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody className='sizeContainer' >
                                <label >1<input type="checkbox" value="1" checked={checkedItems.includes("1")} onChange={handleCheckboxChange} /></label>
                                <label >1.5<input type="checkbox" value="1.5" checked={checkedItems.includes("1.5")} onChange={handleCheckboxChange} /></label>
                                <label >2<input type="checkbox" value="2" checked={checkedItems.includes("2")} onChange={handleCheckboxChange} /></label>
                                <label >2.5<input type="checkbox" value="2.5" checked={checkedItems.includes("2.5")} onChange={handleCheckboxChange} /></label>
                                <label >3<input type="checkbox" value="3" checked={checkedItems.includes("3")} onChange={handleCheckboxChange} /></label>
                                <label >3.5<input type="checkbox" value="3.5" checked={checkedItems.includes("3.5")} onChange={handleCheckboxChange} /></label>
                                <label >4<input type="checkbox" value="4" checked={checkedItems.includes("4")} onChange={handleCheckboxChange} /></label>
                                <label >4.5<input type="checkbox" value="4.5" checked={checkedItems.includes("4.5")} onChange={handleCheckboxChange} /></label>
                                <label>5<input type="checkbox" value="5" checked={checkedItems.includes("5")} onChange={handleCheckboxChange} /></label>
                                <label>5.5<input type="checkbox" value="5.5" checked={checkedItems.includes("5.5")} onChange={handleCheckboxChange} /></label>
                                <label>6<input type="checkbox" value="6" checked={checkedItems.includes("6")} onChange={handleCheckboxChange} /></label>
                                <label>6.6<input type="checkbox" value="6.5" checked={checkedItems.includes("6.5")} onChange={handleCheckboxChange} /></label>
                                <label>7<input type="checkbox" value="7" checked={checkedItems.includes("7")} onChange={handleCheckboxChange} /></label>
                                <label>7.5<input type="checkbox" value="7.5" checked={checkedItems.includes("7.5")} onChange={handleCheckboxChange} /></label>
                                <label>8<input type="checkbox" value="8" checked={checkedItems.includes("8")} onChange={handleCheckboxChange} /></label>
                                <label>8.5<input type="checkbox" value="8.5" checked={checkedItems.includes("8.5")} onChange={handleCheckboxChange} /></label>
                                <label>9<input type="checkbox" value="9" checked={checkedItems.includes("9")} onChange={handleCheckboxChange} /></label>
                                <label>9.5<input type="checkbox" value="9.5" checked={checkedItems.includes("9.5")} onChange={handleCheckboxChange} /></label>
                                <label>10<input type="checkbox" value="10" checked={checkedItems.includes("10")} onChange={handleCheckboxChange} /></label>
                                <label>10.5<input type="checkbox" value="10.5" checked={checkedItems.includes("10.5")} onChange={handleCheckboxChange} /></label>
                                <label>11<input type="checkbox" value="11" checked={checkedItems.includes("11")} onChange={handleCheckboxChange} /></label>
                                <label>11.5<input type="checkbox" value="11.5" checked={checkedItems.includes("11.5")} onChange={handleCheckboxChange} /></label>
                                <label>12<input type="checkbox" value="12" checked={checkedItems.includes("12")} onChange={handleCheckboxChange} /></label>
                                <label>12.5<input type="checkbox" value="12.5" checked={checkedItems.includes("12.5")} onChange={handleCheckboxChange} /></label>
                                <label>13<input type="checkbox" value="13" checked={checkedItems.includes("13")} onChange={handleCheckboxChange} /></label>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                </div>
            </div>
            <Button className='add-page-submit-btn' bg="#5271FF" onClick={ProductAddFunc}>Submit</Button>
        </div>
    )
}
