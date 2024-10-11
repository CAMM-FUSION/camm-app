import React from 'react'
export const TeamCard = ({name, role, description, image}) => {
    return (
        <div className=' flex flex-col gap-2 max-w-36'>
            <div className=' bg-slate-400 rounded-full h-full w-full'>
                <img className='box-border h-48 w-48 object-fill self-center'
                 src={image}/>
            </div>
            <div>
                <h3 className=' text-lg text-black font-semibold'>{name}</h3>
                <h5 className=' text-base font-normal text-gray-700'>{role}</h5>
            </div>
            <div className=' text-sm text-black-500'>{description}</div>

        </div>
    )

}