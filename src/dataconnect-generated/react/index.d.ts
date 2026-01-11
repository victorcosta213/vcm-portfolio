import { CreateNewProjectData, CreateNewProjectVariables, ListProjectsByCategoryData, ListProjectsByCategoryVariables, UpdateProjectDescriptionData, UpdateProjectDescriptionVariables, GetUserProjectsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewProject(options?: useDataConnectMutationOptions<CreateNewProjectData, FirebaseError, CreateNewProjectVariables>): UseDataConnectMutationResult<CreateNewProjectData, CreateNewProjectVariables>;
export function useCreateNewProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewProjectData, FirebaseError, CreateNewProjectVariables>): UseDataConnectMutationResult<CreateNewProjectData, CreateNewProjectVariables>;

export function useListProjectsByCategory(vars: ListProjectsByCategoryVariables, options?: useDataConnectQueryOptions<ListProjectsByCategoryData>): UseDataConnectQueryResult<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;
export function useListProjectsByCategory(dc: DataConnect, vars: ListProjectsByCategoryVariables, options?: useDataConnectQueryOptions<ListProjectsByCategoryData>): UseDataConnectQueryResult<ListProjectsByCategoryData, ListProjectsByCategoryVariables>;

export function useUpdateProjectDescription(options?: useDataConnectMutationOptions<UpdateProjectDescriptionData, FirebaseError, UpdateProjectDescriptionVariables>): UseDataConnectMutationResult<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
export function useUpdateProjectDescription(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectDescriptionData, FirebaseError, UpdateProjectDescriptionVariables>): UseDataConnectMutationResult<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

export function useGetUserProjects(options?: useDataConnectQueryOptions<GetUserProjectsData>): UseDataConnectQueryResult<GetUserProjectsData, undefined>;
export function useGetUserProjects(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserProjectsData>): UseDataConnectQueryResult<GetUserProjectsData, undefined>;
