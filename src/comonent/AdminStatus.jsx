import React, { useEffect, useState } from 'react'
import { EditCommentAPI, EditProductAPI, getproduct } from '../services/allAPI'
import { SERVER_URL } from '../services/serverUrl'
import { Modal, Button } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminStatus() {
    const [ss, setss] = useState('')
    const [coment, setcomment] = useState({
        coments: "",
        username: ""
    })
    const [co, setco] = useState({
        id: "",
        is_like: ""
    })
    console.log(coment)
    useEffect(() => {
        const { username } = JSON.parse(sessionStorage.getItem('existingUser'))
        setcomment({ ...coment, username: username })
        console.log(username);
    }, [coment.coments])
    const [showss, setShowss] = useState(false);
    const handleClosess = () => setShowss(false);
    const [modalss, setmodalss] = useState([])
    const handleShowss = (admin) => {
        setmodalss(admin)
        setShowss(true);
    }
    const [show, setShow] = useState(false);
    const [modal, setmodal] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = (admin) => {
        setmodal(admin)
        setShow(true);
    }

    const [statuss, setstatuss] = useState([])
    useEffect(() => {
        const handleget = async () => {
            const token = sessionStorage.getItem("token")

            const reqHeader = {

                "Authorization": `Bearer ${token}`
            }

            const result = await getproduct(reqHeader)

            setstatuss(result.data)
        }
        handleget()
    }, [])
    console.log(statuss);


    const handleComment = async (admin) => {
        const { _id } = JSON.parse(sessionStorage.getItem('existingUser'))
        console.log(_id);
        console.log(admin);
        const { productname, productsubname, totalprice, images, offer, count } = admin

        console.log({ productname, productsubname, totalprice, images, offer, count });
        const reqBody = new FormData()
        reqBody.append("productname", productname)
        reqBody.append("productsubname", productsubname)
        reqBody.append("totalprice", totalprice)
        reqBody.append("offer", offer)
        reqBody.append("images", images)
        reqBody.append("count", count)
        coment.coments ? reqBody.append("coment", JSON.stringify(coment)) : null

        try {
            const result = await EditCommentAPI(admin._id, reqBody)
            console.log(result);
            if (result.status == 200) {

                toast.success("successFully Added Comment...")
                setcomment({
                    coments: "",
                    username: ""
                })
                handleClosess()
            }
        } catch (err) {
            console.log(err);
        }

    }


    const handleEdit = async (admin) => {

        const { _id } = JSON.parse(sessionStorage.getItem('existingUser'))
        setss(_id)
        console.log(_id);
        setco({ ...co, id: _id })
        setco({ ...co, is_like: true })

        console.log(admin);



        const { productname, productsubname, totalprice, images, offer, } = admin

        console.log({ productname, productsubname, totalprice, images, offer, count });
        const reqBody = new FormData()
        reqBody.append("productname", productname)
        reqBody.append("productsubname", productsubname)
        reqBody.append("totalprice", totalprice)
        reqBody.append("offer", offer)
        reqBody.append("images", images)
        count.id ? reqBody.append("count", count) : null
        coment.coments ? reqBody.append("coment", coment) : null

        try {
            const result = await EditProductAPI(admin._id, reqBody)
            console.log(result);
            if (result.status == 200) {
                toast.success('Like Added')

            }
        } catch (err) {
            console.log(err);
        }


    }


    return (
        <div className='container'>
            <h1 className='text-center my-3'>Admin <span className='text-danger'>Update</span>,All Success result of  User Complaints</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No:</th>
                        <th scope="col">Place</th>
                        <th scope="col">Date</th>
                        <th scope="col"> Compliant subject</th>
                        <th scope="col">image</th>
                        <th scope='col'>UserName</th>
                        <th scope='col'>Comment Section</th>
                        <th scope='col'>Users Like</th>
                    </tr>
                </thead>
                <tbody>
                    {statuss?.map((admin, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{admin.productname}</td>
                            <td>{admin.productsubname}</td>
                            <td>{admin.totalprice}</td>
                            <td><img className='W-100' onClick={() => handleShow(admin)} style={{ height: "50px", width: "50px" }} src={`${SERVER_URL}/uploads/${admin?.images}`} alt="" /></td>
                            <td>{admin.offer}</td>
                            <td className='d-flex'><Button onClick={() => handleShowss(admin)}>Comment...</Button></td>
                            <td>{!co.is_like ?
                                <button onClick={() => handleEdit(admin)} className='btn btn-primary'><i class="fa-regular fa-thumbs-up"></i><Badge className='ms-1' bg="secondary">{admin.count}</Badge></button> : <button disabled onClick={() => handleEdit(admin)} className='btn btn-primary'><i class="fa-regular fa-thumbs-up"></i><Badge className='ms-1' bg="secondary">{admin.count}</Badge></button>}</td>
                        </tr>
                    ))}

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className='w-100' src={`${SERVER_URL}/uploads/${modal?.images}`} alt="" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    <Modal
                        show={showss}
                        onHide={handleClosess}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Comment your Opinion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='d-flex'>
                                <input value={coment.coments} onChange={(e) => setcomment({ ...coment, coments: e.target.value })} type="text" placeholder='Comment...' className=' me-2 form-control' /> <Button onClick={coment.coments ? () => handleComment(modalss) : null} className='p-2'><i class="fa-regular fa-paper-plane"></i></Button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosess}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                </tbody>
            </table>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </div>
    )
}

export default AdminStatus
