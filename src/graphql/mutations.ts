/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      Description
      iName
      Photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      Description
      iName
      Photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      Description
      iName
      Photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContainer = /* GraphQL */ `
  mutation CreateContainer(
    $input: CreateContainerInput!
    $condition: ModelContainerConditionInput
  ) {
    createContainer(input: $input, condition: $condition) {
      id
      Place
      placeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContainer = /* GraphQL */ `
  mutation UpdateContainer(
    $input: UpdateContainerInput!
    $condition: ModelContainerConditionInput
  ) {
    updateContainer(input: $input, condition: $condition) {
      id
      Place
      placeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContainer = /* GraphQL */ `
  mutation DeleteContainer(
    $input: DeleteContainerInput!
    $condition: ModelContainerConditionInput
  ) {
    deleteContainer(input: $input, condition: $condition) {
      id
      Place
      placeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createResidence = /* GraphQL */ `
  mutation CreateResidence(
    $input: CreateResidenceInput!
    $condition: ModelResidenceConditionInput
  ) {
    createResidence(input: $input, condition: $condition) {
      id
      rName
      users {
        nextToken
        startedAt
      }
      Place {
        id
        pName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      residencePlaceId
    }
  }
`;
export const updateResidence = /* GraphQL */ `
  mutation UpdateResidence(
    $input: UpdateResidenceInput!
    $condition: ModelResidenceConditionInput
  ) {
    updateResidence(input: $input, condition: $condition) {
      id
      rName
      users {
        nextToken
        startedAt
      }
      Place {
        id
        pName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      residencePlaceId
    }
  }
`;
export const deleteResidence = /* GraphQL */ `
  mutation DeleteResidence(
    $input: DeleteResidenceInput!
    $condition: ModelResidenceConditionInput
  ) {
    deleteResidence(input: $input, condition: $condition) {
      id
      rName
      users {
        nextToken
        startedAt
      }
      Place {
        id
        pName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      residencePlaceId
    }
  }
`;
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
      id
      pName
      Containers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
      id
      pName
      Containers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
      id
      pName
      Containers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      UserName
      Residences {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      UserName
      Residences {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      UserName
      Residences {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserResidence = /* GraphQL */ `
  mutation CreateUserResidence(
    $input: CreateUserResidenceInput!
    $condition: ModelUserResidenceConditionInput
  ) {
    createUserResidence(input: $input, condition: $condition) {
      id
      residenceID
      userID
      residence {
        id
        rName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        residencePlaceId
      }
      user {
        id
        UserName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserResidence = /* GraphQL */ `
  mutation UpdateUserResidence(
    $input: UpdateUserResidenceInput!
    $condition: ModelUserResidenceConditionInput
  ) {
    updateUserResidence(input: $input, condition: $condition) {
      id
      residenceID
      userID
      residence {
        id
        rName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        residencePlaceId
      }
      user {
        id
        UserName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserResidence = /* GraphQL */ `
  mutation DeleteUserResidence(
    $input: DeleteUserResidenceInput!
    $condition: ModelUserResidenceConditionInput
  ) {
    deleteUserResidence(input: $input, condition: $condition) {
      id
      residenceID
      userID
      residence {
        id
        rName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        residencePlaceId
      }
      user {
        id
        UserName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
