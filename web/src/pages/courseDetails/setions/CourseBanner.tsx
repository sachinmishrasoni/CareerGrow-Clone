'use client';


const CourseBanner = () => {
    return (
        <>
            <section className='banner-box h-[40vh] bg-[linear-gradient(270deg,_var(--color-secondary)_0%,_var(--color-primary)_100%)] flex flex-col items-center'>

                <p className='max-w-3xl text-2xl sm:text-3xl md:text-4xl font-bold text-center translate-y-2/2 md:translate-y-2/4 px-5 bg-gradient-to-r from-secondary to-primary 
text-transparent bg-clip-text text-shadow'>Post Graduate Program In Advanced Banking</p>

                {/* Image */}
                {/* <div className="h-[300px] min-w-[600px] bg-purple-300 rounded-3xl absolute left-1/2 -translate-x-1/2 top-1/2  bg-center bg-no-repeat bg-cover z-10"
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}
  ></div> */}

            </section>

            <section className='h-[25vh] bg-white'>
                <div className="w-[90%] md:w-[600px] h-[225px] sm:h-[275px] md:h-[300px] bg-purple-300 rounded-3xl absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 bg-center bg-no-repeat bg-cover z-10"
                    style={{ backgroundImage: "url('https://www.careergrow.org/assets/images/diploma-crs/pgdab.jpg')" }}
                ></div>
            </section>
        </>
    );
};

export default CourseBanner;
