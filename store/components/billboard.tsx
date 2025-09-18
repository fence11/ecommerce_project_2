import { Billboard as BillboardType } from '@/types';

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className='p-4 overflow-hidden sm:p-6 lg:p-8 rounded-xl'>
            <div className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden'>
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{ 
                        backgroundImage: `url(${data?.imageUrl})`,
                        filter: 'blur(1px)'
                    }}>
                </div>
                <div className='absolute inset-0 bg-black/20'></div>
                <div className='relative z-10 flex flex-col items-center justify-center w-full h-full text-center gap-y-8'>
                    <div className='max-w-xs text-3xl font-bold text-white sm:text-5xl lg:text-6xl sm:max-w-xl drop-shadow-lg'>
                        {data?.label}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;