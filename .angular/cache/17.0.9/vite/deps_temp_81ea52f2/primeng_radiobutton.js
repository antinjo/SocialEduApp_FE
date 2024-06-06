import {
  NG_VALUE_ACCESSOR,
  NgControl
} from "./chunk-B6COAR6O.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle
} from "./chunk-LAQBG73Y.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  ViewChild,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-WTO4EDN6.js";
import "./chunk-W224PUNB.js";
import "./chunk-4WX7ZCK5.js";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c0 = ["input"];
var _c1 = (a1, a2, a3) => ({
  "p-radiobutton-label": true,
  "p-radiobutton-label-active": a1,
  "p-disabled": a2,
  "p-radiobutton-label-focus": a3
});
function RadioButton_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 7);
    ɵɵlistener("click", function RadioButton_label_6_Template_label_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.select($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵclassMap(ctx_r1.labelStyleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction3(6, _c1, _r0.checked, ctx_r1.disabled, ctx_r1.focused));
    ɵɵattribute("for", ctx_r1.inputId)("data-pc-section", "label");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.label);
  }
}
var _c2 = (a1, a2, a3) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a1,
  "p-radiobutton-disabled": a2,
  "p-radiobutton-focused": a3
});
var _c3 = (a1, a2, a3) => ({
  "p-radiobutton-box": true,
  "p-highlight": a1,
  "p-disabled": a2,
  "p-focus": a3
});
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
  }
  static ɵfac = function RadioControlRegistry_Factory(t) {
    return new (t || _RadioControlRegistry)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton {
  cd;
  injector;
  registry;
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Label of the radiobutton.
   * @group Props
   */
  label;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the label.
   * @group Props
   */
  labelStyleClass;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  constructor(cd, injector, registry) {
    this.cd = cd;
    this.injector = injector;
    this.registry = registry;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  handleClick(event, radioButton, focus) {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    this.select(event);
    if (focus) {
      radioButton.focus();
    }
  }
  select(event) {
    if (!this.disabled) {
      this.inputViewChild.nativeElement.checked = true;
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  writeValue(value) {
    this.checked = value == this.value;
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static ɵfac = function RadioButton_Factory(t) {
    return new (t || _RadioButton)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(RadioControlRegistry));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: "disabled",
      label: "label",
      tabindex: "tabindex",
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass"
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR])],
    decls: 7,
    vars: 29,
    consts: [[3, "ngStyle", "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "value", "focus", "blur"], ["input", ""], [3, "ngClass"], [1, "p-radiobutton-icon"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function RadioButton_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r4);
          const _r0 = ɵɵreference(3);
          return ɵɵresetView(ctx.handleClick($event, _r0, true));
        });
        ɵɵelementStart(1, "div", 1)(2, "input", 2, 3);
        ɵɵlistener("focus", function RadioButton_Template_input_focus_2_listener($event) {
          return ctx.onInputFocus($event);
        })("blur", function RadioButton_Template_input_blur_2_listener($event) {
          return ctx.onInputBlur($event);
        });
        ɵɵelementEnd()();
        ɵɵelementStart(4, "div", 4);
        ɵɵelement(5, "span", 5);
        ɵɵelementEnd()();
        ɵɵtemplate(6, RadioButton_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction3(21, _c2, ctx.checked, ctx.disabled, ctx.focused));
        ɵɵattribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        ɵɵadvance(1);
        ɵɵattribute("data-pc-section", "hiddenInputWrapper");
        ɵɵadvance(1);
        ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value);
        ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("aria-checked", ctx.checked)("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(25, _c3, ctx.checked, ctx.disabled, ctx.focused));
        ɵɵattribute("data-pc-section", "input");
        ɵɵadvance(1);
        ɵɵattribute("data-pc-section", "icon");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.label);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{ 'p-radiobutton p-component': true, 'p-radiobutton-checked': checked, 'p-radiobutton-disabled': disabled, 'p-radiobutton-focused': focused }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
            (click)="handleClick($event, input, true)"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
                <input
                    #input
                    [attr.id]="inputId"
                    type="radio"
                    [attr.name]="name"
                    [checked]="checked"
                    [disabled]="disabled"
                    [value]="value"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.tabindex]="tabindex"
                    [attr.aria-checked]="checked"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                />
            </div>
            <div [ngClass]="{ 'p-radiobutton-box': true, 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }" [attr.data-pc-section]="'input'">
                <span class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></span>
            </div>
        </div>
        <label
            (click)="select($event)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-radiobutton-label': true, 'p-radiobutton-label-active': input.checked, 'p-disabled': disabled, 'p-radiobutton-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
            >{{ label }}</label
        >
    `,
      providers: [RADIO_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: RadioControlRegistry
  }], {
    value: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static ɵfac = function RadioButtonModule_Factory(t) {
    return new (t || _RadioButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RadioButtonModule,
    declarations: [RadioButton],
    imports: [CommonModule],
    exports: [RadioButton]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [RadioButton],
      declarations: [RadioButton]
    }]
  }], null, null);
})();
export {
  RADIO_VALUE_ACCESSOR,
  RadioButton,
  RadioButtonModule,
  RadioControlRegistry
};
//# sourceMappingURL=primeng_radiobutton.js.map
