/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateContainer = /* GraphQL */ `
  subscription OnCreateContainer {
    onCreateContainer {
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
export const onUpdateContainer = /* GraphQL */ `
  subscription OnUpdateContainer {
    onUpdateContainer {
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
export const onDeleteContainer = /* GraphQL */ `
  subscription OnDeleteContainer {
    onDeleteContainer {
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
export const onCreateResidence = /* GraphQL */ `
  subscription OnCreateResidence {
    onCreateResidence {
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
export const onUpdateResidence = /* GraphQL */ `
  subscription OnUpdateResidence {
    onUpdateResidence {
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
export const onDeleteResidence = /* GraphQL */ `
  subscription OnDeleteResidence {
    onDeleteResidence {
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserResidence = /* GraphQL */ `
  subscription OnCreateUserResidence {
    onCreateUserResidence {
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
export const onUpdateUserResidence = /* GraphQL */ `
  subscription OnUpdateUserResidence {
    onUpdateUserResidence {
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
export const onDeleteUserResidence = /* GraphQL */ `
  subscription OnDeleteUserResidence {
    onDeleteUserResidence {
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
