export const loadCitiesRequest = UFCode => ({
  type: '@cities/LOAD_REQUEST',
  payload: { UFCode },
})

export const loadCitiesSuccess = data => ({
  type: '@cities/LOAD_SUCCESS',
  payload: { data },
});

export const loadCitiesFailure = () => ({
  type: '@cities/LOAD_FAILURE',
});

export const loadDataProgramRequest = idCity => ({
  type: '@cities/LOAD_DATA_PROGRAM_REQUEST',
  payload: { idCity },
});

export const loadDataProgramSuccess = dataProgram => ({
  type: '@cities/LOAD_DATA_PROGRAM_SUCCESS',
  payload: { dataProgram },
});

export const loadDataProgramFailure = errorMessageDataProgram => ({
  type: '@cities/LOAD_DATA_PROGRAM_Failure',
  payload: { errorMessageDataProgram },
});
