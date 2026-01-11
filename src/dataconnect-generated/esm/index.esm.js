import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'vcm-portfolio',
  location: 'us-central1'
};

export const createNewProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewProject', inputVars);
}
createNewProjectRef.operationName = 'CreateNewProject';

export function createNewProject(dcOrVars, vars) {
  return executeMutation(createNewProjectRef(dcOrVars, vars));
}

export const listProjectsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjectsByCategory', inputVars);
}
listProjectsByCategoryRef.operationName = 'ListProjectsByCategory';

export function listProjectsByCategory(dcOrVars, vars) {
  return executeQuery(listProjectsByCategoryRef(dcOrVars, vars));
}

export const updateProjectDescriptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectDescription', inputVars);
}
updateProjectDescriptionRef.operationName = 'UpdateProjectDescription';

export function updateProjectDescription(dcOrVars, vars) {
  return executeMutation(updateProjectDescriptionRef(dcOrVars, vars));
}

export const getUserProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserProjects');
}
getUserProjectsRef.operationName = 'GetUserProjects';

export function getUserProjects(dc) {
  return executeQuery(getUserProjectsRef(dc));
}

