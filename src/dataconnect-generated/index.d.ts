import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateNewProjectData {
  project_insert: Project_Key;
}

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

export interface GetUserProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    status: string;
  } & Project_Key)[];
}

export interface Idea_Key {
  id: UUIDString;
  __typename?: 'Idea_Key';
}

export interface ListProjectsByCategoryData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    status: string;
  } & Project_Key)[];
}

export interface ListProjectsByCategoryVariables {
  categoryId: UUIDString;
}

export interface Media_Key {
  id: UUIDString;
  __typename?: 'Media_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface UpdateProjectDescriptionData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectDescriptionVariables {
  id: UUIDString;
  description: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
  operationName: string;
}
export const createNewProjectRef: CreateNewProjectRef;

export function createNewProject(vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;
export function createNewProject(dc: DataConnect, vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface ListProjectsByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListProjectsByCategoryVariables): QueryRef<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListProjectsByCategoryVariables): QueryRef<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;
  operationName: string;
}
export const listProjectsByCategoryRef: ListProjectsByCategoryRef;

export function listProjectsByCategory(vars: ListProjectsByCategoryVariables): QueryPromise<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;
export function listProjectsByCategory(dc: DataConnect, vars: ListProjectsByCategoryVariables): QueryPromise<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;

interface UpdateProjectDescriptionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
  operationName: string;
}
export const updateProjectDescriptionRef: UpdateProjectDescriptionRef;

export function updateProjectDescription(vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
export function updateProjectDescription(dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

interface GetUserProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserProjectsData, undefined>;
  operationName: string;
}
export const getUserProjectsRef: GetUserProjectsRef;

export function getUserProjects(): QueryPromise<GetUserProjectsData, undefined>;
export function getUserProjects(dc: DataConnect): QueryPromise<GetUserProjectsData, undefined>;

