import IORedis from 'ioredis';
import Redis from '../connections/Redis';

export default class CacheRepository {
  private readonly redis: Promise<IORedis.Redis>;

  constructor(){
    this.redis = Redis.getInstance();
  };

  async save(key:string, value:any){
    return await (await this.redis).set(key, JSON.stringify(value));
  };

  async find(key:string){
    const value = await (await this.redis).get(key);

    return value ? JSON.parse(value) : value;
  };

  async delete(key:string){
    const value = await (await this.redis).del(key);
    return value !== 0;
  };
};