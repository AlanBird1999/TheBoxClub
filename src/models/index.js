// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Container, Residence, Place, User } = initSchema(schema);

export {
  Item,
  Container,
  Residence,
  Place,
  User
};