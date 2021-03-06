import { Api } from '@chainlink/json-api-client'
import { Balances } from './balances'

export class User {
  constructor(private api: Api) {}

  public balances = new Balances(this.api)
}
