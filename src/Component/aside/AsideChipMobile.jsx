import React from 'react'


const AsideChipMobile = ({icon, txt, style}) => {
  return (
    <div style={style} className='flex items-end  gap-3 py-2 cursor-pointer  w-full'>
      <i className='text-[1.6rem] text-[--text-color3]'>{icon}</i>
      <h4 className=' leading-[1.5rem] text-[1.18rem] text-[--text-color3] '>{txt}</h4>
    </div>
  )
}

export default AsideChipMobile