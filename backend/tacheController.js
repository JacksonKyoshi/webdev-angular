const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

exports.tacheGet = [
    async function (req, res) {
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            let datas = await dbo.collection("taches").find({}).toArray();
            res.status(200).json(datas);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];

exports.statusGet  = [
    async function (req, res) {
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("taches");
        let datas = await dbo.collection("status").find({}).toArray();
        res.status(200).json(datas);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
}
];

exports.tachePost = [
    async function (req, res, next) {
        let tache = req.body;
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("taches").insertOne(tache);
            res.status(200).json(tache);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];


exports.StatusPost = [
    async function (req, res, next) {
        let status = req.body;
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("status").insertOne(status);
            console.log(status);
            res.status(200).json(status);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];


exports.tacheDelete = [
    async function (req, res, next) {
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("taches").deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
            res.status(200).send();
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];

exports.statusDelete = [
    async function (req, res, next) {
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("status").deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
            res.status(200).send();
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];

exports.tachePut = [
    async function (req, res, next) {
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("taches").updateOne({ _id: new mongodb.ObjectId(req.params.id) }, { $set: { titre: req.body.titre, termine: req.body.termine } });
            res.status(200).send();
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];