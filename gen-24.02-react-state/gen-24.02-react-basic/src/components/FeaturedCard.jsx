const FeaturedCard = ({featured}) => {
    return (
        <div>
            <div className="mb-3 mt-12">
                <p id="test" className=" font-bold text-2xl">Featured Brands</p>
                <p className=" text-lg">Pilihan Brand Terbaik dengan Penawaran Spesial</p>
            </div>
            <div className="grid grid-cols-4 gap-6 justify-center">
                {
                    featured.map((featured) => (
                        <div>
                            <a href="/">
                            <div>
                                <img
                                    key={featured.id}
                                    className="rounded-lg w-[231px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-95"
                                    src={featured.img}
                                    alt=""/>
                            </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default FeaturedCard;