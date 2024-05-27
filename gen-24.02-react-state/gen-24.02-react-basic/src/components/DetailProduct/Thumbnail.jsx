import { useState } from "react";
import { toRupiah } from "../../utils/formatter";

const Thumbnail = ({product}) => {

    const details = product.find(obj => obj.id === 5) ;

    const [thumbnailMain, setThumbnailMain] = useState(details.img[0]);

    const ClickedThumbnail = (image) => {
        setThumbnailMain(image);
      };

    return (
        <div className="grid grid-cols-2 gap-5 mt-40 mx-auto">
            <div className="flex flex-col items-center pr-[20%]">
                <div className="flex">
                    <ul className="flex gap-2 items-center text-xs text-gray-500">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block   !h-3 !w-3">
                            <path
                                d="M4.719 3.95L2.185 1.887a.5.5 0 01.63-.776l3 2.44a.5.5 0 01.01.768l-3 2.56a.5.5 0 11-.65-.76L4.72 3.95z"
                                fill="#474747"></path>
                        </svg>
                        <li>
                            <a href="">Sports</a>
                        </li>
                        <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block   !h-3 !w-3">
                            <path
                                d="M4.719 3.95L2.185 1.887a.5.5 0 01.63-.776l3 2.44a.5.5 0 01.01.768l-3 2.56a.5.5 0 11-.65-.76L4.72 3.95z"
                                fill="#474747"></path>
                        </svg>
                        <li>
                            <a href="">Pria</a>
                        </li>
                        <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block   !h-3 !w-3">
                            <path
                                d="M4.719 3.95L2.185 1.887a.5.5 0 01.63-.776l3 2.44a.5.5 0 01.01.768l-3 2.56a.5.5 0 11-.65-.76L4.72 3.95z"
                                fill="#474747"></path>
                        </svg>
                        <li>
                            <a className="text-black" href="">Sneakers</a>
                        </li>
                    </ul>
                </div>
                <div key={product.id} className="w-[25rem] rounded-2xl p-1 shadow-lg">
                    <img class="main-img" 
                    // src={details.img[0]}
                    src={thumbnailMain} 
                    alt="gambar-1" className="h-full w-full p-10 hover:scale-105"/>
                </div>
                <div className="flex w-[30rem] justify-center gap-3 mt-5">
                {details.img.map((image) => (
                    <div
                    className="hidden md:inline-block w-[4.5rem] rounded-2xl p-1 shadow-lg hover:shadow-2xl">
                    <img
                        class="scnd-img"
                        src={image}
                        alt="image-small"
                        onClick={() => ClickedThumbnail(image)}
                        className="h-full w-full p-1"
                          />
                </div>
                ))}
                </div>
            </div>
            <div>
            <div className="flex flex-col">
                <div className="flex flex-col items-start">
                    <h2 className="font-medium text-[24px]">{details.brand}</h2>
                    <p className="font-lighter">{details.fullName}</p>
                </div>
                <div className="flex items-center border text-rose-700 border-rose-700 font-bold rounded-lg px-2 text-lg w-40 my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block fill-current h-6 w-6"><path d="M2.514 5.76a.27.27 0 0 1 .19-.08h18.462a.27.27 0 0 1 .27.27v2.385a.27.27 0 0 1-.215.263 3.578 3.578 0 0 0 0 7.011.27.27 0 0 1 .215.263v2.386a.27.27 0 0 1-.27.269H2.705a.27.27 0 0 1-.27-.27v-2.385a.27.27 0 0 1 .215-.263 3.578 3.578 0 0 0 0-7.01.27.27 0 0 1-.214-.263V5.95a.27.27 0 0 1 .078-.19m.19-1.08a1.27 1.27 0 0 0-1.268 1.27v2.385A1.27 1.27 0 0 0 2.45 9.578a2.578 2.578 0 0 1 0 5.051 1.27 1.27 0 0 0-1.015 1.243v2.386a1.27 1.27 0 0 0 1.269 1.269h18.461a1.27 1.27 0 0 0 1.27-1.27v-2.385a1.27 1.27 0 0 0-1.016-1.243 2.578 2.578 0 0 1 0-5.05 1.27 1.27 0 0 0 1.015-1.244V5.95a1.27 1.27 0 0 0-1.269-1.27zm7.083 7.135c-.512 0-.948-.164-1.286-.502A1.7 1.7 0 0 1 8 10.071c0-.49.163-.905.501-1.243s.774-.501 1.286-.501c.513 0 .938.163 1.276.501.337.338.512.752.512 1.243 0 .49-.175.905-.512 1.242-.338.338-.763.502-1.276.502m0-2.453c-.207 0-.381.066-.5.207-.23.262-.23.742 0 1.014.119.13.293.196.5.196q.312 0 .49-.196c.252-.272.252-.752 0-1.014-.119-.141-.282-.207-.49-.207m4.425 6.769c-.512 0-.948-.164-1.286-.502a1.7 1.7 0 0 1-.5-1.242c0-.49.163-.905.5-1.243.338-.338.774-.5 1.287-.5s.937.162 1.275.5.512.752.512 1.243c0 .49-.174.905-.512 1.242-.338.338-.763.502-1.275.502Zm0-2.453c-.207 0-.38.066-.5.208-.23.261-.23.74 0 1.013.12.131.293.196.5.196q.312 0 .491-.196c.25-.272.25-.752 0-1.013-.12-.142-.283-.207-.49-.207Zm-4.719 2.78-.785-.632L14.572 8l.785.621z" clip-rule="evenodd"></path></svg>
                    <p className="pl-2">{toRupiah(details.discPrice)}</p>
                </div>
                <div className="flex gap-3 mb-3 w-[30rem]">
                    <p className="font-bold text-lg">Dari {toRupiah(details.price)}</p>
                    <p className="font-bold">-{details.disc}%</p>
                </div>
                <div className="flex gap-2 w-[30rem]">
                    <div className="flex bg-cyan-50 rounded-lg p-1.5 w-full">
                        <div className="w-auto">
                            <div className="flex">
                                <div className="bg-cyan-100 text-cyan-700 rounded-lg w-36 justify-center items-center flex text-[12px] font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block fill-current h-6 w-6"><path d="M2.514 5.76a.27.27 0 0 1 .19-.08h18.462a.27.27 0 0 1 .27.27v2.385a.27.27 0 0 1-.215.263 3.578 3.578 0 0 0 0 7.011.27.27 0 0 1 .215.263v2.386a.27.27 0 0 1-.27.269H2.705a.27.27 0 0 1-.27-.27v-2.385a.27.27 0 0 1 .215-.263 3.578 3.578 0 0 0 0-7.01.27.27 0 0 1-.214-.263V5.95a.27.27 0 0 1 .078-.19m.19-1.08a1.27 1.27 0 0 0-1.268 1.27v2.385A1.27 1.27 0 0 0 2.45 9.578a2.578 2.578 0 0 1 0 5.051 1.27 1.27 0 0 0-1.015 1.243v2.386a1.27 1.27 0 0 0 1.269 1.269h18.461a1.27 1.27 0 0 0 1.27-1.27v-2.385a1.27 1.27 0 0 0-1.016-1.243 2.578 2.578 0 0 1 0-5.05 1.27 1.27 0 0 0 1.015-1.244V5.95a1.27 1.27 0 0 0-1.269-1.27zm7.083 7.135c-.512 0-.948-.164-1.286-.502A1.7 1.7 0 0 1 8 10.071c0-.49.163-.905.501-1.243s.774-.501 1.286-.501c.513 0 .938.163 1.276.501.337.338.512.752.512 1.243 0 .49-.175.905-.512 1.242-.338.338-.763.502-1.276.502m0-2.453c-.207 0-.381.066-.5.207-.23.262-.23.742 0 1.014.119.13.293.196.5.196q.312 0 .49-.196c.252-.272.252-.752 0-1.014-.119-.141-.282-.207-.49-.207m4.425 6.769c-.512 0-.948-.164-1.286-.502a1.7 1.7 0 0 1-.5-1.242c0-.49.163-.905.5-1.243.338-.338.774-.5 1.287-.5s.937.162 1.275.5.512.752.512 1.243c0 .49-.174.905-.512 1.242-.338.338-.763.502-1.275.502Zm0-2.453c-.207 0-.38.066-.5.208-.23.261-.23.74 0 1.013.12.131.293.196.5.196q.312 0 .491-.196c.25-.272.25-.752 0-1.013-.12-.142-.283-.207-.49-.207Zm-4.719 2.78-.785-.632L14.572 8l.785.621z" clip-rule="evenodd"></path></svg>
                                    <p className="pl-2">DISKON TERBAIK</p>
                                </div>
                                <div className="font-bold flex text-sm text-cyan-900 pl-2">
                                <p>22% off + 1% Cashback</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-cyan-700 text-[12px] items-end">
                                    <p><span className="font-semibold">22SHOES|</span> Min. pembelian Rp399.000, maks. <br/> potongan Rp400.000. Berlaku hingga 16.05.2024</p>
                                    <p className="font-bold underline pl-5 text-sm">S&K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto bg-cyan-50 rounded-lg text-center text-cyan-700 p-2">
                        <p className="font-bold">+1 lagi</p>
                        <p className="text-xs underline">Lihat semua</p>
                    </div>
                </div>
                <div className="flex mt-8 items-start">
                    <p className="font-bold">Variasi <span className="font-normal text-sm text-gray-500 "> Forest/Olive</span></p>
                </div>
                <div className="border border-black rounded-lg p-1 w-14 mt-3">
                    <img src={details.variant} alt="variasi" className="object-cover"/>
                </div>
                <div className="flex justify-between mt-10 w-auto sm:w-[30rem]">
                    <p className="font-bold text-lg">Ukuran</p>
                    <div className="flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 "><path fill-rule="evenodd" clip-rule="evenodd" d="M21.544 10.257a.377.377 0 00-.358-.015c-.011.007-.566.28-1.8.584V7.252c.022-.091.033-.186.033-.28 0-.68-.639-1.198-1.902-1.541C16.495 5.153 15.075 5 13.527 5c-2.514 0-5.03.387-6.899 1.059-2.248.81-3.493 1.996-3.617 3.446A.398.398 0 003 9.598v6.564c0 .04.007.08.022.12.025.073.288.748 1.49 1.395 1.525.82 3.85 1.237 6.906 1.237 7.227 0 9.998-1.402 10.111-1.46a.364.364 0 00.197-.325v-6.563a.384.384 0 00-.182-.31zm-10.13 1.365c-1.796 0-3.176-.154-4.223-.365V9.625c.146.058.31.11.5.153.61.143 1.463.216 2.47.216 1.932 0 4.191-.27 5.9-.709 1.172-.299 2.037-.657 2.599-1.065v2.774c-1.573.321-3.931.628-7.246.628zm-3.227-4.15c-.606.244-.927.59-1 1.083h.004v.234c.09.088.602.449 2.77.47h.336l.018-2.145c-.89.025-1.606.146-2.128.357zm-1.31-.724c1.796-.646 4.22-1.014 6.65-1.014 3.468 0 5.115.719 5.162 1.219h-.033v.193c-.124.318-.57.595-.85.741-.599.318-1.482.606-2.548.836-1.3.281-2.818.468-4.235.522l.022-2.496a.361.361 0 00-.106-.26.365.365 0 00-.259-.11c-1.157 0-2.091.14-2.77.417-.672.274-1.471.84-1.471 1.986 0 .05.007.102.014.153v2.15a7.819 7.819 0 01-1.496-.555c-.822-.416-1.128-.832-1.223-.989.095-.836.744-1.931 3.143-2.793zm13.006 10.513c.544-.15.905-.284 1.106-.368h-.011v-5.775c-1.114.409-4.034 1.234-9.579 1.234-3.055 0-5.38-.416-6.906-1.238a4.775 4.775 0 01-.778-.514v5.479c.019.033.052.084.099.146v-.752c0-.201.164-.365.365-.365.2 0 .365.164.365.365v1.383c.117.077.252.154.405.23.292.146.665.303 1.136.45V15.71c0-.2.164-.365.365-.365.2 0 .365.164.365.365v1.931a.368.368 0 01-.011.091c.507.12 1.102.223 1.8.303v-1.434c0-.201.164-.365.364-.365.201 0 .365.164.365.365v1.504c.584.047 1.23.073 1.942.076a.306.306 0 01-.014-.098v-1.37c0-.2.164-.364.365-.364.2 0 .365.164.365.365v1.369a.398.398 0 01-.011.095c.693-.008 1.34-.026 1.942-.059V16.713c0-.2.164-.364.365-.364.2 0 .365.164.365.365v1.361c.708-.047 1.347-.11 1.927-.182V16.52c0-.2.165-.365.365-.365.201 0 .365.165.365.365v1.274a23.182 23.182 0 001.844-.343v-1.825c0-.2.164-.365.365-.365.2 0 .365.164.365.365v1.635z" fill="#262626"></path></svg>
                        <p className="text-xs underline pl-2">Panduan Ukuran </p><span className="font-medium text-green-600 text-xs px-1 ml-2 rounded bg-lime-300">BARU</span>
                    </div>
                </div>
                <div className="flex gap-5 mt-2 w-[30rem]">
                    <a href="">
                        <p className="hover:underline underline-offset-8 decoration-2 hover:font-medium transition duration-300">EU</p>
                    </a>
                    <a href="">
                        <p className="hover:underline underline-offset-8 decoration-2 hover:font-medium transition duration-300">UK</p>
                    </a>
                    <a href="">
                        <p className="hover:underline underline-offset-8 decoration-2 hover:font-medium transition duration-300">US</p>
                    </a>
                </div>
                <div className="mt-5 flex gap-3 w-[30rem]">
                    {details.size.map((size) =>(
                        <a href="">
                        <div className="flex border border-black rounded-lg w-14 h-8 justify-center items-center hover:bg-gray-100">
                            <p>{size}</p>
                        </div>
                    </a>
                    ) )}
                </div>
                <div className="my-10 flex gap-3">
                    <a href="">
                        <div className="bg-neutral-800 text-white w-96 h-12 items-center justify-center sm:flex hidden rounded-lg transition duration-300 hover:bg-neutral-600">
                            <p className="font-light">Masukkan ke Tas</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="rounded-lg border border-black h-12 w-20 justify-center items-center sm:flex hidden hover:bg-gray-100">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 !size-8 cursor-pointer"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.308 8.335c1.68-1.666 3.691-2.219 5.9-1.571 2.168.635 3.57 2.147 4.13 4.394.058.229.082.409.122.802l.012.127.028.279c-.039 1.496-.545 2.874-1.502 4.4-1.454 2.318-3.335 4.298-6.147 6.683-.362.306-.666.549-1.317 1.058l-.031.025c-.454.356-.665.522-.916.727-.375.305-.767.329-1.162.027-3.318-2.532-5.666-4.724-7.574-7.255-1.107-1.467-1.826-2.832-2.196-4.323-.805-3.25 1.625-6.761 4.946-7.141 1.989-.228 3.692.368 5.086 1.786.16.163.228.246.296.248.072 0 .145-.087.325-.266zm9.196 4.083a10.708 10.708 0 01-.04-.361 4.378 4.378 0 00-.095-.658c-.477-1.907-1.621-3.142-3.441-3.676-1.853-.543-3.49-.093-4.915 1.322-.74.735-1.317.744-2.04.01-1.176-1.199-2.574-1.688-4.258-1.495-2.721.312-4.75 3.243-4.09 5.907.334 1.345.993 2.594 2.024 3.962 1.836 2.435 4.11 4.56 7.339 7.028.244-.198.459-.368.898-.712l.032-.025c.64-.502.938-.74 1.287-1.034 2.74-2.324 4.557-4.237 5.946-6.451.87-1.387 1.316-2.602 1.353-3.817z" fill="#737373"></path></svg>
                        </div>
                    </a>
                </div>
                <div className="border rounded-lg text-sm py-5 px-4 w-auto sm:w-[30rem]">
                    <h2 className="text-lg font-bold pb-4">Pengiriman</h2>
                    <p className="text-cyan-700">Pilih lokasi <span className="text-black"> untuk mendapatkan waktu dan harga pengiriman</span></p>
                </div>
                <div className="flex justify-between text-sm font-bold w-auto sm:w-[30rem] mt-10">
                    <p>Mengapa anda akan suka belanja di ZALORA</p>
                    <p className="font-light underline">Pelajari lebih lanjut</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-3 w-auto sm:w-[30rem]">
                    <div className=" justify-start rounded-2xl bg-yellow-100 w-full h-28 pl-3 pt-3 text-neutral-700 text-sm font-medium">
                        <span>100% produk asli</span>
                        <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block relative left-4 h-24 w-32"><path d="M78.734 24.427l-47.68-12.775a4.3 4.3 0 00-3.28.442 4.378 4.378 0 00-2.02 2.649l-4.734 17.67C13.91 58.941 33.807 73.707 37.868 76.396a4.13 4.13 0 002.592.695c4.873-.305 29.475-3.139 36.583-29.668l4.735-17.67a4.377 4.377 0 00-.425-3.303 4.3 4.3 0 00-2.62-2.024zm-5.268 22.045C67.02 70.524 44.663 73.1 40.246 73.37a.474.474 0 01-.333-.09c-3.69-2.441-21.764-15.853-15.319-39.905l4.736-17.675a.625.625 0 01.289-.378.614.614 0 01.468-.063l47.68 12.775a.615.615 0 01.374.29.625.625 0 01.06.471l-4.735 17.676zm-10.044-7.525a1.876 1.876 0 01-.683 2.55l-21.2 12.364a1.844 1.844 0 01-2.527-.677l-5.218-9.132a1.877 1.877 0 01.715-2.493 1.843 1.843 0 012.495.62l4.3 7.507 19.593-11.425a1.843 1.843 0 012.527.677l-.002.009z" fill="#FEF2CE" className="fill-[#FFEFBF]"></path></svg>
                    </div>
                    <div className="justify-start rounded-2xl bg-green-100 w-full h-28 pl-3 pt-3 text-neutral-700 text-sm font-medium -z-50">
                        <span className=" z-50">30 hari pengembalian/penu <br/>karan gratis</span>
                        <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg" className=" opacity-55 -z-10 inline-block relative left-12 bottom-10 h-24 w-20"><path fill-rule="evenodd" clip-rule="evenodd" d="M78.272 29.913a1.096 1.096 0 01.417-1.466 1.047 1.047 0 011.445.41 38.036 38.036 0 014.403 18.836 37.688 37.688 0 01-6.826 20.628c-11.988 17.137-35.596 21.313-52.733 9.326C7.839 65.66 3.664 42.05 15.652 24.913a37.722 37.722 0 0112.676-11.428C40.753 6.615 56.082 7.2 68 15.322l-7.616-7.616a.772.772 0 011.092-1.092l10.65 10.65L57.23 18.34a.78.78 0 01-.113-1.555l8.286-.6c-11.028-6.793-24.794-7.047-36.04-.828a35.58 35.58 0 00-11.958 10.781c-11.31 16.17-7.371 38.446 8.799 49.754 16.169 11.31 38.443 7.37 49.754-8.799a35.549 35.549 0 006.44-19.46 35.896 35.896 0 00-4.126-17.721zm-10.17-13.921l.53-.039-.296-.295-.233.334z" fill="#D4EBCE" stroke="#D4EBCE" stroke-width="1.25" stroke-linejoin="round"></path><path d="M68.004 33.503l-19.05-10.43a3.01 3.01 0 00-2.909 0l-19.05 10.43a3.031 3.031 0 00-1.575 2.656v20.703a3.031 3.031 0 001.576 2.656l19.05 10.43a3.014 3.014 0 002.909 0l19.05-10.43a3.031 3.031 0 001.575-2.656V36.16a3.031 3.031 0 00-1.576-2.656zm-20.72-8.152a.434.434 0 01.415 0l18.095 9.903-7.347 4.02L40.151 29.26l7.132-3.91zM46.2 67.075l-17.967-9.834a.433.433 0 01-.216-.379v-19.3L46.2 47.519v19.556zm-16.995-31.82l8.241-4.514 18.294 10.014-8.241 4.509-18.294-10.01zm37.776 21.607a.433.433 0 01-.216.38l-17.967 9.833v-19.56l7.793-4.267v8.458a1.299 1.299 0 102.598 0v-9.878l7.792-4.266v19.3z" fill="#D4EBCE"></path></svg>
                    </div>
                    <div className=" justify-start rounded-2xl bg-blue-100 w-full h-28 pl-3 pt-3 text-neutral-700 text-sm font-medium">
                        <span>pengiriman cepat</span>
                        <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block relative left-2 h-24 w-32"><path d="M81.56 49.56A1.5 1.5 0 0080.5 47H68l-2-12.5a1.5 1.5 0 10-3 0l2 14a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.06-.44z" fill="#CBE4E6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M52.333 27.297A25.5 25.5 0 0166.5 23 25.53 25.53 0 0192 48.5a25.5 25.5 0 01-44.997 16.436 1.48 1.48 0 01-.432.064H15.225c-.39 0-.764-.153-1.04-.426a1.447 1.447 0 010-2.057c.276-.273.65-.426 1.04-.426h29.699a25.5 25.5 0 01-3-6.788H3.47c-.39 0-.763-.153-1.039-.426a1.447 1.447 0 010-2.057c.276-.273.65-.426 1.04-.426H41.3a25.497 25.497 0 01-.135-6.788H17.184c-.39 0-.764-.153-1.04-.426a1.447 1.447 0 010-2.057c.276-.273.65-.426 1.04-.426h24.485a25.495 25.495 0 012.656-6.788H3.47c-.39 0-.763-.153-1.039-.426a1.447 1.447 0 010-2.057c.276-.273.65-.426 1.04-.426h42.782a25.499 25.499 0 016.081-5.703zm-8.146 18.31h4.344c.39 0 .763-.154 1.039-.427a1.447 1.447 0 000-2.057 1.477 1.477 0 00-1.04-.426h-3.769A22.5 22.5 0 0189 48.5 22.525 22.525 0 0166.5 71a22.5 22.5 0 01-21.447-15.697h1.518c.39 0 .764-.153 1.04-.426a1.447 1.447 0 000-2.057 1.477 1.477 0 00-1.04-.426H44.34a22.5 22.5 0 01-.153-6.788z" fill="#CBE4E6"></path></svg>
                    </div>
                </div>
                <div className="w-40 mt-10">
                    <div className="flex justify-center font-bold underline underline-offset-8 decoration-2">
                        <p>Informasi Produk</p>
                    </div>
                </div>
                <div className="font-bold mt-8 pl-4 w-auto sm:w-[30rem]">
                    <div>
                        <p>Bahan & Perawatan</p>
                    </div>
                    <div className="flex justify-between">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block   !h-5 !w-5"><path d="M23.014 11.772c-.032-.073-.812-1.803-2.554-3.545-1.616-1.614-4.393-3.54-8.46-3.54-4.067 0-6.844 1.926-8.46 3.54-1.742 1.742-2.522 3.47-2.554 3.545a.562.562 0 000 .458c.032.072.812 1.802 2.554 3.543 1.616 1.615 4.393 3.54 8.46 3.54 4.067 0 6.844-1.925 8.46-3.54 1.742-1.741 2.522-3.468 2.554-3.543a.562.562 0 000-.458zM12 18.187c-2.942 0-5.51-1.07-7.636-3.18A12.636 12.636 0 012.127 12a12.615 12.615 0 012.237-3.006C6.489 6.884 9.058 5.813 12 5.813s5.51 1.07 7.636 3.181A12.616 12.616 0 0121.873 12c-.598 1.145-3.592 6.188-9.873 6.188zm0-10.5a4.312 4.312 0 100 8.625 4.312 4.312 0 000-8.625zm0 7.5a3.187 3.187 0 110-6.374 3.187 3.187 0 010 6.374z" fill="#000"></path></svg>
                        <p className="text-sm">Petunjuk perawatan</p>
                        <p className="font-normal text-sm">Simpan di dalam kotak dengan gel silica</p>
                    </div>
                    <div>
                        <p>Rincian</p>
                    </div>
                    <div className="text-sm flex">
                        <p>SKU</p> <span className="font-normal">: E6B33SH0503329GS</span>
                    </div>
                    <div className="text-sm flex">
                        <p>Warna</p> <span className="font-normal">: Forest/Olive</span>
                    </div>
                    <div className="text-sm flex">
                        <p>Material Atas</p> <span className="font-normal">: Kanvas</span>
                    </div>
                    <div className="text-sm flex">
                        <p>Material Bagian Dalam</p> <span className="font-normal">: Tekstil</span>
                    </div>
                    <div className="text-sm flex">
                        <p>Material Sol</p> <span className="font-normal">: Rubber</span>
                    </div>
                    <div className="text-sm flex">
                        <p>Pengikat</p> <span className="font-normal">: Tali</span>
                    </div>
                </div>
                <div className="w-[30rem] mb-20 mt-10">
                    <div className="font-bold text-lg">
                        <p>Penilaian & Ulasan</p>
                    </div>
                    <div className="flex justify-start gap-2 items-center">
                        <p className="font-semibold text-3xl">5/5</p>
                        <span className="inline-flex gap-1" data-testid="star-rating"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block   !h-6 !w-6"><path d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z" fill="#FBC622"></path></svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block   !h-6 !w-6"><path d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z" fill="#FBC622"></path></svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block   !h-6 !w-6"><path d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z" fill="#FBC622"></path></svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block   !h-6 !w-6"><path d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z" fill="#FBC622"></path></svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block   !h-6 !w-6"><path d="M5.131 4.86L.389 5.87l-.08.024a.481.481 0 00-.183.773l3.232 3.554-.488 4.745-.001.083a.494.494 0 00.69.41L8 13.534l4.44 1.923.08.027a.49.49 0 00.61-.52l-.49-4.744 3.234-3.554.051-.067a.483.483 0 00-.314-.73l-4.743-1.01L8.426.74a.498.498 0 00-.852 0L5.13 4.86z" fill="#FBC622"></path></svg></span>
                        <p className="text-sm">(3 ulasan)</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}
export default Thumbnail;