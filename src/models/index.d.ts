import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContainerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResidenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserResidenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Item {
  readonly id: string;
  readonly Description?: string | null;
  readonly iName: string;
  readonly Photo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Container {
  readonly id: string;
  readonly Place?: string | null;
  readonly placeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Container, ContainerMetaData>);
  static copyOf(source: Container, mutator: (draft: MutableModel<Container, ContainerMetaData>) => MutableModel<Container, ContainerMetaData> | void): Container;
}

export declare class Residence {
  readonly id: string;
  readonly rName?: string | null;
  readonly users?: (UserResidence | null)[] | null;
  readonly Place?: Place | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly residencePlaceId?: string | null;
  constructor(init: ModelInit<Residence, ResidenceMetaData>);
  static copyOf(source: Residence, mutator: (draft: MutableModel<Residence, ResidenceMetaData>) => MutableModel<Residence, ResidenceMetaData> | void): Residence;
}

export declare class User {
  readonly id: string;
  readonly UserName?: string | null;
  readonly Residences?: (UserResidence | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Place {
  readonly id: string;
  readonly pName: string;
  readonly Containers?: (Container | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class UserResidence {
  readonly id: string;
  readonly residence: Residence;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserResidence, UserResidenceMetaData>);
  static copyOf(source: UserResidence, mutator: (draft: MutableModel<UserResidence, UserResidenceMetaData>) => MutableModel<UserResidence, UserResidenceMetaData> | void): UserResidence;
}