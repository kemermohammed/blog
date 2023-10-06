import React from 'react'

const page = async({params}) => {
const fet = await fetch(`http://localhost:3000/api/dat/`);
const ans = await fet.json()
  return (
    <div>
      hi kem {params.id}
      {params.name}
    </div>
  )
}

export default page
