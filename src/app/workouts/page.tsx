
import WorkoutCard from '../components/workoutCard/WorkoutCard';
import { IData } from '@/types/dataType';

const getData = async() =>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    if(!res.ok){
        throw new Error('Failed to fetch the data');
    }
    return res.json();
}

const WorkoutPage = async() => {

    const datas = await getData();
    

    return (
        <div>
            <h2 className='text-white text-2xl font-bold'>THE LIBRARY</h2>
            <p className='text-gray-500 mt-2'>Twelve lifts covering every major muscle group.</p>
            <div className="mt-6 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    datas.map((data: IData) => <WorkoutCard key={data.id} data={data}></WorkoutCard>)
                }
            </div>
        </div>
    );
};

export default WorkoutPage;