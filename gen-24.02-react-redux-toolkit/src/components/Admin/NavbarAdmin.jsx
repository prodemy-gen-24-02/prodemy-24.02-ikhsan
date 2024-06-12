import { Link } from "react-router-dom";

const NavbarAdmin = () => {
    return (
        <>
            <div className="w-full shadow flex justify-center py-2 fixed bg-neutral-50">
                <div className="my-auto">
                    <Link to="/admin">
                    <svg
                        width="176"
                        height="20"
                        viewBox="0 0 110 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="tablet:w-44">
                        <g clipPath="url(#clip0_107_2042)">
                            <path
                                d="M0.512094 0.177185V1.28652H10.8843L0 13.3805V13.8232H13.2653V12.7132H2.31333L13.1927 0.702518L13.1884 0.177185H0.512094Z"
                                fill="#262626"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.9124 13.8228L25.8274 0.0787964H26.6251L33.5409 13.8228H32.0587L29.7297 9.18546H22.7228L20.3945 13.8228H18.9124ZM29.1756 8.07546L26.2156 2.18746L23.2776 8.07546H29.1756Z"
                                fill="#262626"></path>
                            <path
                                d="M40.3733 0.177185V13.8232H49.0518V12.7132H41.7856V0.177185H40.3733Z"
                                fill="#262626"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M55.2698 6.99979C55.2698 3.07445 58.7383 -0.000213623 63.1663 -0.000213623C67.6184 -0.000213623 71.1062 3.07445 71.1062 6.99979C71.1062 10.9251 67.6184 13.9998 63.1663 13.9998C58.7383 13.9998 55.2698 10.9251 55.2698 6.99979ZM56.7683 6.99979C56.7683 10.2478 59.598 12.7918 63.2097 12.7918C66.7972 12.7918 69.6077 10.2478 69.6077 6.99979C69.6077 3.75245 66.7972 1.20845 63.2097 1.20845C59.598 1.20845 56.7683 3.75245 56.7683 6.99979Z"
                                fill="#262626"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M87.9211 3.75812C87.9211 5.28279 87.0344 6.38812 85.2844 7.04412C85.8813 7.42412 86.4062 8.10479 87.0571 8.99479L90.5143 13.8228H88.8548L86.2495 10.0921C84.5323 7.62946 83.9988 7.39746 82.2667 7.39746H80.4177V13.8228H79.0054V0.176788H82.9134C86.0486 0.176788 87.9211 1.51546 87.9211 3.75812ZM82.6762 1.28679H80.4177V6.28746H82.7189C85.1071 6.28746 86.4225 5.39612 86.4225 3.77745C86.4225 2.17146 85.0921 1.28679 82.6762 1.28679Z"
                                fill="#262626"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M101.971 0.0783997H102.768L109.683 13.8231H108.201L105.873 9.18573H98.8661L96.5378 13.8231H95.0549L101.971 0.0783997ZM99.4202 8.07573H105.318L102.359 2.18707L99.4202 8.07573Z"
                                fill="#262626"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_107_2042">
                                <rect width="110" height="14" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    </Link>
                </div>
            </div>
            
        </>

    )
}
export default NavbarAdmin;