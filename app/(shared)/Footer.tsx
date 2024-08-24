import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between mx-auto gap-16 sm:flex'>
            {/* FIRST COLUMN*/}
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold'>ROBOBLOG</h4>
                <p className='my-5'>
                    RoboBlog is a cutting-edge platform where AI meets content creation. 
                    Our automated system generates insightful articles, tailored to your preferences, 
                    ensuring you stay ahead in the ever-evolving digital landscape. 
                    Discover a seamless blogging experience powered by intelligent automation
                </p>
                <p>&copy; ROBOBLOG. All Rights Reserved.</p>
            </div>
             {/* SECOND COLUMN*/}
             <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>
                    Massa orci senectus
                </p>
                <p className='my-5'>
                    Some random link again
                </p>
                <p>
                    Ulamcorper vivamus
                </p>
                
            </div>
             {/* THIRD COLUMN*/}
             <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>
                    Tempus metus mattis risus valutpat egestas.
                </p>
                <p className='my-5'>
                    (757)455-8457
                </p>
              
            </div>
        </div>
    </footer>
  )
}

export default Footer