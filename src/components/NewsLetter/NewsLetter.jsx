

const NewsLetter = () => {
    return (
        <div className="mb-12">
            <div className="bg-[#05305A] container mx-auto py-4 rounded">
                <div className="text-center mb-4 text-white">
                    <h1 className="text-lg font-medium">Stay Informed</h1>
                    <p className="text-[#E6E6E6]">Get updates on educational materials, new courses and more!</p>
                </div>
                <div className="join flex justify-center">
                    <div>
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn bg-amber-400 text-white join-item">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;