

const Posts = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="mb-8">
                <h1 className='text-2xl font-medium'>Welcome to Education</h1>
                <p className="text-[#666666] text-sm mb-2">We are Expert in Education</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/WWhYdsfH/post-1.jpg"
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <p>By: templatation</p>
                            <p>Comments: 0</p>
                        </div>
                        <h2 className="card-title">The Surprising Reason College Tuition Is Crazy Expensive</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...</p>
                        <div className="card-actions">
                            <button className="btn w-full bg-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/V08xyHBj/post-2.jpg"
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <p>By: templatation</p>
                            <p>Comments: 0</p>
                        </div>
                        <h2 className="card-title">The Surprising Reason College Tuition Is Crazy Expensive</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...</p>
                        <div className="card-actions">
                            <button className="btn w-full bg-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/zhLCjwQ3/post-3.jpg"
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <p>By: templatation</p>
                            <p>Comments: 0</p>
                        </div>
                        <h2 className="card-title">The Surprising Reason College Tuition Is Crazy Expensive</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...</p>
                        <div className="card-actions">
                            <button className="btn w-full bg-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/q3T5PV84/Rectangle-3.png"
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <p>By: templatation</p>
                            <p>Comments: 0</p>
                        </div>
                        <h2 className="card-title">The Surprising Reason College Tuition Is Crazy Expensive</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...</p>
                        <div className="card-actions">
                            <button className="btn w-full bg-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;