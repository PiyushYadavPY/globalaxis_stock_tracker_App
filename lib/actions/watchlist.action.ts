'use server'

import { Watchlist } from "@/database/models/watchlist.model";
import { connectToDatabase } from "@/database/mongoose";


export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]>{
    if(!email) return [];
    try{
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if(!db) throw new Error('MongoDB connection not found');

        // betterAuth  stores users inthe user collection
        const user = await db.collection('user').findOne<{_id?: unknown; id?: string; email?:string}>({email});

        if(!user) return [];
        const userId = (user.id as string) || String(user._id || '');
        const items = await Watchlist.find({userId}, {symbol:1}).lean();
        return items.map((i) => String(i.symbol));
    }catch(e){
        console.error('getWatchlistSymbolByEmai error', e);
        return [];
    }
}