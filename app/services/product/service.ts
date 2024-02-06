import Logger, {ILogger} from '../../modals/logger';
import store from '../../store/provider';
import {setProduct, setProducts} from '../../store/slices/product/slice';

export default class ProductsService {
  logger: ILogger;
  baseUrl: string = 'https://dummyjson.com/products';

  constructor(key: string) {
    this.logger = new Logger(`${key}/ProductService`);
  }

  async getProducts() {
    try {
      const url = `${this.baseUrl}?_=${Date.now()}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        store.dispatch(setProducts(data));
        return data;
      }
    } catch (e) {
      this.logger.error(`Error while getting products: ${e}`);
    }
  }

  async getProduct(input: number) {
    try {
      const url = `${this.baseUrl}/${input}?_=${Date.now()}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        store.dispatch(setProduct(data));
        return data;
      }
    } catch (e) {
      this.logger.error(`Error while getting product: ${e}`);
    }
  }
}
