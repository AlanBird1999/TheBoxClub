/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getContainer = /* GraphQL */ `
  query GetContainer($id: ID!) {
    getContainer(id: $id) {
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
export const listContainers = /* GraphQL */ `
  query ListContainers(
    $filter: ModelContainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Place
        placeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContainers = /* GraphQL */ `
  query SyncContainers(
    $filter: ModelContainerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContainers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Place
        placeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getResidence = /* GraphQL */ `
  query GetResidence($id: ID!) {
    getResidence(id: $id) {
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
export const listResidences = /* GraphQL */ `
  query ListResidences(
    $filter: ModelResidenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResidences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        residencePlaceId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResidences = /* GraphQL */ `
  query SyncResidences(
    $filter: ModelResidenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResidences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        rName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        residencePlaceId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlaces = /* GraphQL */ `
  query SyncPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UserName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserResidence = /* GraphQL */ `
  query GetUserResidence($id: ID!) {
    getUserResidence(id: $id) {
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
export const listUserResidences = /* GraphQL */ `
  query ListUserResidences(
    $filter: ModelUserResidenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserResidences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        residenceID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserResidences = /* GraphQL */ `
  query SyncUserResidences(
    $filter: ModelUserResidenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserResidences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        residenceID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
