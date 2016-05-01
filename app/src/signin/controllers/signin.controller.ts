interface ISignInControllerVm {
    name: string;
}

export default class SignInController {
    vm: ISignInControllerVm = <ISignInControllerVm> {};

    constructor() {
        this.vm.name = 'World!';
    }
}
