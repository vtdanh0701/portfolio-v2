import React, {useState,useEffect} from 'react';

const UpdatedComponent = (OriginalComponent) =>{

    const NewComponent = ()=>{
        const [isLoading,setLoading] = useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
            },300)
        },[])

        return (
            <OriginalComponent isLoading={isLoading}/>
        )}

    return NewComponent
}

export default UpdatedComponent;
