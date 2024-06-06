import {
  InitState,
  NGXS_PLUGINS,
  Store,
  getActionTypeFromInstance,
  withNgxsPlugin
} from "./chunk-CT6BAEKJ.js";
import "./chunk-5MBXI5FG.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  _global,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-M7CTU4LC.js";
import {
  catchError,
  tap
} from "./chunk-SKKX4QRL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DXGKNO7Z.js";

// node_modules/@ngxs/devtools-plugin/fesm2020/ngxs-devtools-plugin.mjs
var NGXS_DEVTOOLS_OPTIONS = new InjectionToken("NGXS_DEVTOOLS_OPTIONS");
var NgxsReduxDevtoolsPlugin = class {
  constructor(_options, _injector, _ngZone) {
    this._options = _options;
    this._injector = _injector;
    this._ngZone = _ngZone;
    this.devtoolsExtension = null;
    this.globalDevtools = _global["__REDUX_DEVTOOLS_EXTENSION__"] || _global["devToolsExtension"];
    this.unsubscribe = null;
    this.connect();
  }
  ngOnDestroy() {
    this.unsubscribe?.();
    this.globalDevtools?.disconnect();
  }
  /**
   * Lazy get the store for circular dependency issues
   */
  get store() {
    return this._injector.get(Store);
  }
  /**
   * Middleware handle function
   */
  handle(state, action, next) {
    if (!this.devtoolsExtension || this._options.disabled) {
      return next(state, action);
    }
    return next(state, action).pipe(catchError((error) => {
      const newState = this.store.snapshot();
      this.sendToDevTools(state, action, newState);
      throw error;
    }), tap((newState) => {
      this.sendToDevTools(state, action, newState);
    }));
  }
  sendToDevTools(state, action, newState) {
    const type = getActionTypeFromInstance(action);
    const isInitAction = type === InitState.type;
    if (isInitAction) {
      this.devtoolsExtension.init(state);
    } else {
      this.devtoolsExtension.send(__spreadProps(__spreadValues({}, action), {
        action: null,
        type
      }), newState);
    }
  }
  /**
   * Handle the action from the dev tools subscription
   */
  dispatched(action) {
    if (action.type === "DISPATCH") {
      if (action.payload.type === "JUMP_TO_ACTION" || action.payload.type === "JUMP_TO_STATE") {
        const prevState = JSON.parse(action.state);
        if (prevState.router && prevState.router.trigger) {
          prevState.router.trigger = "devtools";
        }
        this.store.reset(prevState);
      } else if (action.payload.type === "TOGGLE_ACTION") {
        console.warn("Skip is not supported at this time.");
      } else if (action.payload.type === "IMPORT_STATE") {
        const {
          actionsById,
          computedStates,
          currentStateIndex
        } = action.payload.nextLiftedState;
        this.devtoolsExtension.init(computedStates[0].state);
        Object.keys(actionsById).filter((actionId) => actionId !== "0").forEach((actionId) => this.devtoolsExtension.send(actionsById[actionId], computedStates[actionId].state));
        this.store.reset(computedStates[currentStateIndex].state);
      }
    } else if (action.type === "ACTION") {
      const actionPayload = JSON.parse(action.payload);
      this.store.dispatch(actionPayload);
    }
  }
  connect() {
    if (!this.globalDevtools || this._options.disabled) {
      return;
    }
    this.devtoolsExtension = this._ngZone.runOutsideAngular(() => this.globalDevtools.connect(this._options));
    this.unsubscribe = this.devtoolsExtension.subscribe((action) => {
      if (action.type === "DISPATCH" || action.type === "ACTION") {
        this.dispatched(action);
      }
    });
  }
};
NgxsReduxDevtoolsPlugin.ɵfac = function NgxsReduxDevtoolsPlugin_Factory(t) {
  return new (t || NgxsReduxDevtoolsPlugin)(ɵɵinject(NGXS_DEVTOOLS_OPTIONS), ɵɵinject(Injector), ɵɵinject(NgZone));
};
NgxsReduxDevtoolsPlugin.ɵprov = ɵɵdefineInjectable({
  token: NgxsReduxDevtoolsPlugin,
  factory: NgxsReduxDevtoolsPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsReduxDevtoolsPlugin, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NGXS_DEVTOOLS_OPTIONS]
      }]
    }, {
      type: Injector
    }, {
      type: NgZone
    }];
  }, null);
})();
function devtoolsOptionsFactory(options) {
  return __spreadValues({
    name: "NGXS"
  }, options);
}
var USER_OPTIONS = new InjectionToken("USER_OPTIONS");
var NgxsReduxDevtoolsPluginModule = class _NgxsReduxDevtoolsPluginModule {
  static forRoot(options) {
    return {
      ngModule: _NgxsReduxDevtoolsPluginModule,
      providers: [{
        provide: NGXS_PLUGINS,
        useClass: NgxsReduxDevtoolsPlugin,
        multi: true
      }, {
        provide: USER_OPTIONS,
        useValue: options
      }, {
        provide: NGXS_DEVTOOLS_OPTIONS,
        useFactory: devtoolsOptionsFactory,
        deps: [USER_OPTIONS]
      }]
    };
  }
};
NgxsReduxDevtoolsPluginModule.ɵfac = function NgxsReduxDevtoolsPluginModule_Factory(t) {
  return new (t || NgxsReduxDevtoolsPluginModule)();
};
NgxsReduxDevtoolsPluginModule.ɵmod = ɵɵdefineNgModule({
  type: NgxsReduxDevtoolsPluginModule
});
NgxsReduxDevtoolsPluginModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsReduxDevtoolsPluginModule, [{
    type: NgModule
  }], null, null);
})();
function withNgxsReduxDevtoolsPlugin(options) {
  return makeEnvironmentProviders([withNgxsPlugin(NgxsReduxDevtoolsPlugin), {
    provide: USER_OPTIONS,
    useValue: options
  }, {
    provide: NGXS_DEVTOOLS_OPTIONS,
    useFactory: devtoolsOptionsFactory,
    deps: [USER_OPTIONS]
  }]);
}
export {
  NGXS_DEVTOOLS_OPTIONS,
  NgxsReduxDevtoolsPlugin,
  NgxsReduxDevtoolsPluginModule,
  withNgxsReduxDevtoolsPlugin
};
//# sourceMappingURL=@ngxs_devtools-plugin.js.map
