import React, { useState } from 'react'
import Fooddata from './data'
import Card from 'react-bootstrap/Card'

const Home = () => {

    const [menu, setMenu] = useState(Fooddata);

    const filteritems = (curitems) => {
        const updateitems = Fooddata.filter((cur) => {
            return cur.category === curitems;
        })
        setMenu(updateitems);
    };

    return (
        <>
            <section className='iteam_section mt-2 container'>
                <h2 className='text-center mb-2' style={{ fontWeight: 400 }}>Search Your Food</h2>

                <div className="btn-container d-flex justify-content-around mt-2">
                    <button className="btn btn-danger" onClick={() => filteritems("punjabi")}>Punjabi</button>
                    <button className="btn btn-primary" onClick={() => filteritems("vadapav")}>vadapav</button>
                    <button className="btn btn-success" onClick={() => filteritems("Pizza")}>Pizza</button>
                    <button className="btn btn-danger" onClick={() => filteritems("Chai")}>Chai</button>
                    <button className="btn btn-primary" onClick={() => filteritems("Frankie")}>Frankie</button>
                    <button className="btn btn-primary" onClick={() => setMenu(Fooddata)}>All</button>
                </div>

                <div className='container mt-3'>
                    <div className="row d-flex justify-content-center align-items-center">
                        {menu.map((e) => {
                            return (
                                <>
                                    <Card key={e.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style" >
                                        <Card.Img variant="top" src={e.imgdata} style={{ height: "16rem" }} className='mt-3' />
                                        <Card.Body>
                                            <Card.Title>{e.rname}</Card.Title>
                                            <Card.Text>
                                                Price :  {e.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home