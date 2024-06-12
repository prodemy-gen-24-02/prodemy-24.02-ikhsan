const Rating = () => {
    return (
        <div>
            <div className="font-bold text-lg">
                <p>Penilaian & Ulasan</p>
            </div>
            <div className="flex justify-start gap-2 items-center">
                <p className="font-semibold text-3xl">5/5</p>
                <span className="inline-flex gap-1" data-testid="star-rating">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block   !h-6 !w-6">
                        <path
                            d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z"
                            fill="#FBC622"></path>
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block   !h-6 !w-6">
                        <path
                            d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z"
                            fill="#FBC622"></path>
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block   !h-6 !w-6">
                        <path
                            d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z"
                            fill="#FBC622"></path>
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block   !h-6 !w-6">
                        <path
                            d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z"
                            fill="#FBC622"></path>
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block   !h-6 !w-6">
                        <path
                            d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z"
                            fill="#FBC622"></path>
                    </svg>
                </span>
                <p className="text-sm">(3 ulasan)</p>
            </div>
        </div>
    )
}
export default Rating;