import { Heading, Input, Text, } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../Admin/Styles/Inventory.css'
import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react'

export default function Inventory() {
  const [products, setSetProducts] = useState([])


  // =============edit modal==========
  const [title, setTitle] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [image1, setImage1] = useState("")
  const [stock, setStock] = useState("")
  const [now, setNow] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [prodId, setProdId] = useState("")
  const [prodObject, setProdObject] = useState({})

  useEffect(() => {
    getProducts()
  }, [])

  const updateAndCloseFN = (id, ele) => {
    setProdId(id)
    setProdObject(ele)
    onOpen()
  }

  const updateSubmit = (id) => {
    let obj = {
      title: title || prodObject.title,
      brand: brand || prodObject.brand,
      price: price || prodObject.price,
      now: now || prodObject.now,
      stock: stock || prodObject.stock,
      image1: image1 || prodObject.image1
    }
    try {
      fetch(`https://gray-dead-springbok.cyclic.app/products/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(res => res.json())
        .then(res => {
          alert(res.msg)
          getProducts()
          onClose()
          console.log(res)
        })



    } catch (err) {
      console.log(err)
      alert("Something went wrong")
    }

  }


  // =============edit modal end==========



  const getProducts = () => {
    try {

      fetch(`https://gray-dead-springbok.cyclic.app/products`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then((res) => {
          setSetProducts(res)

        })
    } catch (err) {
      console.log(err)
      alert("Something Wrong")
    }
  }
  const ProductDelete = async (id) => {
    try {
      await fetch(`https://gray-dead-springbok.cyclic.app/products/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      }).then((res) => res.json())
        .then((res) => {
          console.log(res)
          getProducts()
        })

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='admin-inventory-main-container'>
      <div className='admin-inventory-card-parent'>
        {
          products && products.map((ele) => <div key={ele._id} className='admin-inventory-card'>
            <img src={ele.image1} alt="" />
            <Heading size='sm'>{ele.title}</Heading>
            <Heading size='sm'> {ele.brand}</Heading>
            <Heading size='md' fontWeight="medium">Rs.{ele.price}</Heading>
            <div className='inventory-dtl-edit-btn'>
              <button onClick={() => ProductDelete(ele._id)}>Delete</button>
              <button onClick={() => updateAndCloseFN(ele._id, ele)}>Edit</button>
              {/* =============================Edit Modal============================= */}
              <Modal isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)}></Input>
                    <Input placeholder="Price" onChange={(e) => setPrice(e.target.value)}></Input>
                    <Input placeholder="Image1 url..." onChange={(e) => setImage1(e.target.value)}></Input>
                    <Input placeholder="Stock" onChange={(e) => setStock(e.target.value)}></Input>
                    <Input placeholder="Brand" onChange={(e) => setBrand(e.target.value)}></Input>
                    <Input placeholder="Now" onChange={(e) => setNow(e.target.value)}></Input>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={() => updateSubmit(prodId)}>Submit</Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              {/* =============================Edit Modal End============================= */}
            </div>
          </div>)
        }
      </div>
    </div >
  )
}
