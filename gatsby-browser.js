import { wrapRootElement as wrap } from './root-wrapper'

export const wrapRootElement = wrap


// import React from "react";
// import { MDXProvider, mdx} from "@mdx-js/react";
// // import {mdx} from './src/context';
// import Highlight, {
//   defaultProps
// } from "prism-react-renderer";
// import {
//   LiveProvider,
//   LiveEditor,
//   LiveError,
//   LivePreview
// } from "react-live";
// import { preToCodeBlock } from "mdx-utils";
// // import { useMDXComponents } from '@mdx-js/react'
// // import { useMDXScope } from "gatsby-plugin-mdx/context";

// const Code = ({ codeString, language, ...props }) => {
//     // const components = useMDXScope()
//     // const components = useMDXComponents()
//   if (props["react-live"]) {
//     return (
//       <LiveProvider 
//         code={codeString}
//         transformCode={code => `/** @jsx mdx */ ${code}`}
//         scope={{mdx}}
//       >
//         <LiveEditor />
//         <LiveError />
//         <LivePreview />
//       </LiveProvider>
//     );
//   } else {
//     return (
//       <Highlight
//         {...defaultProps}
//         code={codeString}
//         language={language}
//       >
//         {({
//           className,
//           style,
//           tokens,
//           getLineProps,
//           getTokenProps
//         }) => (
//           <pre className={className} style={style}>
//             {tokens.map((line, i) => (
//               <div {...getLineProps({ line, key: i })}>
//                 {line.map((token, key) => (
//                   <span
//                     {...getTokenProps({ token, key })}
//                   />
//                 ))}
//               </div>
//             ))}
//           </pre>
//         )}
//       </Highlight>
//     );
//   }
// };
// // components is its own object outside of render so that the references to
// // components are stable
// const components = {
//   pre: preProps => {
//     const props = preToCodeBlock(preProps);
//     // if there's a codeString and some props, we passed the test
//     if (props) {
//       return <Code {...props} />;
//     } else {
//       // it's possible to have a pre without a code in it
//       return <pre {...preProps} />;
//     }
//   }
// };
// export const wrapRootElement = ({ element }) => {
//   return (
//     <MDXProvider components={components}>
//       {element}
//     </MDXProvider>
//   );
// };