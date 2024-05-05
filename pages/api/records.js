import {ObjectId,} from 'mongodb';
import {getCollection} from "@/utils/functions";
import { sendMethodNotAllowed, sendOk } from '@/utils/apiMethods';

const COLLECTION_NAME = 'records';

const getRecords = async () => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.find({}).toArray();
}

const getRecord = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({ _id: ObjectId.createFromHexString(id) });
}

const createRecord = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    const record = await collection.insertOne(data);
}

const updateRecord = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    const id = data._id;
    delete data._id;
    return collection.updateOne({ _id: new ObjectId(id)}, { $set: data });
}

const deleteRecord = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.deleteOne({ _id: ObjectId.createFromHexString(id) });
}

export default async function handler(req, res) {
    const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';

    if (!isAllowedMethod) {
        return sendMethodNotAllowed(res, 'Method not Allowed');
    }

    if (req.method === 'GET' && req.query.id) {
        const record = await getRecord(req.query.id);
        return sendOk(res, record);
    }

    if (req.method === 'GET') {
        const records = await getRecords();
        return sendOk(res, records);
    }

    if (req.method === 'POST') {
        const record = await createRecord(req.body);
        return sendOk(res, record);
    }

    if(req.method === 'PUT') {
        const record = await updateRecord(req.body);
        return sendOk(res, record);
    }

    if (req.method === 'DELETE') {
        const record = await deleteRecord(req.query.id);
        return sendOk(res, record);
    }
}
