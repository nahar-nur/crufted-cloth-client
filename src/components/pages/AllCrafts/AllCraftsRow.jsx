import React from 'react';
import { Link } from 'react-router-dom';

const AllCraftsRow = ({ craft }) => {
    const { _id, name, subCategory, price,userName,userEmail } = craft
    return (
        <div className='overflow-x-auto mx-auto'>
            <tr>
                
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{userName}</td>
                <td>{userEmail}</td>

                <th>
                    <Link to={`/crafts/${_id}`}>
                    <button className="btn btn-ghost btn-xs">Details</button>
                    </Link>
                </th>
            </tr>
        </div>
    );
};

export default AllCraftsRow;