// eslint-disable-next-line no-unused-vars
import React from 'react'

const ClientCard = ({ client }) => {
  return (
    <div className=' p-6 bg-white rounded-xl space-y-5'>
      <div>
        <h1 className=' text-xl font-semibold text-gray-700'>{client.name}</h1>
        <p className=' text-sm text-gray-500 pt-2'>{client.title}</p>
      </div>
      <p className=' text-xs text-gray-300'></p>
    </div>
  )
}

export default ClientCard