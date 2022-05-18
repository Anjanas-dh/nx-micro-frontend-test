import {
  Directive,
  Injector,
  OnInit,
  ViewContainerRef,
  createNgModuleRef,
} from '@angular/core';
// import { loadRemoteModule, setRemoteDefinitions } from '@nrwl/angular/mfe';
import {
  loadRemoteModule,
  LoadRemoteModuleEsmOptions,
} from '@angular-architects/module-federation';

@Directive({
  selector: '[mftestShellsRemote]',
})
export class RemoteDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {
    console.log('directive constructed');
  }

  async ngOnInit(): Promise<void> {
    console.log('directive ngOnInit');

    // const remoteModule = await loadRemoteModule('shop', 'shop/Module').then(
    //   (m) => m.RemoteEntryModule
    // );
    // console.log('directive remoteModule', remoteModule);

    // const remoteModule = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4201',
    //   // remoteName: 'planbar-micro',
    //   exposedModule: 'shop/Module',
    // }).then((m) => m.RemoteEntryModule);
    //  as {
    //   RemoteEntryModule: any;
    //   RemoteEntryComponent: any;
    // };
    // console.log('directive remoteModule', remoteModule);

    // const planBarModuleRef = createNgModuleRef(
    //   remoteModule.RemoteEntryModule,
    //   this.injector
    // );
    // this.viewContainerRef.createComponent(
    //   remoteModule.RemoteEntryComponent,
    //   planBarModuleRef
    // );
  }
}
