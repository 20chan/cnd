import Services from '#/components/Services'
import Systems from '#/components/System'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <div className='grid grid-cols-4'>
        <div>
          <div className=''>
            Normal Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-muted'>
            Muted Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-red'>
            Red Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-green'>
            Green Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-yellow'>
            Yellow Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-blue'>
            Blue Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-magenta'>
            Magenta Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-cyan'>
            Cyan Color text <span className='font-bold'>bold</span>
          </div>
        </div>

        <div>
          <div className=''>
            Normal Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-muted'>
            Muted Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-bright-red'>
            Bright Red Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-bright-green'>
            Bright Green Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-bright-yellow'>
            Bright Yellow Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-bright-blue'>
            Bright Blue Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-bright-magenta'>
            Bright Magenta Color text <span className='font-bold'>bold</span>
          </div>
          <div className='text-bright-cyan'>
            Bright Cyan Color text <span className='font-bold'>bold</span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 mt-4'>
        <div>
          <div className='bg-fg text-white'>
            Normal Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-muted text-white'>
            Muted Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-red text-white'>
            Red Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-green text-white'>
            Green Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-yellow text-white'>
            Yellow Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-blue text-white'>
            Blue Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-magenta text-white'>
            Magenta Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-cyan text-white'>
            Cyan Color text <span className='font-bold'>bold</span>
          </div>
        </div>

        <div>
          <div className=' text-black'>
            Normal Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-muted text-black'>
            Muted Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-bright-red text-black'>
            Bright Red Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-bright-green text-black'>
            Bright Green Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-bright-yellow text-black'>
            Bright Yellow Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-bright-blue text-black'>
            Bright Blue Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-bright-magenta text-black'>
            Bright Magenta Color text <span className='font-bold'>bold</span>
          </div>
          <div className='bg-bright-cyan text-black'>
            Bright Cyan Color text <span className='font-bold'>bold</span>
          </div>
        </div>
      </div>
    </div>
  )
}
