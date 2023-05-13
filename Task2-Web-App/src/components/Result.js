import React from 'react'

function Result({data,loading}) {
  return (
    <div className='cont2'>
        <div className={loading?"loading":'unloading'}>Loading data.....</div>
        {
            data.map((data)=>(
            <div className='cont3'>
                <img src={data.avatar} alt='error'/>
                <h4>{data.first_name} {data.last_name}</h4>
                <h4>{data.email}</h4>
            </div>
            )
            )
        }
    </div>
  )
}

export default Result