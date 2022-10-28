import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResidenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContainerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly userName?: string | null;
  readonly Residence?: Residence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userResidenceId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Residence {
  readonly id: string;
  readonly rName?: string | null;
  readonly Places?: (Place | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Residence, ResidenceMetaData>);
  static copyOf(source: Residence, mutator: (draft: MutableModel<Residence, ResidenceMetaData>) => MutableModel<Residence, ResidenceMetaData> | void): Residence;
}

export declare class Place {
  readonly id: string;
  readonly pName?: string | null;
  readonly Containers?: (Container | null)[] | null;
  readonly residenceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class Container {
  readonly id: string;
  readonly cName?: string | null;
  readonly Items?: (Item | null)[] | null;
  readonly placeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Container, ContainerMetaData>);
  static copyOf(source: Container, mutator: (draft: MutableModel<Container, ContainerMetaData>) => MutableModel<Container, ContainerMetaData> | void): Container;
}

export declare class Item {
  readonly id: string;
  readonly description?: string | null;
  readonly iName?: string | null;
  readonly photo?: string | null;
  readonly containerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}