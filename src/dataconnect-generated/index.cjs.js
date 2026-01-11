const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'vcm-portfolio',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createNewProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewProject', inputVars);
}
createNewProjectRef.operationName = 'CreateNewProject';
exports.createNewProjectRef = createNewProjectRef;

exports.createNewProject = function createNewProject(dcOrVars, vars) {
  return executeMutation(createNewProjectRef(dcOrVars, vars));
};

const listProjectsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjectsByCategory', inputVars);
}
listProjectsByCategoryRef.operationName = 'ListProjectsByCategory';
exports.listProjectsByCategoryRef = listProjectsByCategoryRef;

exports.listProjectsByCategory = function listProjectsByCategory(dcOrVars, vars) {
  return executeQuery(listProjectsByCategoryRef(dcOrVars, vars));
};

const updateProjectDescriptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectDescription', inputVars);
}
updateProjectDescriptionRef.operationName = 'UpdateProjectDescription';
exports.updateProjectDescriptionRef = updateProjectDescriptionRef;

exports.updateProjectDescription = function updateProjectDescription(dcOrVars, vars) {
  return executeMutation(updateProjectDescriptionRef(dcOrVars, vars));
};

const getUserProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserProjects');
}
getUserProjectsRef.operationName = 'GetUserProjects';
exports.getUserProjectsRef = getUserProjectsRef;

exports.getUserProjects = function getUserProjects(dc) {
  return executeQuery(getUserProjectsRef(dc));
};
