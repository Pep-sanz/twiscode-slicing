import { Button } from 'antd'

export default function Career() {
  return (
    <div id="career" className='py-32 flex text-white justify-center items-center'>
        <div className="flex flex-col md:flex-row justify-center max-w-[80%] gap-[50px] items-center bg-gradient-to-r from-[#414141] to-[#9F9F9F] py-10 px-6 md:px-10 lg:px-20">
            <div className="space-y-5">
                <h1 className='text-4xl'>Join our team</h1>
                <img src="/images/image-2.png" alt="career" />
            </div>
            <div className="space-y-5">
                <p className='text-wrap max-w-[500px]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eius vel itaque laudantium beatae at illo incidunt fuga saepe quidem obcaecati, quos laborum expedita facilis, sequi, velit exercitationem explicabo. Atque debitis molestias repellendus corrupti voluptatem odit nesciunt eius corporis dolores.
                </p>
                <Button 
                  className="font-semibold bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-white !outline-none border-none !rounded-md !px-8 !py-5 hover:!bg-gradient-to-r hover:!from-[#F9DD03] hover:!to-[#9FD685] hover:!text-white"
                >
                  Apply
                </Button>
            </div>
        </div>
    </div>
  )
}
