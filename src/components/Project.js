import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';
import './Content.js'
//import * from 'react-bootstrap';
import { auth } from '../firebase'

// Variables
let title = <h1>Overview</h1>;


const url = 'https://sampleprojektcreate3d.000webhostapp.com/sampleprojektcreate3d/api/pages';


function Project() {
    const [pages, setPages] = useState();

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setPages(response.data.pages);
            })
            .catch(err => console.log(err))
            .then(json => console.log(json));  
    }, []);

    // console.log(pages);

    return pages ? (
        <>
        <p><button onClick={() => auth.signOut()}>Sign out</button></p>

            <div className="App">
                {title}

                <div className="container">
                    <div class="row">

                        {pages.map(page => (
                            //  COL has a size 0f 6
                            <div className="col">
                                <div key={page.id} className="card text-left mt-4" style={{ width: "20rem" }}>
                                    <div className="card-body">
                                        <h4 className="card-title">{page.title}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">{page.headline}</h6>
                                        
                                            <div className='row content-info'>
                                                <div className='col-md-7'>Content Amount: {page.childCount}</div>
                                                <div className='col-md-5 text-right'><a href={"content/" + page.id} className="card-link">Go To Project</a></div>
                                            </div>

                                    </div>
                                </div>

                            </div>
                            //  COL

                        ))}
                        {/* ROW */}
                    </div>

                    <div className="col">

                    </div>
                </div>


            </div>
        </>
    ) : ('Loading...');
}


export default Project;
