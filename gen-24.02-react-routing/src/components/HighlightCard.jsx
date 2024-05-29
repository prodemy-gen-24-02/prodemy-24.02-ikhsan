const HighlightCard = ({highlight}) => {

    return (
        <div className="flex justify-center gap-6 mt-36">
            {
                highlight.map((highlight) => (
                    <a href="" key={highlight.id}>
                        <div className="flex flex-col group">
                            <div className="rounded-full p-2 w-24">
                                <img
                                    className="group-hover:shadow-lg rounded-full"
                                    src={highlight.img}
                                    alt={highlight.title}/>
                                <p className=" pt-2 text-sm text-slate-600">{highlight.title}</p>
                            </div>
                        </div>
                    </a>
                ))
            }

        </div>
    )
}

export default HighlightCard;