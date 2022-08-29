import IORedis from 'ioredis';

export default class Redis {
  private static instance: IORedis.Redis;
  //singleton
  private constructor() { };

  static async getInstance() {
    if (!Redis.instance) {
      const redis = new Redis();
      Redis.instance = await redis.openConnection();
    };

    return Redis.instance;
  };

  private async openConnection() {
    try {
      return await IORedis(process.env.REDIS_URL, {
        tls: {
          rejectUnauthorized: false
        }
      });
    } catch (error) {
      throw new Error(`Erro ao conectar (REDIS)`);
    };
  };
};