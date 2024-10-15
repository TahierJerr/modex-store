export const maxDuration = 60;

import getGraphics from '@/actions/get-graphics'
import GpuTable from './gpu-table'

const GPUTableLoad = async () => {
    const data = await getGraphics()
    
    return (
        <GpuTable data={data} />
    )
}

export default GPUTableLoad