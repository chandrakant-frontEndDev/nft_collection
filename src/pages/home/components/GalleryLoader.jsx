import React,{useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import BeatLoader from "react-spinners/BeatLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const GalleryLoader = () => {

    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgb(243 84 123)");
    return (
        <>
            <div className='d-flex justify-content-center m-3' >
                {/* <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="danger" /> */}
                 <BeatLoader color={color} loading={loading} cssOverride={override} size={20} />
            </div>
         
    

     
   
        </>
    )
}



export default GalleryLoader;