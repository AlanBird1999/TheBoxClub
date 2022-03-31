// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Container, Residence, User, Place, UserResidence } = initSchema(schema);

export {
  Item,
  Container,
  Residence,
  User,
  Place,
  UserResidence
};