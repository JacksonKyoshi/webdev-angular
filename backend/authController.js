const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";



exports.signin = [
    async function (req, res) {
        let user = req.body.login;
        let password = req.body.password;
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("user").insertOne(
                {
                    "login": user,
                    "password": password
                }
            );
            res.status(200).end();
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
]

exports.Register = [
    async function (req, res, next) {
        let user = req.body;
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            await dbo.collection("user").insertOne(user);
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];


exports.UserGet = [
    async function (req, res) {
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            let datas = await dbo.collection("user").find({}).toArray();
            console.log(datas)
            res.status(200).json(datas);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];

exports.LogUser = [

    async function (req, res) {
        res.status(200).json(req.session.user)
    }
];


exports.login = [
    async function (req, res) {
        let user = req.body.login;
        let password = req.body.password;
        try {
            db = await MongoClient.connect(url);
            let dbo = db.db("taches");
            let datas = await dbo.collection("user").find({}).toArray();
            let result = datas.filter(function (data) {
                {

                    if (data.login === user && data.password === password) {
                        return true
                    } else {
                        return false;
                    }


                }
            }
            )
            console.log(result);
            if (result.length != 0) {
                req.session.user = req.body.login;
                res.status(200).end();
            }
            else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err })
        }
    }
];

exports.isConnected = [
    async function (req, res) {
        res.status(200).end();
    }
];

exports.logout = [
    async function (req, res) {
        if (req.session)
            await req.session.destroy();
        res.status(200).end();
    }
];
