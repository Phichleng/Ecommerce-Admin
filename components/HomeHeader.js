import {useSession} from "next-auth/react";
import { MdOutlineNotificationsNone } from 'react-icons/md';


export default function HomeHeader() {
    const {data:session} = useSession();
    return (
        <div className="">
            <div className="justify-start inline-block">
                <h2 className="mt-3">
                <div className="flex gap-2 items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={session?.user?.image} alt="" className="w-6 h-6 rounded-md sm:hidden"/>
                    <div>
                        Welcome, <b>{session?.user?.name}</b>
                    </div>
                </div>
                </h2>
            </div>
            
        </div>

        

            

           
        
    );
}