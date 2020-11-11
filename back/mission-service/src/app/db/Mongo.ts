import {Db, MongoClient} from 'mongodb'

interface Response {
	db: Db;
	client: MongoClient;
}
const url = 'mongodb://' + process.env.MONGO_HOST ?? "localhost" + ':' + process.env.MONGO_PORT ?? "27017"


function connect() : Promise<Response> {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		  }, function(err, client) {
			if(err !== null) reject(err)
			const db = client.db(process.env.MONGO_DB);

			resolve({client, db})
		});
	})
}

function insertMany<T>(name: string, data: T[]) : Promise<any>  {
	return new Promise((resolve, reject) => {
		const insertDocuments = function(db: Db, callback: (data: any) => void) {
			// Get the documents collection
			const collection = db.collection(name);
			// Insert some documents
			collection.insertMany(data, function(err, result) {
				if(err !== null) reject(err)
				callback(result);
			});
		}
		
		connect().then((res: Response) => {
			insertDocuments(res.db, (result: any) => {
				resolve(result)
				res.client.close()
			})
		}).catch(err => {
			reject(err)
		})
	})
}

function insertOne<T>(name: string, data: T) : Promise<any> {
	return new Promise((resolve, reject) => {
		const insertDocuments = function(db: Db, callback: (data: any) => void) {
			// Get the documents collection
			const collection = db.collection(name);
			// Insert some documents
			collection.insertOne(data, function(err, result) {
				if(err !== null) reject(err)
				callback(result);
			});
		}
		connect().then((res: Response) => {
			insertDocuments(res.db, (result: any) => {
				resolve(result)
				res.client.close()
			})
		}).catch(err => {
			reject(err)
		})
	})
}

function find<T>(name: string, conditionnal: Object = {}, sort: any = {}) : Promise<T[]> {
	return new Promise((resolve, reject) => {
		const getDocuments = function(db: Db, callback: (data: T[]) => void) {
			// Get the documents collection
			const collection = db.collection(name);
			
			collection.find(conditionnal).sort(sort).toArray(function(err, docs) {
				if(err !== null) reject(err)
				callback(docs)
			})
		}
		connect().then((res: Response) => {
			getDocuments(res.db, (result: T[]) => {
				resolve(result)
				res.client.close()
			})
		}).catch(err => {
			reject(err)
		})
	})
}

function removeMany<T>(name: string, conditionnal: Object = {}) : Promise<any> {
	return new Promise((resolve, reject) => {
		const getDocuments = function(db: Db, callback: (data: any) => void) {
			// Get the documents collection
			const collection = db.collection(name);

			collection.deleteMany(conditionnal, function(err, result) {
				if(err !== null) reject(err)
				callback(result);
			});
		}
		connect().then((res: Response) => {
			getDocuments(res.db, (result: any) => {
				resolve(result)
				res.client.close()
			})
		}).catch(err => {
			reject(err)
		})
	})
}

function removeOne<T>(name: string, conditionnal: Object = {}) : Promise<any> {
	return new Promise((resolve, reject) => {
		const getDocuments = function(db: Db, callback: (data: any) => void) {
			// Get the documents collection
			const collection = db.collection(name);

			collection.deleteOne(conditionnal, function(err, result) {
				if(err !== null) reject(err)
				callback(result);
			});
		}
		connect().then((res: Response) => {
			getDocuments(res.db, (result: any) => {
				resolve(result)
				res.client.close()
			})
		}).catch(err => {
			reject(err)
		})
	})
}

function update(name: string, set: Object = {}, conditionnal: Object = {}) : Promise<any> {
	return new Promise((resolve, reject) => {
		const getDocuments = function(db: Db, callback: (data: any) => void) {
			// Get the documents collection
			const collection = db.collection(name);

			collection.updateOne(conditionnal, { $set: set }, function(err, result) {
				if(err !== null) reject(err)
				callback(result);
			});
		}
		connect().then((res: Response) => {
			getDocuments(res.db, (result: any) => {
				resolve(result)
				res.client.close()
			})
		}).catch(err => {
			reject(err)
		})
	})
}


export {connect, insertMany, insertOne, find, removeOne, removeMany, update};