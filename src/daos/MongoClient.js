import mongoose from "mongoose";

export default class MongoClient {
    constructor() {
        this.connected = true
        this.client = mongoose
    }

    connect = async() => {
        try {
            await this.client.connect('mongodb://localhost:27017/clase15')
        } catch(err) {
            throw new Error('cannot connect to database')
        }
    }
}