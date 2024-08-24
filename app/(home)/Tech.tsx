import React from 'react';

type Props = {}

const Tech = (props: Props) => {
  return (
    <section>
        <hr className='border'/>
        {/*HEADER*/}
        <div className='flex items-center gap-3 my-8'>
            <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>
                HOT
            </h4>
            <p className='font-bold text-2xl'>Latest News in Technology</p>
        </div>

        {/*flex*/}
        {/* 
        <div className='flex justify-between items-center gap-5'>
            <div className='bg-wh-500 h-96 basis-1/2'></div>
            <div className='flex flex-col gap-3 bg-wh-500 h-96 basis-1/2'>
                <div className='bg-wh-500 basis-1/3'></div>
                <div className='bg-wh-500 basis-1/3'></div>
                <div className='bg-wh-500 basis-1/3'></div>
            </div>
        </div>
         */}

        {/*grid*/}
        <div className='sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5'>
        <div className='bg-wh-500 col-span-1 row-span-3'></div>
        <div className='bg-wh-500 col-span-1 row-span-1'></div>
        <div className='bg-wh-500 col-span-1 row-span-1'></div>
        <div className='bg-wh-500 col-span-1 row-span-1'></div>
        </div>
    </section>
  )
}

export default Tech;