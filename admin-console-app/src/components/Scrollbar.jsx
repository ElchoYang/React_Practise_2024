import { forwardRef, memo } from 'react'
import SimpleBar from 'simplebar-react'

const Scollbar = forwardRef(({children, ...other}, ref) => {

    return (
        <SimpleBar className='h-full' scrollableNodeProps={{ ref }} clickOnTrack={false} {...other}>
            {children}
        </SimpleBar>
    )
})

export default memo(Scollbar)