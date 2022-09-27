// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Residence, Place, Container, Item } = initSchema(schema);

export {
  User,
  Residence,
  Place,
  Container,
  Item
};