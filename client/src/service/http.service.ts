import axios, { Axios } from 'axios';
import BASE_URL from '../consts/base-url';
import { INewProduct } from '../interfaces/newProduct.interface';
import { IFormValues } from '../interfaces/formValues.interface';

interface IConfig {
  url: string;
  id?: string;
  ids?: string[];
  data?: INewProduct | IFormValues;
}

class HttpService {
  baseUrl: string | undefined;
  apiVersion: string;
  fetchingService: Axios;

  constructor({
    baseUrl = BASE_URL,
    apiVersion = 'api',
    fetchingService = axios,
  } = {}) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService;
  }

  private getFullApiUrl(config: IConfig) {
    if (config.id) {
      return `${this.baseUrl}/${this.apiVersion}/${config.url}/${config.id}`;
    } else {
      return `${this.baseUrl}/${this.apiVersion}/${config.url}`;
    }
  }

  async get(config: IConfig) {
    return this.fetchingService.get(this.getFullApiUrl(config));
  }

  async post(config: IConfig) {
    return this.fetchingService.post(this.getFullApiUrl(config), config.data);
  }

  async delete(config: IConfig) {
    return await this.fetchingService.post(this.getFullApiUrl(config), {
      ids: config.ids,
    });
  }
}

export default HttpService;
