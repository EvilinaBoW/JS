const builder = () => ({
  config: {},
  set: key => value => { builder.config[key] = value; return builder; },
  build: () => ({ ...builder.config })
});