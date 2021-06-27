const extendClassName = (baseClassName, extension) => {
  return extension ? `${baseClassName} ${extension}` : baseClassName;
}

export default extendClassName;
