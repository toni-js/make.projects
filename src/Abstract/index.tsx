export const set: ( path: string, value: any, object: { [ key: string ]: any } ) => any = (path, value, object = {}) => {
  const setPath: ( path: string[], value: any, object: { [ key: string ]: any } ) => any = ([key, ...next], value, object) => ({ ...object, [ key ]: next.length ? setPath(next, value, object[key]) : value })
  return setPath(path.split(/\./gi), value, object)
}

export const get: ( path: string, object: { [ key: string ]: any } ) => any = ( path, object = {}) => {
  const getPath: ( path: string[], object: { [ key: string ]: any } ) => any = ( [key, ...next], object ) => next.length ? getPath( next, object[key] ) : object[key]
  return getPath(path.split(/\./gi), object)
}