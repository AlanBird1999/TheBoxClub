/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItemInput = {
  id?: string | null,
  Description?: string | null,
  iName: string,
  Photo?: string | null,
  _version?: number | null,
};

export type ModelItemConditionInput = {
  Description?: ModelStringInput | null,
  iName?: ModelStringInput | null,
  Photo?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  Description?: string | null,
  iName: string,
  Photo?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateItemInput = {
  id: string,
  Description?: string | null,
  iName?: string | null,
  Photo?: string | null,
  _version?: number | null,
};

export type DeleteItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateContainerInput = {
  id?: string | null,
  Place?: string | null,
  placeID: string,
  _version?: number | null,
};

export type ModelContainerConditionInput = {
  Place?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelContainerConditionInput | null > | null,
  or?: Array< ModelContainerConditionInput | null > | null,
  not?: ModelContainerConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Container = {
  __typename: "Container",
  id: string,
  Place?: string | null,
  placeID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateContainerInput = {
  id: string,
  Place?: string | null,
  placeID?: string | null,
  _version?: number | null,
};

export type DeleteContainerInput = {
  id: string,
  _version?: number | null,
};

export type CreateResidenceInput = {
  id?: string | null,
  rName?: string | null,
  _version?: number | null,
  residencePlaceId?: string | null,
};

export type ModelResidenceConditionInput = {
  rName?: ModelStringInput | null,
  and?: Array< ModelResidenceConditionInput | null > | null,
  or?: Array< ModelResidenceConditionInput | null > | null,
  not?: ModelResidenceConditionInput | null,
  residencePlaceId?: ModelIDInput | null,
};

export type Residence = {
  __typename: "Residence",
  id: string,
  rName?: string | null,
  users?: ModelUserResidenceConnection | null,
  Place?: Place | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  residencePlaceId?: string | null,
};

export type ModelUserResidenceConnection = {
  __typename: "ModelUserResidenceConnection",
  items:  Array<UserResidence | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserResidence = {
  __typename: "UserResidence",
  id: string,
  residenceID: string,
  userID: string,
  residence: Residence,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  UserName?: string | null,
  Residences?: ModelUserResidenceConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Place = {
  __typename: "Place",
  id: string,
  pName: string,
  Containers?: ModelContainerConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelContainerConnection = {
  __typename: "ModelContainerConnection",
  items:  Array<Container | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateResidenceInput = {
  id: string,
  rName?: string | null,
  _version?: number | null,
  residencePlaceId?: string | null,
};

export type DeleteResidenceInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlaceInput = {
  id?: string | null,
  pName: string,
  _version?: number | null,
};

export type ModelPlaceConditionInput = {
  pName?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceInput = {
  id: string,
  pName?: string | null,
  _version?: number | null,
};

export type DeletePlaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  UserName?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  UserName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  UserName?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserResidenceInput = {
  id?: string | null,
  residenceID: string,
  userID: string,
  _version?: number | null,
};

export type ModelUserResidenceConditionInput = {
  residenceID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserResidenceConditionInput | null > | null,
  or?: Array< ModelUserResidenceConditionInput | null > | null,
  not?: ModelUserResidenceConditionInput | null,
};

export type UpdateUserResidenceInput = {
  id: string,
  residenceID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteUserResidenceInput = {
  id: string,
  _version?: number | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  Description?: ModelStringInput | null,
  iName?: ModelStringInput | null,
  Photo?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelContainerFilterInput = {
  id?: ModelIDInput | null,
  Place?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelContainerFilterInput | null > | null,
  or?: Array< ModelContainerFilterInput | null > | null,
  not?: ModelContainerFilterInput | null,
};

export type ModelResidenceFilterInput = {
  id?: ModelIDInput | null,
  rName?: ModelStringInput | null,
  and?: Array< ModelResidenceFilterInput | null > | null,
  or?: Array< ModelResidenceFilterInput | null > | null,
  not?: ModelResidenceFilterInput | null,
  residencePlaceId?: ModelIDInput | null,
};

export type ModelResidenceConnection = {
  __typename: "ModelResidenceConnection",
  items:  Array<Residence | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  pName?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  UserName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserResidenceFilterInput = {
  id?: ModelIDInput | null,
  residenceID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserResidenceFilterInput | null > | null,
  or?: Array< ModelUserResidenceFilterInput | null > | null,
  not?: ModelUserResidenceFilterInput | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateContainerMutationVariables = {
  input: CreateContainerInput,
  condition?: ModelContainerConditionInput | null,
};

export type CreateContainerMutation = {
  createContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateContainerMutationVariables = {
  input: UpdateContainerInput,
  condition?: ModelContainerConditionInput | null,
};

export type UpdateContainerMutation = {
  updateContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteContainerMutationVariables = {
  input: DeleteContainerInput,
  condition?: ModelContainerConditionInput | null,
};

export type DeleteContainerMutation = {
  deleteContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateResidenceMutationVariables = {
  input: CreateResidenceInput,
  condition?: ModelResidenceConditionInput | null,
};

export type CreateResidenceMutation = {
  createResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type UpdateResidenceMutationVariables = {
  input: UpdateResidenceInput,
  condition?: ModelResidenceConditionInput | null,
};

export type UpdateResidenceMutation = {
  updateResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type DeleteResidenceMutationVariables = {
  input: DeleteResidenceInput,
  condition?: ModelResidenceConditionInput | null,
};

export type DeleteResidenceMutation = {
  deleteResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserResidenceMutationVariables = {
  input: CreateUserResidenceInput,
  condition?: ModelUserResidenceConditionInput | null,
};

export type CreateUserResidenceMutation = {
  createUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserResidenceMutationVariables = {
  input: UpdateUserResidenceInput,
  condition?: ModelUserResidenceConditionInput | null,
};

export type UpdateUserResidenceMutation = {
  updateUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserResidenceMutationVariables = {
  input: DeleteUserResidenceInput,
  condition?: ModelUserResidenceConditionInput | null,
};

export type DeleteUserResidenceMutation = {
  deleteUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      Description?: string | null,
      iName: string,
      Photo?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncItemsQuery = {
  syncItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      Description?: string | null,
      iName: string,
      Photo?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetContainerQueryVariables = {
  id: string,
};

export type GetContainerQuery = {
  getContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListContainersQueryVariables = {
  filter?: ModelContainerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContainersQuery = {
  listContainers?:  {
    __typename: "ModelContainerConnection",
    items:  Array< {
      __typename: "Container",
      id: string,
      Place?: string | null,
      placeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncContainersQueryVariables = {
  filter?: ModelContainerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncContainersQuery = {
  syncContainers?:  {
    __typename: "ModelContainerConnection",
    items:  Array< {
      __typename: "Container",
      id: string,
      Place?: string | null,
      placeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetResidenceQueryVariables = {
  id: string,
};

export type GetResidenceQuery = {
  getResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type ListResidencesQueryVariables = {
  filter?: ModelResidenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResidencesQuery = {
  listResidences?:  {
    __typename: "ModelResidenceConnection",
    items:  Array< {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncResidencesQueryVariables = {
  filter?: ModelResidenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncResidencesQuery = {
  syncResidences?:  {
    __typename: "ModelResidenceConnection",
    items:  Array< {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlacesQuery = {
  syncPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserResidenceQueryVariables = {
  id: string,
};

export type GetUserResidenceQuery = {
  getUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserResidencesQueryVariables = {
  filter?: ModelUserResidenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserResidencesQuery = {
  listUserResidences?:  {
    __typename: "ModelUserResidenceConnection",
    items:  Array< {
      __typename: "UserResidence",
      id: string,
      residenceID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserResidencesQueryVariables = {
  filter?: ModelUserResidenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserResidencesQuery = {
  syncUserResidences?:  {
    __typename: "ModelUserResidenceConnection",
    items:  Array< {
      __typename: "UserResidence",
      id: string,
      residenceID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    Description?: string | null,
    iName: string,
    Photo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateContainerSubscription = {
  onCreateContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateContainerSubscription = {
  onUpdateContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteContainerSubscription = {
  onDeleteContainer?:  {
    __typename: "Container",
    id: string,
    Place?: string | null,
    placeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateResidenceSubscription = {
  onCreateResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type OnUpdateResidenceSubscription = {
  onUpdateResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type OnDeleteResidenceSubscription = {
  onDeleteResidence?:  {
    __typename: "Residence",
    id: string,
    rName?: string | null,
    users?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Place?:  {
      __typename: "Place",
      id: string,
      pName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    residencePlaceId?: string | null,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    pName: string,
    Containers?:  {
      __typename: "ModelContainerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    UserName?: string | null,
    Residences?:  {
      __typename: "ModelUserResidenceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserResidenceSubscription = {
  onCreateUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserResidenceSubscription = {
  onUpdateUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserResidenceSubscription = {
  onDeleteUserResidence?:  {
    __typename: "UserResidence",
    id: string,
    residenceID: string,
    userID: string,
    residence:  {
      __typename: "Residence",
      id: string,
      rName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      residencePlaceId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      UserName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
