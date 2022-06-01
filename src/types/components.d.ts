// For this project development
// import DButton from '../../packages/components/button/src/button.vue';
// GlobalComponents for Volar
// declare module '*.vue' {
//     export interface GlobalComponents {
//         DButton: typeof Button
//     }
// }

declare module "*.vue" {
    import { DefineComponent } from "vue";
    const Component: DefineComponent<{}, {}, any>;
    export default Component;
}


// declare module '@vue/runtime-core' {
//     export interface GlobalComponents {
//         Component: (props: { is: Component | string }) => void
//     }
// }

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     DButton: typeof DButton
//   }
// }




// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $message: typeof import('../packages/element-plus')['ElMessage']
//     $notify: typeof import('../packages/element-plus')['ElNotification']
//     $msgbox: typeof import('../packages/element-plus')['ElMessageBox']
//     $messageBox: typeof import('../packages/element-plus')['ElMessageBox']
//     $alert: typeof import('../packages/element-plus')['ElMessageBox']['alert']
//     $confirm: typeof import('../packages/element-plus')['ElMessageBox']['confirm']
//     $prompt: typeof import('../packages/element-plus')['ElMessageBox']['prompt']
//     $loading: typeof import('../packages/element-plus')['ElLoadingService']
//   }
// }

export { }
