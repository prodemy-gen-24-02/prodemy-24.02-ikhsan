import FeaturedCard from '../components/FeaturedCard';

const Header = () => {
    return (
        <header className="px-10 pb-2 w-full shadow bg-white z-50 h-32 invisible lg:visible md:top-0 lg:fixed ">
            <div className="flex items-center justify-center my-5">
                <div class="pr-20">
                    <svg
                        width="176"
                        height="20"
                        viewBox="0 0 110 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="tablet:w-44">
                        <g clip-path="url(#clip0_107_2042)">
                            <path
                                d="M0.512094 0.177185V1.28652H10.8843L0 13.3805V13.8232H13.2653V12.7132H2.31333L13.1927 0.702518L13.1884 0.177185H0.512094Z"
                                fill="#262626"></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.9124 13.8228L25.8274 0.0787964H26.6251L33.5409 13.8228H32.0587L29.7297 9.18546H22.7228L20.3945 13.8228H18.9124ZM29.1756 8.07546L26.2156 2.18746L23.2776 8.07546H29.1756Z"
                                fill="#262626"></path>
                            <path
                                d="M40.3733 0.177185V13.8232H49.0518V12.7132H41.7856V0.177185H40.3733Z"
                                fill="#262626"></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M55.2698 6.99979C55.2698 3.07445 58.7383 -0.000213623 63.1663 -0.000213623C67.6184 -0.000213623 71.1062 3.07445 71.1062 6.99979C71.1062 10.9251 67.6184 13.9998 63.1663 13.9998C58.7383 13.9998 55.2698 10.9251 55.2698 6.99979ZM56.7683 6.99979C56.7683 10.2478 59.598 12.7918 63.2097 12.7918C66.7972 12.7918 69.6077 10.2478 69.6077 6.99979C69.6077 3.75245 66.7972 1.20845 63.2097 1.20845C59.598 1.20845 56.7683 3.75245 56.7683 6.99979Z"
                                fill="#262626"></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M87.9211 3.75812C87.9211 5.28279 87.0344 6.38812 85.2844 7.04412C85.8813 7.42412 86.4062 8.10479 87.0571 8.99479L90.5143 13.8228H88.8548L86.2495 10.0921C84.5323 7.62946 83.9988 7.39746 82.2667 7.39746H80.4177V13.8228H79.0054V0.176788H82.9134C86.0486 0.176788 87.9211 1.51546 87.9211 3.75812ZM82.6762 1.28679H80.4177V6.28746H82.7189C85.1071 6.28746 86.4225 5.39612 86.4225 3.77745C86.4225 2.17146 85.0921 1.28679 82.6762 1.28679Z"
                                fill="#262626"></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M101.971 0.0783997H102.768L109.683 13.8231H108.201L105.873 9.18573H98.8661L96.5378 13.8231H95.0549L101.971 0.0783997ZM99.4202 8.07573H105.318L102.359 2.18707L99.4202 8.07573Z"
                                fill="#262626"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_107_2042">
                                <rect width="110" height="14" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="w-[48rem]">
                    <form action="">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Puma Up to 50% + Voucher 35%✨"
                            className="w-5/6 border-2 rounded-full outline-none px-4 py-2"/>
                        <button
                            className="relative right-[2.3rem] h-8 w-8 rounded-full bg-black bottom-1.5">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="inline-block h-6 w-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.5 19a8.5 8.5 0 116.342-2.84l5.017 5.017a.482.482 0 11-.683.682l-5.016-5.017A8.469 8.469 0 0110.5 19zm0-.944a7.556 7.556 0 100-15.112 7.556 7.556 0 000 15.112z"
                                    fill="#262626"
                                    class="fill-white"></path>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="flex gap-5 items-center">
                    <a href="">
                        <div
                            className="flex gap-1 items-center font-bold text-sm hover:underline transition ease-in-out duration-300 p-2 rounded-lg">
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block h-6 w-6 ">
                                    <path
                                        d="M21.649 19.875c-1.428-2.468-3.628-4.239-6.196-5.078a6.75 6.75 0 10-6.906 0c-2.568.839-4.768 2.609-6.196 5.078a.75.75 0 101.299.75C5.416 17.573 8.538 15.75 12 15.75c3.462 0 6.584 1.823 8.35 4.875a.751.751 0 101.299-.75zM6.75 9a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z"
                                        fill="#000"
                                        className="fill-grey-100"></path>
                                </svg>
                            </div>
                            <p>Masuk / Daftar</p>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block h-6 w-6 ">
                                <path
                                    d="M16.688 3c-1.936 0-3.631.833-4.688 2.24C10.943 3.832 9.248 3 7.312 3A5.82 5.82 0 001.5 8.813c0 6.562 9.73 11.874 10.145 12.093a.75.75 0 00.71 0c.415-.22 10.145-5.531 10.145-12.093A5.819 5.819 0 0016.687 3zM12 19.387c-1.712-.997-9-5.541-9-10.575A4.318 4.318 0 017.313 4.5c1.823 0 3.354.971 3.993 2.531a.75.75 0 001.388 0c.64-1.563 2.17-2.531 3.993-2.531A4.318 4.318 0 0121 8.813c0 5.025-7.29 9.576-9 10.574z"
                                    fill="#000"></path>
                            </svg>
                        </div>
                    </a>
                    <a href="">
                        <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block h-6 w-6 ">
                            <path
                                d="M29.986 24.765l-1.782-15a2 2 0 00-2-1.765H22a6 6 0 00-12 0H5.791a2 2 0 00-2 1.765l-1.782 15a2 2 0 001.169 2.057c.258.117.539.177.822.178h23.99a2.018 2.018 0 001.51-.675 2 2 0 00.486-1.56zM16 4a4 4 0 014 4h-8a4 4 0 014-4zM4 25l1.791-15H10v3a1 1 0 102 0v-3h8v3a1 1 0 102 0v-3h4.219l1.771 15H4z"
                                fill="#000"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <nav className="flex shrink pl-10 gap-3">
                <a href= '#test'>
                    <div
                        className="px-4 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>WANITA</p>
                    </div>
                </a>
                <a href="">
                    <div
                        className="px-2 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>PRIA</p>
                    </div>
                </a>
                <a href="">
                    <div
                        className="px-4 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>SPORTS</p>
                    </div>
                </a>
                <a href="">
                    <div
                        className="px-4 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>ANAK</p>
                    </div>
                </a>
                <a href="">
                    <div
                        className="px-4 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>LUXURY</p>
                    </div>
                </a>
                <a href="">
                    <div
                        className="px-4 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>BEAUTY</p>
                    </div>
                </a>
                <a href="">
                    <div
                        className="px-4 py-2 font-bold rounded-lg transition ease-in-out duration-300 hover:bg-black hover:text-white">
                        <p>HOME & LIFESTYLE</p>
                    </div>
                </a>
            </nav>
    </header>
    )
}
export default Header;