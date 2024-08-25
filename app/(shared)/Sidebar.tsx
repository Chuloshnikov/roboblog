import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
            Subscribe and Follow
        </h4>
        <div className='my-5 mx-5'>
            <SocialLinks isDark={true}/>
        </div>
        <Subscribe/>
        <div className='bg-wh-900 my-8'>abwert image</div>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
            About the Blog
        </h4>
        <div className='bg-wh-900 my-8'>profile image</div>
        <h4 className='py-3 px-5 text-wh-500 font-bold text-center'>
            Geffrey Epstain
        </h4>
        <p className='text-wh-500 text-center text-sm'>
            Sit diem lacus tortor molestie amet tincidunt. Amet amet arcu sed faciliti
        </p>
    </aside>
  )
}

export default Sidebar;