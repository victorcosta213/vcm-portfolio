# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProjectsByCategory*](#listprojectsbycategory)
  - [*GetUserProjects*](#getuserprojects)
- [**Mutations**](#mutations)
  - [*CreateNewProject*](#createnewproject)
  - [*UpdateProjectDescription*](#updateprojectdescription)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProjectsByCategory
You can execute the `ListProjectsByCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProjectsByCategory(vars: ListProjectsByCategoryVariables): QueryPromise<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;

interface ListProjectsByCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListProjectsByCategoryVariables): QueryRef<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;
}
export const listProjectsByCategoryRef: ListProjectsByCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProjectsByCategory(dc: DataConnect, vars: ListProjectsByCategoryVariables): QueryPromise<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;

interface ListProjectsByCategoryRef {
  ...
  (dc: DataConnect, vars: ListProjectsByCategoryVariables): QueryRef<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;
}
export const listProjectsByCategoryRef: ListProjectsByCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProjectsByCategoryRef:
```typescript
const name = listProjectsByCategoryRef.operationName;
console.log(name);
```

### Variables
The `ListProjectsByCategory` query requires an argument of type `ListProjectsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListProjectsByCategoryVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that executing the `ListProjectsByCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProjectsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProjectsByCategoryData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    status: string;
  } & Project_Key)[];
}
```
### Using `ListProjectsByCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProjectsByCategory, ListProjectsByCategoryVariables } from '@dataconnect/generated';

// The `ListProjectsByCategory` query requires an argument of type `ListProjectsByCategoryVariables`:
const listProjectsByCategoryVars: ListProjectsByCategoryVariables = {
  categoryId: ..., 
};

// Call the `listProjectsByCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProjectsByCategory(listProjectsByCategoryVars);
// Variables can be defined inline as well.
const { data } = await listProjectsByCategory({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProjectsByCategory(dataConnect, listProjectsByCategoryVars);

console.log(data.projects);

// Or, you can use the `Promise` API.
listProjectsByCategory(listProjectsByCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `ListProjectsByCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProjectsByCategoryRef, ListProjectsByCategoryVariables } from '@dataconnect/generated';

// The `ListProjectsByCategory` query requires an argument of type `ListProjectsByCategoryVariables`:
const listProjectsByCategoryVars: ListProjectsByCategoryVariables = {
  categoryId: ..., 
};

// Call the `listProjectsByCategoryRef()` function to get a reference to the query.
const ref = listProjectsByCategoryRef(listProjectsByCategoryVars);
// Variables can be defined inline as well.
const ref = listProjectsByCategoryRef({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProjectsByCategoryRef(dataConnect, listProjectsByCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

## GetUserProjects
You can execute the `GetUserProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserProjects(): QueryPromise<GetUserProjectsData, undefined>;

interface GetUserProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserProjectsData, undefined>;
}
export const getUserProjectsRef: GetUserProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserProjects(dc: DataConnect): QueryPromise<GetUserProjectsData, undefined>;

interface GetUserProjectsRef {
  ...
  (dc: DataConnect): QueryRef<GetUserProjectsData, undefined>;
}
export const getUserProjectsRef: GetUserProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserProjectsRef:
```typescript
const name = getUserProjectsRef.operationName;
console.log(name);
```

### Variables
The `GetUserProjects` query has no variables.
### Return Type
Recall that executing the `GetUserProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    status: string;
  } & Project_Key)[];
}
```
### Using `GetUserProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserProjects } from '@dataconnect/generated';


// Call the `getUserProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
getUserProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `GetUserProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserProjectsRef } from '@dataconnect/generated';


// Call the `getUserProjectsRef()` function to get a reference to the query.
const ref = getUserProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewProject
You can execute the `CreateNewProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewProject(vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface CreateNewProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
}
export const createNewProjectRef: CreateNewProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewProject(dc: DataConnect, vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface CreateNewProjectRef {
  ...
  (dc: DataConnect, vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
}
export const createNewProjectRef: CreateNewProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewProjectRef:
```typescript
const name = createNewProjectRef.operationName;
console.log(name);
```

### Variables
The `CreateNewProject` mutation requires an argument of type `CreateNewProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewProjectVariables {
  title: string;
  description: string;
  status: string;
  categoryId?: UUIDString | null;
  userId?: UUIDString | null;
  behanceLink?: string | null;
  githubLink?: string | null;
  liveDemoLink?: string | null;
  thumbnailUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewProjectData {
  project_insert: Project_Key;
}
```
### Using `CreateNewProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewProject, CreateNewProjectVariables } from '@dataconnect/generated';

// The `CreateNewProject` mutation requires an argument of type `CreateNewProjectVariables`:
const createNewProjectVars: CreateNewProjectVariables = {
  title: ..., 
  description: ..., 
  status: ..., 
  categoryId: ..., // optional
  userId: ..., // optional
  behanceLink: ..., // optional
  githubLink: ..., // optional
  liveDemoLink: ..., // optional
  thumbnailUrl: ..., // optional
};

// Call the `createNewProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewProject(createNewProjectVars);
// Variables can be defined inline as well.
const { data } = await createNewProject({ title: ..., description: ..., status: ..., categoryId: ..., userId: ..., behanceLink: ..., githubLink: ..., liveDemoLink: ..., thumbnailUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewProject(dataConnect, createNewProjectVars);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
createNewProject(createNewProjectVars).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `CreateNewProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewProjectRef, CreateNewProjectVariables } from '@dataconnect/generated';

// The `CreateNewProject` mutation requires an argument of type `CreateNewProjectVariables`:
const createNewProjectVars: CreateNewProjectVariables = {
  title: ..., 
  description: ..., 
  status: ..., 
  categoryId: ..., // optional
  userId: ..., // optional
  behanceLink: ..., // optional
  githubLink: ..., // optional
  liveDemoLink: ..., // optional
  thumbnailUrl: ..., // optional
};

// Call the `createNewProjectRef()` function to get a reference to the mutation.
const ref = createNewProjectRef(createNewProjectVars);
// Variables can be defined inline as well.
const ref = createNewProjectRef({ title: ..., description: ..., status: ..., categoryId: ..., userId: ..., behanceLink: ..., githubLink: ..., liveDemoLink: ..., thumbnailUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewProjectRef(dataConnect, createNewProjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## UpdateProjectDescription
You can execute the `UpdateProjectDescription` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProjectDescription(vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

interface UpdateProjectDescriptionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
}
export const updateProjectDescriptionRef: UpdateProjectDescriptionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProjectDescription(dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

interface UpdateProjectDescriptionRef {
  ...
  (dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
}
export const updateProjectDescriptionRef: UpdateProjectDescriptionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProjectDescriptionRef:
```typescript
const name = updateProjectDescriptionRef.operationName;
console.log(name);
```

### Variables
The `UpdateProjectDescription` mutation requires an argument of type `UpdateProjectDescriptionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProjectDescriptionVariables {
  id: UUIDString;
  description: string;
}
```
### Return Type
Recall that executing the `UpdateProjectDescription` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProjectDescriptionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProjectDescriptionData {
  project_update?: Project_Key | null;
}
```
### Using `UpdateProjectDescription`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProjectDescription, UpdateProjectDescriptionVariables } from '@dataconnect/generated';

// The `UpdateProjectDescription` mutation requires an argument of type `UpdateProjectDescriptionVariables`:
const updateProjectDescriptionVars: UpdateProjectDescriptionVariables = {
  id: ..., 
  description: ..., 
};

// Call the `updateProjectDescription()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProjectDescription(updateProjectDescriptionVars);
// Variables can be defined inline as well.
const { data } = await updateProjectDescription({ id: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProjectDescription(dataConnect, updateProjectDescriptionVars);

console.log(data.project_update);

// Or, you can use the `Promise` API.
updateProjectDescription(updateProjectDescriptionVars).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

### Using `UpdateProjectDescription`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProjectDescriptionRef, UpdateProjectDescriptionVariables } from '@dataconnect/generated';

// The `UpdateProjectDescription` mutation requires an argument of type `UpdateProjectDescriptionVariables`:
const updateProjectDescriptionVars: UpdateProjectDescriptionVariables = {
  id: ..., 
  description: ..., 
};

// Call the `updateProjectDescriptionRef()` function to get a reference to the mutation.
const ref = updateProjectDescriptionRef(updateProjectDescriptionVars);
// Variables can be defined inline as well.
const ref = updateProjectDescriptionRef({ id: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProjectDescriptionRef(dataConnect, updateProjectDescriptionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

