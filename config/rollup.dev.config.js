import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.umd.js",
      format: "umd",
      sourcemap: true,
      name: "TicketmasterPrism",
      globals: {
        react: "React",
        "prop-types": "PropTypes",
        "styled-components": "styled",
        classnames: "classNames"
      }
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    babel({
      presets: [["env", { modules: false }], "react"],
      plugins: [
        "transform-object-rest-spread",
        "transform-class-properties",
        "external-helpers"
      ],
      babelrc: false
    })
  ],
  external: ["react", "prop-types", "styled-components", "classnames"]
};
