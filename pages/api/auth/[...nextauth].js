
 
import clientPromise from "@/lib/mongodb"; 
import { MongoDBAdapter } from "@auth/mongodb-adapter"; 
import NextAuth, { getServerSession } from "next-auth/next"; 
import GoogleProvider from "next-auth/providers/google" 
 
 
 
import {Admin} from "@/models/Admin";
import {mongooseConnect} from "@/lib/mongoose";
async function isAdminEmail(email) {
    await mongooseConnect();
    return !! (await Admin.findOne({email}));
}


export const authOptions = { 
    // Configure one or more authentication provider 
 
    providers: [ 
        GoogleProvider({ 
            clientId: process.env.GOOGLE_ID, 
            clientSecret: process.env.GOOGLE_SECRET, 
        }), 
 
    ], 
    adapter: MongoDBAdapter(clientPromise), 
    callbacks: { 
        session: async ({session,token,user}) => { 
            if (await isAdminEmail(session?.user?.email)) { 
                return session; 
            } else { 
                return false; 
            } 
 
        }, 
    }, 
} 
 
export default NextAuth(authOptions); 
 
 
export async function isAdminRequest(req,res) {
    const session = await getServerSession(req,res,authOptions);
    if (!(await isAdminEmail(session?.user?.email))) {
        res.status(401);
        res.end();
        throw 'not an admin'
    }
}