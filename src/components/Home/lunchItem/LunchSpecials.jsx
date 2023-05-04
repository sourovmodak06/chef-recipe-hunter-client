import React from 'react';

const LunchSpecials = () => {
    return (
        <div className='mx-auto md:w-[90%] bg-black p-5 text-[#c5a86b] rounded-md my-10'>
            <div className='h-full w-full rounded-md bg-white p-3'>
                <div className='bg-black h-full w-full'>
                    <h2 className='text-center py-4 text-3xl underline decoration-wavy underline-offset-8 font-semibold'>LUNCH SPECIALS</h2>
                    <p className='text-center'>Available Monday - Friday from 11:00 AM - 2:45 PM</p>
                    <p className='md:w-[40%] m-auto text-center'>Served with soup or salad, spring roll & jasmine or brownrice $2.99 for fried rice</p>
                    <p className='text-center'>Choice of Tofu, Vegetable, Chicken or Pork $9.99 Beef $11.99 Shrimp $12.99</p>
                    <div className='flex flex-col md:flex-row justify-between md:gap-10 px-5 md:px-20 py-10'>
                        <div className='md:w-1/2'>
                            <h2 className='font-semibold text-xl'>THAI FRIED RICE </h2>
                            <p>egg, tomatoes, onion, green onion</p>
                            <br />
                            <h2 className='font-semibold text-xl'>PAD THAI</h2>
                            <p>Stir-fried rice noodles, green onions, tofu, bean sprouts, egg, peanuts, tamarind sauce</p>
                            <br />
                            <h2 className='font-semibold text-xl'>PAD GRAPOW </h2>
                            <p>Stir-fried with baby corn, mushrooms, onion, bell peppers, jalapeño peppers, carrot, basil leaves.</p>
                            <br />
                            <h2 className='font-semibold text-xl'>GARLIC SAUCE</h2>
                            <p>Wok-tossed with broccoli, Carrot, garlic, black peppers</p>
                            <br />
                            <h2 className='font-semibold text-xl'>GINGER SAUCE </h2>
                            <p>Fresh ginger, yellow onion, green onion, carrot, shiitake mushroom, bell pepper, celery</p>
                            <br />
                            <h2 className='font-semibold text-xl'>CASHEW DELIGHT</h2>
                            <p>Snow pea, yellow onion, mushroom, celery, carrot, cashew nut.</p>
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className='font-semibold text-xl'>THAI GARDEN</h2>
                            <p>Broccoli, carrot, yellow onion, Napa cabbage, cabbage, snowpea, zucchini, yellow onion.</p>
                            <br />
                            <h2 className='font-semibold text-xl'>RED CURRY</h2>
                            <p>bamboo shoots, bell peppers, carrot, bamboo shoot & basil coconut milk</p>
                            <br />
                            <h2 className='font-semibold text-xl'>YELLOW CURRY </h2>
                            <p>Potato, onion, carrot, yellow curry paste, coconut milk</p>
                            <br />
                            <h2 className='font-semibold text-xl'>MUSSAMUN </h2>
                            <p>Peanut, potato, red onion, carrot, mussamun paste, coconut milk</p>
                            <br />
                            <h2 className='font-semibold text-xl'>PANANG CURRY</h2>
                            <p>Carrots, zucchini, bell pepper, basil leaves coconut milk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LunchSpecials;