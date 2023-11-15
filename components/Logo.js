import Link from "next/link";

const ImageLink = 'https://imgtr.ee/images/2023/11/10/9a7c4ac4d231994e5c7c8a2920fa5fd4.png';


export default function Logo() {
    return (
        <Link href={'/'} className="flex gap-3 items-center">
         <img src={ImageLink} width={50} height={50} ></img>
        <span className="font-bold text-gray-800 text-lg">
            Yutaka Admin
        </span>
        
        </Link>

        

    );
}

