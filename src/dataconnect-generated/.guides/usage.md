# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateNewProject, useListProjectsByCategory, useUpdateProjectDescription, useGetUserProjects } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateNewProject(createNewProjectVars);

const { data, isPending, isSuccess, isError, error } = useListProjectsByCategory(listProjectsByCategoryVars);

const { data, isPending, isSuccess, isError, error } = useUpdateProjectDescription(updateProjectDescriptionVars);

const { data, isPending, isSuccess, isError, error } = useGetUserProjects();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createNewProject, listProjectsByCategory, updateProjectDescription, getUserProjects } from '@dataconnect/generated';


// Operation CreateNewProject:  For variables, look at type CreateNewProjectVars in ../index.d.ts
const { data } = await CreateNewProject(dataConnect, createNewProjectVars);

// Operation ListProjectsByCategory:  For variables, look at type ListProjectsByCategoryVars in ../index.d.ts
const { data } = await ListProjectsByCategory(dataConnect, listProjectsByCategoryVars);

// Operation UpdateProjectDescription:  For variables, look at type UpdateProjectDescriptionVars in ../index.d.ts
const { data } = await UpdateProjectDescription(dataConnect, updateProjectDescriptionVars);

// Operation GetUserProjects: 
const { data } = await GetUserProjects(dataConnect);


```