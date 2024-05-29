const BannerTwo = () => {
    return (
        <div className="flex flex-col my-14">
            <p className="pb-5 font-bold text-2xl">Best Curation Just For You!</p>
            <div className="w-[512px] rounded-lg flex justify-center gap-8">
                <img className=" max-w-full object-cover rounded-lg hover:shadow-lg hover:scale-95" src="./src/assets/bannertwo-1.jpg" alt="bannerTwo-1" />
                <img className=" max-w-full object-cover rounded-lg hover:shadow-lg hover:scale-95" src="./src/assets/bannertwo-2.jpg" alt="bannerTwo-2" />
            </div>
        </div>
    )
}

export default BannerTwo;