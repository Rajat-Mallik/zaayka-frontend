import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    // useSearch Params can be used to extract values from url
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate()
    
    const verifyPayment = async ()=> {
        const response = await axios.post(url + "/api/order/verify", {success, orderId});
        if (response.data.succes) {
            navigate("/myorders")
        } else {
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
    }, [])

  return (
    <div className='verify'>
      <div className='spinner'>

      </div>
    </div>
  )
}

export default Verify
