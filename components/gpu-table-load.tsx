export const maxDuration = 60;

import getGraphics from '@/actions/get-graphics'
import GpuTable from './gpu-table'
import MobileGpuTable from './mobile-gpu-table';

const GPUTableLoad = async () => {
    const data = await getGraphics()
    
    return (
        <>
        <div className='hidden sm:block'>
        <GpuTable data={data} />
        </div>
        <div className='block sm:hidden'>
        <MobileGpuTable data={data} />
        </div>
        </>
    )
}

export default GPUTableLoad