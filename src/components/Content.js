import React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css';
import { useParams } from "react-router";


// Variables
let title = <h1>Content</h1>;


const url = 'https://sampleprojektcreate3d.000webhostapp.com/sampleprojektcreate3d/api/page/';


function Content() {

    let { id } = useParams();
    console.log(url + { id }.id);
    const [pages, setPages] = useState();

    useEffect(() => {
        axios
            .get(url + { id }.id)
            .then(response => {
                setPages(response.data.pages);
            })
            .catch(err => console.log(err));
        // .then(json => console.log(json))  
    }, [id]);

    console.log(pages);

    return pages ? (
        <>
            {/* <h3>My Id is {id}</h3> */}
            <div className="App">
                {title}

                <div className="container">
                    <div class="row">

                        {pages.map(page => (
                            //  COL has a size 0f 6
                            <div className="col-md-12">

                                <div className="card col-md-12 text-left mt-4 p-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{page.title}</h5>
                                        <h6 className="card-subtitle text-muted">{page.headline}</h6>
                                        <p className="card-text">{page.body}</p>

                                        <hr />

                                        <h6 className="card-link">PROJECT STRUCTURE</h6>

                                        {page.children.childrens.map(child => (
                                            <div>
                                                <label>{child.name.charAt(0).toUpperCase()+child.name.slice(1)}</label><br />
                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {
                                    page.children.childrens.map(child => (
                                        <div key={page.id} className="card col-md-12 text-left mt-4 p-4" style={{ width: "100%" }}>
                                            <>
                                                <div className="row">
                                                    <div class="col-md-8">

                                                        <span><strong>{child.name.charAt(0).toUpperCase()+child.name.slice(1)}</strong></span><br />

                                                        <div>
                                                           {child.body.replaceAll('<p>', '').replaceAll('</p>', '')}
                                                          
                                                        </div>

                                                    </div>

                                                    <div class="col-md-4">
                                                        {
                                                            child.images.map(im =>

                                                                <img class="img-fluid m-2" src={im.image} alt="img" width="360px"></img>

                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        </div>
                                    ))}

                                {/* end of card */}
                            </div>
                            //  end of COL 1

                        ))}
                        {/* end of pages function */}

                    </div>
                    {/* end of ROW 1 */}


                </div>
                {/* end of container */}

            </div>
        </>
    ) : ('Loading...');
}

// Clear the body text of the Content from the <p> and </p> tags
// function creatInnerHtml(e) {
//     return { __html: e.body.replaceAll('<p>', '') };
// }


export default Content;
