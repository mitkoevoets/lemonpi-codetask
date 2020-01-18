// // import hexRgb from 'hex-rgb';
// import ReactDOMServer from 'react-dom/server';
// import React from 'react';
// import { basicTmplate } from 'app/containers/LightingModeller/ReportTemplates/Basic';
// //
// export function renderTemplate({}) {
//   return ReactDOMServer.renderToStaticMarkup(
//     React.createElement(basicTmplate, {}),
//   );
// }
//
// //
// export async function renderPDF(html: string) {
//
//   // // pass the html string as data text/html so we don't have to visit a url
//   // await page.goto(`data text/html,${html}`, { waitUntil: 'networkidle0' });
//   // const pdf = await page.pdf({ format: 'A4' });
//   // await browser.close();
//   // return pdf;
// }
// //
// // export function hexToRgb(str: string) {
// //   const hexTest = /#[a-f\d]{3,6}/gim;
// //   return str.replace(hexTest, (hexColor: string) => {
// //     const { red, green, blue } = hexRgb(hexColor);
// //     return `rgb(${red}, ${green}, ${blue})`;
// //   });
// // }
// //
// // // Questions have different answer types and should use different types of charts depending on template
// // // const chartMappers = {
// // //   scale: {
// // //     summary: (responses) => createGroupedBar(responses),
// // //     periodic: (responses) => createPeriodicLine(responses)
// // //   },
// // //   single: {...},
// // //   multi: {...},
// // //   scale: {...},
// // //   text: {...}
// // // }
// // // const templateMappers = {
// // //   summary: periods => mergePeriods(periods),
// // //   periodic: periods => flattenPeriods(periods)
// // // }
// // function mapSurveyToCharts({ survey: string, template }) {
// //   return {
// //     questions: survey.questions.map(question => {
// //       const responses = tempateMappers[template](question.periods)
// //       const chart = chartMappers[question.Type][template](responses)
// //       return {
// //         name: question.Title,
// //         chart: chart
// //       }
// //     })
// //   }
// // }
//
// export const generatePdf = (survey: any, template: any, language = 'en_US') => {
//   // const data = mapSurveyToCharts({ survey, template });
//   const data = {};
//   const html = renderTemplate({ data, language });
//   // /*
//   //   Puppeteer is having issues with rendering SVGs with hex colors. Replace all with rgb(R, G, B).
//   //   https://github.com/GoogleChrome/puppeteer/issues/2556
//   //   */
//   // const replacedHTML = hexToRgb(html);
//   //
//   const pdf = () => renderPDF(html);
//   console.log(pdf);
//
//   //
//   // return pdf;
// };
