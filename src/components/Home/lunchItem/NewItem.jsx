import React from 'react';
import Marquee from "react-fast-marquee";

const NewItem = () => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl md:text-5xl font-semibold text-[#c5a86b] text-center'>Amazingly Delicious</h2>
                <div className='h-[2px] w-56 bg-[#c5a86b] my-5'></div>
            </div>
            <Marquee pauseOnHover>
            <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1616278842935-f36557148755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1586128743915-ec7788189715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1604579659931-f42436a8368c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            <img src="https://images.unsplash.com/photo-1562565651-7d4948f339eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="New Item" className='w-96 h-64 mx-5 rounded-lg'/>
            
        </Marquee>
        </div>
    );
};

export default NewItem;