export interface StyleObject {
  [key: string]: string;
}
//
// export namespace DynamicStyler {
//   export interface Props {
//     className?: string;
//     style?: StyleObject;
//   }
// }
//
// export class DynamicStyler {
//
//
//   composeStyle(): object {
//     const cardStyle: StyleObject = {};
//
//     const addedStyle = this.addedStyle();
//
//     return {...cardStyle, ...addedStyle, ...this.props};
//   }
//
//   composeClassNames(): string {
//     let classNames: string[] = [];
//
//     if(this.props.className) {
//       classNames.push(this.props.className);
//     }
//
//     return classNames.join(' ');
//   }
//
//   addedClassName(): object{
//     return {};
//   }
//
//   addedStyle(): object{
//     return {
//     };
//   }
//
// }
