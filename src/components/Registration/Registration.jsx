import React from 'react';

const Registration = () => {
    return (
        <div>
            <div className='flex'>
                <div className='bg-[#1E73BE] w-6/12 pt-8'>
                    <div className='ml-80'>
                        <div className='mb-6'>
                            <h1 className='text-3xl text-[#F8D24B] font-medium'>Regitration</h1>
                            <p className='text-white'>Limited Seats remaining Hurry Up</p>
                        </div>
                        {/* For TSX uncomment the commented types below */}
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 border rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 } /* as React.CSSProperties */}>15</span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 border rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 } /* as React.CSSProperties */}>10</span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 border rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 } /* as React.CSSProperties */}>24</span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 border rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 59 } /* as React.CSSProperties */}>59</span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#05305A] w-6/12 pt-8'>
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <div className="">
                                <h1 className="text-5xl font-bold text-white">Sign up Now</h1>
                            </div>
                            <div className="card w-full max-w-sm shrink-0">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#F8D24B]">Get Free Quote</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;