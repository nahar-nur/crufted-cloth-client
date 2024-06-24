import { Link } from 'react-router-dom';
import ErrorPic from '../../../assets/textileArts/404.gif'
const Error = () => {
    return (
        <div className='mx-auto my-10'>
            <h3 className='text-3xl text-center text-red-600'>Opps...!!!!</h3>
            <div className='text-3xl text-green-600 text-center font-semibold mt-6'><Link to='./'>Back to
                Home</Link></div>
            <img className='text-centergit' src={ErrorPic} alt="" />

        </div>
    );
};

export default Error;