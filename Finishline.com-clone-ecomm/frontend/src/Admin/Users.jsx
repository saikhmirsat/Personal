import React from 'react'
import "../Admin/Styles/User.css"
import {
    Card, Image, Divider, ButtonGroup, Stack, Heading, Button, Text, CardHeader, CardBody, CardFooter, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    FormLabel,
    Select
} from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsOption } from 'react-icons/bs'
import { fetchData } from '../components/Crud'

export default function Users() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const [avatar, setAvatar] = useState("")
    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("user")

    const [userObject, setUserObject] = useState({})
    const [userId, setUserId] = useState("")

    // console.log(data)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetchData("https://gray-dead-springbok.cyclic.app/users")
            .then(res => {
                setData(res)
            })
            .catch(error => console.error(error));
    }


    const userDelete = async (id) => {
        try {
            await fetch(`https://gray-dead-springbok.cyclic.app/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    getData()
                })

        } catch (err) {
            console.log(err)
        }
    }
    const UpdateFunc = (id, ele) => {
        setUserObject(ele)
        setUserId(id)
        onOpen()
    }

    const updateProfile = (id) => {
        // console.log(id)
        const obj = {
            avatar: avatar || userObject.avatar,
            firstname: firstname || userObject.firstname,
            lastname: lastname || userObject.lastname,
            dob: dob || userObject.dob,
            email: email || userObject.email,
            role: role || userObject.role
        }
        console.log(obj)
        try {
            fetch(`https://gray-dead-springbok.cyclic.app/users/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then(res => res.json())
                .then(res => {
                    alert(res.msg)
                    getData()
                    onClose()
                    console.log(res)
                })



        } catch (err) {
            console.log(err)
            alert("Something went wrong")
        }
    }



    return (
        <div >
            <div className='users-card-parent-div'>
                {
                    data && data.map((ele) => <Card key={ele._id} maxW='sm'>
                        <CardBody>
                            <Image className='admin-user-avatar'
                                src={ele.avatar}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='0'>
                                <Heading size='md'>{ele.firstname} {ele.lastname}</Heading>
                                <Text>{ele.email}</Text>
                                <Text color='blue.600' fontSize='xl'>
                                    Role: {ele.role}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup className='user-delete-edit-btn'>
                                <Button variant='solid' colorScheme='blue' onClick={() => userDelete(ele._id)}>
                                    Delete
                                </Button>

                                <Button variant='solid' colorScheme='blue' onClick={() => UpdateFunc(ele._id, ele)}>
                                    Edit
                                </Button>
                                {/* =======================Modal======================== */}


                                <Modal
                                    initialFocusRef={initialRef}
                                    finalFocusRef={finalRef}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                >
                                    {/* <ModalOverlay /> */}
                                    <ModalContent>
                                        <ModalHeader>Edit User Detail</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6}>

                                            <FormControl mt={4}>
                                                <FormLabel>Role</FormLabel>
                                                <Select onChange={(e) => setRole(e.target.value)}>
                                                    <option value="user">User</option>
                                                    <option value="admin">Admin</option>
                                                </Select>
                                            </FormControl>

                                            <FormControl>
                                                <FormLabel>First name</FormLabel>
                                                <Input ref={initialRef} placeholder='First name' onChange={(e) => setFname(e.target.value)} />
                                            </FormControl>

                                            <FormControl mt={4}>
                                                <FormLabel>Last name</FormLabel>
                                                <Input placeholder='Last name' onChange={(e) => setLname(e.target.value)} />
                                            </FormControl>

                                            <FormControl mt={4}>
                                                <FormLabel>Email</FormLabel>
                                                <Input placeholder='Email..' onChange={(e) => setEmail(e.target.value)} />
                                            </FormControl>

                                            <FormControl mt={4}>
                                                <FormLabel>Avatar</FormLabel>
                                                <Input placeholder='Image url...' onChange={(e) => setAvatar(e.target.value)} />
                                            </FormControl>



                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={() => updateProfile(userId)}>
                                                Save
                                            </Button>
                                            <Button onClick={onClose}>Cancel</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                                {/* =============================================== */}
                            </ButtonGroup>
                        </CardFooter>
                    </Card>)
                }
            </div>
        </div>
    )
}
