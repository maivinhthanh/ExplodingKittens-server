import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

const connectDB = (config_url: string): Promise<Mongoose> => {
  return new Promise<Mongoose>((resolve, reject) => {
    if (!config_url) {
      return reject(new Error('Missing MongoDB configuration!'));
    }

    try {
      const options: ConnectOptions = {};

      console.log('Trying to connect DB...', config_url);

      mongoose.connect(config_url, options);
    } catch (e) {
      console.log('catch e', e);
    }
  });
};

const init = () => {
  var c1 = new Promise<void>((resolve, reject) => {
    const uri = process.env.DB_CONN_STRING || "mongodb+srv://pheninketonieu:12345654321@cluster0.jxptydv.mongodb.net/explodingkittens?retryWrites=true&w=majority";
    connectDB(uri)
      .then((client) => {
        resolve();
      })
      .catch((e) => {
        console.error('connectDB error', e);
        reject(e);
      });
  });

  return Promise.all([c1]).then(() => {
    console.log('-- db ready --');
  });
};

export {
  init,
  connectDB
};
