export default () => {
  process.env.TZ = 'UTC';
  // TODO: remove process.env.NODE_ICU_DATA and uninstall full-icu once Vercel and github actions support node 14
  process.env.NODE_ICU_DATA = 'node_modules/full-icu';
};
