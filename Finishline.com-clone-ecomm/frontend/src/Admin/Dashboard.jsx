import React from 'react'
import '../Admin/Styles/Dashboard.css'
import { FaSitemap } from 'react-icons/fa';
import { FaDropbox } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Dashboard() {
    const [data, setData] = useState([])
    const [products, setProducts] = useState([])


    let adminCount = data && data.filter((ele) => { return ele.role == "admin" })


    useEffect(() => {
        getData()
        getProducts()
    }, [])

    const getData = () => {
        try {

            fetch(`https://gray-dead-springbok.cyclic.app/users`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    setData(res)
                })
        } catch (err) {
            console.log(err)
            alert("Something Wrong")
        }
    }

    const getProducts = () => {
        try {

            fetch(`https://gray-dead-springbok.cyclic.app/products`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    setProducts(res)

                })
        } catch (err) {
            console.log(err)
            alert("Something Wrong")
        }
    }
    return (
        <div className='dashboard-main-container'>
            <div>
                <div className='dashboard-icons'>
                    <FaSitemap size='70px' color='#5271FF' />
                </div>
                <Heading>Users</Heading>
                <Heading>{data.length}</Heading>
            </div>
            <div>
                <div className='dashboard-icons'>
                    <BsPersonBoundingBox size='60px' color='#5271FF' />
                </div>
                <Heading>Admin</Heading>
                <Heading>{adminCount.length}</Heading>
            </div>
            <div>
                <div className='dashboard-icons' >
                    <FaDropbox size='70px' color='#5271FF' />
                </div>
                <Heading>Products</Heading>
                <Heading>{products.length}</Heading>
            </div>
            <div>
                <div className='dashboard-icons'>
                    <AiOutlineShoppingCart size='70px' color='#5271FF' />
                </div>
                <Heading>Order</Heading>
                <Heading>2</Heading>
            </div>

        </div>
    )
}
